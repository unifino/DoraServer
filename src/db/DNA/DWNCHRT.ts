import { audio_page, avatar, audio, _ } from './DWXXXXX'
import * as g                           from '../../types/genetics'

// -- =====================================================================================

export const ABC: g.snapMargin = [] as any; 
export const MDL: g.OrganelleType[] = [ "dAudio", "rawText" ]; 

// -- =====================================================================================

export function DNA_maker (): Promise<g.gene[]> {

    return new Promise ( async(rs, rx) => {

        let homeURL = "https://learngerman.dw.com/de/langsam-gesprochene-nachrichten/s-60040332";

        for ( let i=0; i<7; i++ )
            await newsToData( homeURL, i ).then( gene => rs( gene ) );

        rx( "No News: " + tagIst(0).code + " and 7 days earlier" )

    } );

}

// -- =====================================================================================

function newsToData ( url: string, mod: number ): Promise<g.gene[]> {

    let tag = tagIst(mod);

    return new Promise ( (rs, rx) => {
        _( url ).then( homePage => {
            // .. PlainText only
            homePage = homePage.replace( /<script>.*.<\/script>/g, "" );
            if ( homePage.includes( tag.code ) ) {
                _( newsPage( homePage, tag.code ) ).then( news => {
                    rs ( [ {
                        model       : MDL,
                        id          : tag.code,
                        title       : tag.name,
                        text        : my_text( news ),
                        avatarURL   : my_avatar( news ),
                        mediaURL    : my_audio( news ),
                        hPath       : tag.hPath
                    } ] );
                } );
            }
            else rx ( "No News: " + tag.code );
        } )
        .catch( e => rx( "EC12: " + e ) );
    } );

}

// -- =====================================================================================

function tagIst ( mod: number ) {

    let date: Date,
        code: string;

    const monthNames = [
        "Januar", "Februar", "März", "April", "Mai", "Juni",
        "Juli", "August", "September", "Oktober", "November", "Dezember"
    ];
	
    date = new Date();
    date.setDate( date.getDate() -mod );

    let YYYY  = date.getFullYear().toString();
    let Month = monthNames[ date.getMonth() ];
    let MM    = date.getMonth() +1;
    let DD    = date.getDate().toString();

    code = DD + '.' + ( MM < 10 ?  "0" + MM : MM ) + '.' + YYYY;

    let heute = {
        code: code,
        name: DD + " " + Month + " " + YYYY,
        hPath: [ YYYY, Month ],
    };

    return heute;

}

// -- =====================================================================================

function newsPage ( str: string , heute: string ) {

    let aCut: string,
        bCut: string,
        aCutID: number,
        bCutID: number,
        tmp: string = str;

    // .. get the link
    aCut   = heute;
    aCutID = str.indexOf( aCut );
    str    = str.substring( aCutID );
 
    aCut   = "href=\"";
    aCutID = str.indexOf( aCut ) + aCut.length;
    bCut   = "\">";
    bCutID = str.indexOf( bCut );

    str    = str.substring( aCutID , bCutID );

    str    = "https://learngerman.dw.com" + str;

    return str;

}

// -- =====================================================================================

function my_text ( str: string ) {

    let aCut: string,
        bCut: string,
        aCutID: number,
        bCutID: number;

    aCut   = '</header>';
    aCutID = str.lastIndexOf( aCut ) + aCut.length;
    str    = str.substring( aCutID );

    bCut   = '</span>';
    bCutID = str.indexOf( bCut );
    str    = str.substring( 0, bCutID );

    aCut   = '>';
    aCutID = str.indexOf( aCut ) + aCut.length;
    str    = str.substring( aCutID );

    str    = str.replace( /&nbsp;/g , ' ' );
    str    = str.replace( /&amp;/g , '&' );
    str    = str.replace( /<p>/g , '' );
    str    = str.replace( /<h2>/g , '' );
    str    = str.replace( /<\/h2>/g , '' );
    str    = str.replace( /<span>/g , '' );
    str    = str.replace( /<br>/g , '' );
    str    = str.replace( /<\/p>/g , '' );
    str    = str.replace( /<strong>/g , '\n\n' );
    str    = str.replace( /<\/strong>/g , '\n' );
    str    = str.replace( /  \n/g , '\n' );
    str    = str.replace( /\n /g , '\n' );
    str    = str.trim();

    return str;

}

// -- =====================================================================================

function my_audio ( str: string ) {

    let aCut: string,
        bCut: string,
        aCutID: number,
        bCutID: number;

    bCut    = 'im Originaltempo';
    bCutID  = str.indexOf( bCut );
    str     = str.substring( 0, bCutID );

    aCut    = 'href="';
    aCutID  = str.lastIndexOf( aCut ) + aCut.length;
    bCut    = '.mp3"';
    bCutID  = str.lastIndexOf( bCut ) + aCut.length -2;
    str     = str.substring( aCutID, bCutID );

    return str;

}


// -- =====================================================================================

function my_avatar ( str: string ) {

    let aCut: string,
        bCut: string,
        aCutID: number,
        bCutID: number;

    bCut    = '_401.jpg';
    bCutID  = str.indexOf( bCut ) + bCut.length;
    str     = str.substring( 0, bCutID );

    aCut    = 'content="';
    aCutID  = str.lastIndexOf( aCut ) + aCut.length;
    str     = str.substring( aCutID );

    return str;

}

// -- =====================================================================================
