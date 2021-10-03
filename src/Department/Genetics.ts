import * as x1127                       from "../db/RNA/RNAx1127";
import * as x834                        from "../db/RNA/RNAx834";
import * as x835                        from "../db/RNA/RNAx835";
import * as x836                        from "../db/RNA/RNAx836";
import * as commonRNA                   from "../db/RNA/common";
import * as g                           from '../types/genetics'
import * as u                           from "../types/user";
import { crypto }                       from "./Crypto";
import { de_r }                         from "../db/ribosomes/de"
import { it_r }                         from "../db/ribosomes/it"
import { en_r }                         from "../db/ribosomes/en"

// -- =====================================================================================

// .. merge all ribosomes
const rpi = [ ...de_r, ...en_r, ...it_r ];

const RNA: {
    [key: string]: {
        gene: ( user: u.user, ribosome?: g.Ribosome ) => Promise<g.gene>
        junk: ( ribosome: g.Ribosome ) => Promise<g.junk>
    }
} = {
    x1127,
    x834,
    x835,
    x836,
    commonRNA
}

// -- =====================================================================================

export function _ribosomes ( institute: string, email: string ): g.Ribosome[] {

    let list = rpi.filter( ribosome => ribosome.institute === institute );

    // .. I hate coffeeBazar!
    if (
        email === "tmiladthrenody@gmail.com"  ||
        email === "mojpaydar2@gmail.com"      ||
        email === "venusrzz3@gmail.com"       ||
        // email === "nilmax99@gmail.com"        ||
        email === "taherikamran@yahoo.com"
    ) list = list.filter( x => ( x.code === "EATGOUT" ) );
    // .. My Student
    if ( email === "student@gmail.com" )
        list = list.filter( x => ( x.code === "DWNICO1" || x.code === "DWNIC1E" ) );
    else

    // .. filter private lessons
    list = list.filter( x => !x.private );

    // .. append length of DNA ( lessons count )
    for ( let item of list ) 
        if ( !item.contains )
            item.contains = require( "../db/DNA/" + item.code ).DNA.length;

    // .. sort alphabetically
    list = list.sort ( (a,b) => {
        if ( a.title.toLowerCase() == b.title.toLowerCase() ) return 0;
        if ( a.title.toLowerCase() >  b.title.toLowerCase() ) return 1;
        return -1;
    } );

    return list;

}

// -- =====================================================================================

export function _get_cryptoCell_PACK (

    ribosomeCode: string,
    user: u.user,
    CKeyString: string

): Promise<{ id: string, cryptoCell: string }> {

    return new Promise( async (rs, rx) => {

        let ribosomeId = rpi.findIndex( row => row.code === ribosomeCode );

        // .. very odd Error!
        if ( ribosomeId === -1 ) return rx( "Ribosome Not Found!" );

        let ribosome = rpi[ ribosomeId ];

        // .. get a new Cell
        get_a_new_cell( ribosome, user )
        .then( cell => rs ( {
            id: cell.chromosome.code.idx,
            cryptoCell: crypto( JSON.stringify( cell ), CKeyString )
        } ) )
        . catch( err => rx( "EC11: " + err ) );

    } );

}


// -- =====================================================================================

function get_a_new_cell ( ribosome: g.Ribosome, user: u.user ): Promise<g.cell> {

    return new Promise ( (rs, rx) => {

        // .. insufficient data
        if ( !ribosome.code ) return rx( "Entry mismatched!" );

        // .. RNA parser allocating
        let rCode: string;
        // .. DW Langsam gesprochene Nachrichten
        if      ( ribosome.code === "DWNCHRT" ) rCode = "x1127";
        // .. DW Top Thema
        else if ( ribosome.code === "DWTPTMA" ) rCode = "x834";
        // .. DW Alltagsdeutsch
        else if ( ribosome.code === "DWDALLT" ) rCode = "x835";
        // .. DW Sprachbar
        else if ( ribosome.code === "DWSCBAR" ) rCode = "x836";
        // .. any others
        else rCode = "commonRNA";

        // .. rRNA has been found
        if ( RNA.hasOwnProperty( rCode ) ) {

            let requiredData = [
                RNA[ rCode ].gene( user, ribosome ),
                RNA[ rCode ].junk( ribosome ),
            ] as [
                Promise<g.gene>,
                Promise<g.junk>,
            ]

            Promise.all( requiredData )
            .then( i => cell( ribosome, i[0], i[1] ) )
            .then( cell => rs( cell ) )
            .catch( err => rx(err) );

        }
        // .. this rRNA is not coded yet!
        else return rx( "rRNA error!" );


    } )

}

// -- =====================================================================================

function cell (
    ribosome: g.Ribosome,
    gene: g.gene|g.hypGene,
    junk:g.junk
): Promise<g.cell> {

    return new Promise ( (rs, rx) => {

        // .. check the model structure
        if ( modelIsUnacceptable( gene ) ) return rx( "Unknown Lesson's Pre-Model" );

        let organelles: g.Organelle[];

        // .. packing on base 2
        if ( gene.model.length === 1 ) organelles = packingM1( gene as g.hypGene );
        // .. packing on base 2
        if ( gene.model.length === 2 ) organelles = packingM2( gene as g.gene );

        rs ( {

            chromosome: {
                ...junk                                     ,
                title           : gene.title                ,
                code            : {                          
                    ribosome    : ribosome.code             ,
                    idx         : gene.id                   ,
                }                                           ,
                model           : gene.model                ,
                hPath           : [                          
                    ribosome.title.replace( /\n/g, ' ' )    ,
                    ...gene.hPath || []                      
                ]                                           ,
                vPath           : [ gene.title ]            ,
            }                                               ,

            protoplasm          : organelles                ,

        } );

    } );

}

// -- =====================================================================================

function packingM1 ( gene: g.hypGene ) {

    // .. pack organelles
    let organelles: g.Organelle[] = [
        {                                  
            type        : "hypText"         ,
            content     : gene.hyperText    ,
        },{                                  
            type        : "dAvatar"         ,
            sourceURL   : gene.avatarURL    ,
            copyRight   : !!gene.avatar_C   ,
        }                                    
    ];

    return organelles;

}


// -- =====================================================================================

function packingM2 ( gene: g.gene ) {

    // .. pack organelles
    let organelles: g.Organelle[] = [
        {                                    
            type        : gene.model[0]     ,
            sourceURL   : gene.mediaURL     ,
            copyRight   : !!gene.media_C    ,
            isYouTube   : !!gene.isYouTube  ,
        },{                                  
            type        : gene.model[1]     ,
            text        : gene.text         ,
            initSnaps   : gene.initSnaps    ,
        },{                                  
            type        : "dAvatar"         ,
            sourceURL   : gene.avatarURL    ,
            copyRight   : !!gene.avatar_C   ,
        }                                    
    ];

    return organelles;

}

// -- =====================================================================================

function modelIsUnacceptable( gene: g.gene|g.hypGene ) {

    // .. check geneModels based on 1 Organs
    if ( gene.model.length === 1 ) {
        if ( gene.model[0] !== "hypText" )
            return false;
    }

    // .. check geneModels based on 2 Organs
    else if ( gene.model.length === 2 ) {
        // .. acceptable models based on 2 Organs
        if (
            !(
                ( gene.model[0] === "dAudio"  && gene.model[1] === "rawText"  ) ||
                ( gene.model[0] === "dVideo"  && gene.model[1] === "subtitle" ) ||
                ( gene.model[0] === "dImage"  && gene.model[1] === "rawText"  ) ||
                ( gene.model[0] === "rawText" && gene.model[1] === "rawText"  )
            )
        )
            return false;
    }

    // .. other models are not acceptable
    else return false;

    // .. it meets our requests
    return true;

}

// -- =====================================================================================