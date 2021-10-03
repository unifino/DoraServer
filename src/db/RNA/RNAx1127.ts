import * as g                           from '../../types/genetics'
import * as u                           from "../../types/user";
import { DNA_maker, ABC }               from "../DNA/DWNCHRT";

// -- =====================================================================================

export function gene ( user: u.user ): Promise<g.gene> {

    return new Promise ( (rs, rx) => {

        DNA_maker()
        .then( DNA => {
            if ( !user.gotFromThisRibosome.includes( DNA[0].id ) )
                rs( { ...DNA[0], initSnaps: [ ...ABC ] } );
            else
                rx( "No more News for Today!" );
        } )
        .catch( err => rx( err ) );

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