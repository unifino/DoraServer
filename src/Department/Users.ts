// import { Pool, Client }                 from 'pg';
import * as g                           from '../types/genetics'
import * as u                           from '../types/user'
import { crypto }                       from './Crypto';
import * as genetics                    from "../Department/Genetics"

const nodeMailer = require( 'nodemailer' );
const vu: u.user = {
    id                  : 1                        ,
    email               : "string"                 ,
    devices             : [ {
        name            : "string"                 ,
        uuid            : "string"                 ,
    } ]                                            ,
    charge              : 100                      ,
    purchased_items     : {  }   ,
    ram                 : "string"                 ,
}

// -- ======================================================================================

type Result = {
    rowCount: number,
    rows: u.user[],
    // command: ,
    // oid: ,
    // fields: ,
    // _parsers: ,
    // _types: ,
    // RowCtor: ,
    // rowAsArray:
};

// const client = new Pool( {
//     connectionString: process.env.DATABASE_URL,
//     ssl: {
//       rejectUnauthorized: false
//     }
// } );

// const client = new Client( {
//     user: 'nifo',
//     host: 'localhost',
//     database: 'nifo',
//     password: 'asd',
//     port: 5432,
// } );

// client.connect();
// const client = await client.connect();
// client.release();


// -- ======================================================================================

export function _sendVerificationEmail ( email: string, code: string ): Promise<string> {

    return new Promise( (rs, rx) => { 

        if ( !email || !code ) return rx( "Insufficient Data!" );

        // .. credential data
        const myEmail = "register@dora.fitored.ir";
        const myEmailPass = "register72*secure";

        let transporter = nodeMailer.createTransport( {
            host: 'dora.fitored.ir',
            port: 465,
            secure: true,
            auth: {
                user: myEmail,
                pass: myEmailPass
            }
        } );

        let mailOptions = {
            from: myEmail,
            to: email,
            subject: "Verification Code",
            text: code
        };

        transporter.sendMail( mailOptions )
        .then( () => rs( "Sent" ) )
        .catch ( e => rx(e) );

    } );

}

// -- ======================================================================================

export function _userByEmail ( email: string ): Promise<u.user> {

    return new Promise ( (rs, rx) => {

        const qry = `SELECT * FROM users WHERE email = '${email}'`;
        // client.query( qry, ( err, r: Result ) => err ? rx(err) : rs( r.rows[0] ) );
        rs( vu )

    } );

}

// -- ======================================================================================

export function _register ( email: string, CKeyString: string ): Promise<string> {


    return new Promise ( (rs, rx) => {

        let verifiedKey: u.key;
        // .. translate coded-key as string
        const decodeKeyString = crypto( CKeyString, false, true );
        // .. try to open the translated-key 
        try { verifiedKey = JSON.parse( decodeKeyString ) } catch {}
        // .. KEY is Brocken!;
        if ( !verifiedKey ) return rx( "key is broken!" );

        // .. we have a valid key so continue ...

        // ..  find user by email
        _userByEmail( email )
        // .. the user is found | an new user is requesting
        .then( user => {

            // .. new User --- register it!
            if ( !user ) {
                _addNewUser( email, verifiedKey )
                .then( msg => rs( msg ) )
                .catch( err => rx( err ) );
            }

            // .. old User --- device should be checked!
            else {
                // .. check this user's device
                const usedDevice = isUsedDevice( user, verifiedKey );
                // .. user has been sent the request from a recognizable device
                if ( usedDevice ) { return rs( "entered" ) }
                // .. user attempts to register with a another device
                else {
                    // .. new slot will be occupied!
                    if ( user.devices.length < 3 ) {
                        _addDevice( user, verifiedKey )
                        .then( msg => rs( msg ) )
                        .catch( err => rx( "EC01: " + err ) );
                    }
                    // .. 3 Device has been Registered already!
                    else return rx( "too many devices!" );
                }
            }

        } )
        // .. something odd has been occurred!
        .catch( err => rx( "EC02: " + err ) );

    } );

}

// -- ======================================================================================

export function _addNewUser ( email: string, key: u.key ): Promise<string> {

    return new Promise ( async (rs, rx) => {

        // ! does we need such try and catches??
        try {

            let qry = `INSERT INTO users ( email, devices, purchased_items )
                VALUES ( '${ email }', '${ JSON.stringify( [ key ] ) }', '{}' )
                RETURNING *;`;

            // const result = await client.query( qry );

            // // ! better way to confirm??
            // if ( result.rowCount ) rs( "registered" );
            // else rx( "Unable to Register!" );
            rs( "registered" );
            
        } 
        catch (err) { rx( "EC05: " + err ) }

    } );

}

// -- ======================================================================================

export function _addDevice ( user: u.user, newKey: u.key ): Promise<string> {

    return new Promise ( async (rs, rx) => {

        try {

            // .. add new key ( as Device )
            user.devices.push( newKey );

            let qry = `UPDATE users SET devices = '${ JSON.stringify( user.devices ) }'
                WHERE id = '${ user.id }'
                RETURNING *;`;

            // const result: Result = await client.query( qry );

            // if ( result.rowCount ) rs ( "new Device added" );
            // else rx( "Unable to update user" );
            rs ( "new Device added" );

        }

        catch ( err ) { rx( "EC06: " + err ) }

    } );

}

// -- ======================================================================================

export function _userPurchasedItems ( email: string, CKeyString: string ): Promise<string> {

    return new Promise ( (rs, rx) => {

        // .. validating User
        validator( email, CKeyString )
        .then( user => {
            const purchasedItems = JSON.stringify( user.purchased_items );
            const CItems = crypto( purchasedItems, CKeyString );
            rs( CItems )
        } )
        .catch( err => rx( err ) );

    } );

}

// -- ======================================================================================

export function validator ( email: string, CKeyString: string ): Promise<u.user> {

    return new Promise ( async (rs, rx) => {

        let verifiedKey: u.key;
        // .. translate coded-key as string
        const decodeKeyString = crypto( CKeyString, false, true );
        // .. try to open the translated-key 
        try { verifiedKey = JSON.parse( decodeKeyString ) } catch {}
        // .. KEY is Brocken!;
        if ( !verifiedKey ) return rx( "key is broken!" );

        // .. we have a valid key so continue ...
        try {

            const qry = `SELECT * FROM users WHERE email = '${ email }'`;
            // const result: Result = await client.query( qry );

            // // .. checking Device | Guests will pass
            // if ( result.rowCount )
            //     isUsedDevice( result.rows[0], verifiedKey ) || email === "guest" ?
            //         rs( result.rows[0] ) : rx( "Device !E Account" );

            // else rx( "Unknown User!" );
            rs ( vu );

        }
        catch (err) { rx( err ) }

    } );

}

// -- ======================================================================================

function isUsedDevice ( user: u.user, verifiedKey: u.key ) {
    // ! .. accept all devices!!!
    return true;
    // .. check device
    return user.devices.some( x => x.uuid === verifiedKey.uuid )
}

// -- ======================================================================================

export function _battery_status ( email: string ): Promise<Number> {

    return new Promise ( async (rs, rx) => {

        try {

            const qry = `SELECT charge FROM users WHERE email = '${ email }'`;
            // const result: Result = await client.query( qry );

            // if ( result.rowCount ) rs( ( result.rows[0] as u.user ).charge );

            // else rx( "something wrong!" );

            rs( vu.charge );

        } catch (err) { rx( err ) }

    } );

}

// -- ======================================================================================

export function _cell_delivery (
    email: string,
    CKeyString: string,
    ribosomeCode: string,
    alreadyGotFromThisRibosome: string[]
): Promise<String> {

    return new Promise ( async (rs, rx) => {

        // .. validating User
        validator( email, CKeyString )
        .then( user => {
            // .. Insufficient Charge!
            if ( user.charge <= 0 ) return rx( "insufficient charge!" );
            // .. assign data to user
            user.gotFromThisRibosome = alreadyGotFromThisRibosome;
            // .. produce a new CELL
            genetics._get_cryptoCell_PACK ( ribosomeCode, user, CKeyString )
            .then( cellPack => {

                // .. first register this lesson for user
                deliveredToUser( user, ribosomeCode, cellPack.id )
                // .. then hand over the lesson to the user
                .then( () => rs( cellPack.cryptoCell ) )
                .catch( err => rx( "EC07: " + err ) );

            } )
            .catch( err => rx( "EC08: " + err ) );

        } )
        .catch( err => rx( "EC09: " + err ) );

    } );

}

// -- ======================================================================================

export function
deliveredToUser ( user: u.user, ribosomeCode: string, id: string ): Promise<void> {

    return new Promise ( async (rs, rx) => {

        try {

            let alreadyPurchased = false;

            // .. check if it has been purchased already
            try {
                if ( user.purchased_items[ ribosomeCode ].includes( id ) )
                    alreadyPurchased = true;
            } catch {}

            // .. register
            if ( !alreadyPurchased ) {

                user.purchased_items[ ribosomeCode ] ?
                    user.purchased_items[ ribosomeCode ].push( id ) :
                    user.purchased_items[ ribosomeCode ] = [ id ];

                // .. register cost
                user.charge -= 1;

            }

            // .. download cost
            user.charge -= 1;

            // ! remove this one
            user.charge = 100;

            // .. check user charge
            if ( user.charge < 0 ) return rx( "insufficient charge!" );

            let qry = `UPDATE users SET
                purchased_items = '${ JSON.stringify( user.purchased_items ) }',
                charge = ${ user.charge }
                WHERE id='${ user.id }'`;

            // const result: Result = await client.query( qry );

            // if ( result.rowCount ) rs();
            // else rx( "Unable to Update user!" );

            rs();

        }
        catch ( err ) { rx (err)  }

    } );

}

// -- ======================================================================================

// export function _charger ( user: u.user, power: number ): Promise<Number> {

//     return new Promise ( async (rs, rx) => {

//         try {

//             user.charge = user.charge + power;
//             if ( user.charge > 100 ) user.charge = 100;

//             const client = await pool.connect();

//             let query = `
//                 UPDATE users SET 
//                     charge = ${ user.charge } 
//                 WHERE 
//                     id='${ user.id }'
//             `;

//             const result = await client.query( query );

//             if ( result.rowCount ) rs( user.charge );
//             else rx( "Unable to Update user!" );

//             client.release();

//         } catch (err) { rx( "EC0??: " + err ) }

//     } );

// }


// -- ======================================================================================

export function _ramAction (
    email: string,
    CKeyString: string,
    action: u.RamActions|"check",
    z_data?: string
): Promise<string> {

    return new Promise ( (rs, rx) => {

        // .. validating User
        validator( email, CKeyString )
        .then( async user => {

            // .. check ram status
            if ( action === "check" ) rs ( user.ram ? "full" : "" );

            // .. write data on ram
            else if ( action === "upload" )
                ram_write( user, z_data ).then( () => rs( null ) ).catch( e => rx(e) );

            // .. read data from ram
            else if ( action === "download" ) {
                // .. purge data
                ram_write( user, "" )
                // .. return previous data
                .then( () => rs( user.ram ) )
                .catch( e => rx(e) );
            }

            // .. clean the ram
            else if ( action === "purge" ) {
                // .. purge data
                ram_write( user, "" )
                // .. return no data
                .then( () => rs( "" ) )
                .catch( e => rx(e) );
            }

            // .. Error on command
            else rx ( "Unknown Action" );

        } )
        .catch( err => rx( err ) );

    } );

}

// -- ======================================================================================

function ram_write ( user: u.user, z_data: string ): Promise<string> {

    return new Promise ( async (rs, rx) => {

        try {

            let qry = `UPDATE users SET ram = '${ z_data }'
                WHERE id = '${ user.id }'
                RETURNING *;`;

            // const result: Result = await client.query( qry );

            // if ( result.rowCount ) rs ( "Ram loaded successfully!" );
            // else rx( "Unable to upload on RAM!" );

            rs ( "Ram loaded successfully!" );

        }

        catch ( err ) { rx( "EC10: " + err ) }
 
    } );

}