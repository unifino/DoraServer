import * as g                           from '../../types/genetics'
import * as u                           from "../../types/user";

// -- =====================================================================================

export function gene ( user: u.user, ribosome: g.Ribosome ): Promise<g.gene> {

    return new Promise ( (rs, rx) => { 

        let DNA = require( "../DNA/" + ribosome.code ).DNA;
        let ABC = require( "../DNA/" + ribosome.code ).ABC;
        let MDL = require( "../DNA/" + ribosome.code ).MDL;

        a_good_gene_4_user( user, DNA, ribosome.readMode )
        .then( gene => {
            gene.model = MDL;
            gene.initSnaps = [ ...ABC, ...gene.initSnaps || [] ];
            rs( gene )
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

export function a_good_gene_4_user ( 

    user: u.user, 
    DNA: g.gene[], 
    by: "start"|"random"|"end"

): Promise<g.gene> {

    return new Promise ( (rs, rx) => {

        user_needs_these( user, DNA ).then( ids => {
            if ( !ids ) rx( "List has been corrupted!" );
            // .. get first|random|last suitable gene
            let id: number;
            switch ( by ) {
                case "start" : id = 0;                                        break;
                case "random": id = Math.floor( Math.random() * ids.length ); break;
                case "end"   : id = ids.length -1;                            break;
            }
            let gene = { id: ids[ id ].toString(), ...DNA[ ids[ id ] ] };
            rs( gene );
        } )
        .catch( err => rx( "EC03: " + err ) )

    } );

}

// -- =====================================================================================

export function user_needs_these ( user: u.user, DNA: g.gene[] ): Promise<number[]> {

    return new Promise ( (rs, rx) => {

        let list = [];

        // ! do we need this??
        // .. create list
        for ( let i=0; i < DNA.length; i++ ) list.push( i.toString() );

        // .. first Meet: return result
        if ( !user.gotFromThisRibosome.length ) return rs ( list );

        // .. trim list
        list = list.filter( i => !user.gotFromThisRibosome.includes(i) );

        // .. return result
        return list.length ? rs( list ) : rx( "no more lesson" );

    } );

}

// -- =====================================================================================
