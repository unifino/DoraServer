import { audio_page, avatar, audio, _ } from './DWXXXXX'
import * as g                           from '../../types/genetics'

// -- =====================================================================================

export const ABC: g.snapMargin = [] as any; 
export const MDL: g.OrganelleType[] = [ "dAudio", "rawText" ]; 

// -- =====================================================================================

export function DNA_maker (): Promise<g.gene[]> {

    return new Promise ( (rs, rx) => {

        let heute = heuteIst();
        let homeURL = "https://learngerman.dw.com/de/nachrichten/s-8030";

        _( homeURL ).then( homePage => {
            if ( homePage.includes( heute.code ) ) {
                _( newsPage( homePage, heute.code ) ).then( newsPage => {
                    _( audio_page( newsPage ) ).then( audioPage => {
                        rs ( [ {
                            model       : MDL,
                            id          : heute.code,
                            title       : heute.name,
                            text        : text( newsPage ),
                            avatarURL   : avatar( newsPage ),
                            mediaURL    : audio( audioPage ),
                            hPath       : heute.hPath 
                        } ] );
                    } )
                } );
            }
            else rx ( "No News: " + heute.code + "\n\n" + homePage );
        } );

    } );

}

// -- =====================================================================================

function heuteIst () {

    let date: Date,
        code: string;

    const monthNames = [
        "Januar", "Februar", "März", "April", "Mai", "Juni",
        "Juli", "August", "September", "Oktober", "November", "Dezember"
    ];
	
    date = new Date();
    // .. remove it
    date.setDate(date.getDate() - 2);

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
    aCut   = '<div class="col2 basicTeaser">';
    aCutID = str.indexOf( aCut );
    bCut   = heute;
    bCutID = str.lastIndexOf( bCut );
    str    = str.substring( aCutID , bCutID );

    aCut   = '<a href="';
    aCutID = str.indexOf( aCut );
    bCut   = '<h2 class="linkable">';
    bCutID = str.lastIndexOf( bCut );
    str    = str.substring( aCutID , bCutID );

    str    = str.replace( '<a href="' , 'https://www.dw.com' );
    bCut   = '">';
    bCutID = str.indexOf( bCut );
    str    = str.substring( 0 , bCutID );

    // .. second try - in mobile type page
    if ( !str ) {

        str    = tmp;

        aCut   = 'class="basicteaser__anchor basicteaser__anchor--S"';
        aCutID = str.indexOf( aCut );
        str    = str.substring( aCutID );

        aCut   = 'href="';
        aCutID = str.indexOf( aCut );
        str    = str.substring( aCutID );
        bCut   = '"';
        bCutID = str.indexOf( bCut );
        str    = str.substring( 0 , bCutID );

        str   = 'https://www.dw.com' + str;

    }

    return str;

}

// -- =====================================================================================

function text ( str: string ) {

    let aCut: string,
        bCut: string,
        aCutID: number,
        bCutID: number;

    aCut   = '<div class="longText">';
    aCutID = str.indexOf( aCut ) + aCut.length;
    bCut   = '<!-- detail_toolbox -->';
    bCutID = str.lastIndexOf( bCut );
    str    = str.substring( aCutID , bCutID );

    bCut   = '</div>';
    bCutID = str.indexOf( bCut );
    str    = str.substring( 0, bCutID );
    str    = str.replace( /&nbsp;/g , ' ' );
    str    = str.replace( /&amp;/g , '&' );
    str    = str.replace( /<p>/g , '' );
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
