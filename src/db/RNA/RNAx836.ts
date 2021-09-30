import * as g                           from '../../types/genetics'
import * as u                           from "../../types/user";
import {
    DNAxList,
    DNA_maker,
    ABC,
    MDL
}                                       from "../DNA/DWSCBAR";

// -- =====================================================================================

export function gene ( user: u.user ): Promise<g.gene> {

    return new Promise ( (rs, rx) => {

        DNAxList().then( list => {

            // .. filter list to new ones for user
            list = list.filter( item => !user.gotFromThisRibosome.includes( item.id ) );

            if ( !list.length ) rx( "No more Lesson for now!" );

            else {
                DNA_maker( list[0].id ,list[0].link )
                .then( DNA => rs( { ...DNA[0], initSnaps: [ ...ABC ], model: MDL } ) )
                .catch( err => rx( err ) );
            };

        } )
        .catch( err => rx( "EC04: " + err ) );

    } );

}

// -- =====================================================================================

export function junk ( ribosome: g.Ribosome ): Promise<g.junk> {

    return new Promise ( (rs, rx) => {

        let junk: g.junk;

        junk = {
            institute   : ribosome.institute    ,
            level       : ribosome.level        ,
            vPath       : null                  ,
            status      : "reading"             ,
        };

        rs( junk )

    } );

}

// -- =====================================================================================
