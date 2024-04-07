import * as g                           from '../../types/genetics'
import * as u                           from "../../types/user";
import { DNA_maker, ABC }               from "../DNA/DWNCHRT";

// -- =====================================================================================

export function gene ( user: u.user ): Promise<g.gene> {

    return new Promise ( (rs, rx) => {

        DNA_maker( user.gotFromThisRibosome )
        .then( DNA => rs( { ...DNA[0], initSnaps: [ ...ABC ] } ) )
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