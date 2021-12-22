import * as express                     from "express"
import * as BG                          from "./Department/BG";
import * as genetics                    from "./Department/Genetics"
import * as userActions                 from "./Department/Users";
import * as u                           from './types/user';

// -- ========================================================================= TEST =======

// .. https://stark-chamber-36060.herokuapp.com/
import { request }                          from 'https';

// -- ========================================================================= INIT =======

const PORT = process.env.PORT || 5000;
const app = express();
let bodyParser = require( 'body-parser' );
const userAgent = "Mozilla/5.0 (Linux; Android 11; SAMSUNG SM-G973U) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/14.2 Chrome/87.0.4280.141 Mobile Safari/537.36";

// -- ======================================================================== SETUP =======

app.use( bodyParser.json( { limit: '50mb' } ) );
app.use( bodyParser.urlencoded( {
    limit: '50mb',
    extended: true,
    parameterLimit: 50000
} ) );


// -- ============================================================ List of BeautyBGs =======

app.get( '/test', ( req: express.Request, res: express.Response ) => {

    // let link = "https://www.dw.com/de/deutsch-lernen/alltagsdeutsch/s-9214";
    const link = req.query.l as string;
    var options = {
        url: link,
        headers: { "User-Agent": userAgent }
    };
    request( options, res_2 => {

        let html = "";

        // TODO Get STATUS CODE
        try {
            res_2.setEncoding('utf8');
            res_2.on( 'data', chunk => html += chunk )
            res_2.on( "end", () => {
                // .. report
                res.json( { status: 200, answer: html } )
            } );
        } catch (e) {
            res.json( e )
        }

    } );

} );

// -- ============================================================ List of BeautyBGs =======

app.get( '/beautyBGList', ( req: express.Request, res: express.Response ) => {

    // .. report the list
    res.json( { status: 200, answer: JSON.stringify( BG.list ) } )

} );

// -- =========================================================== DownloadLink of BG =======

app.get( '/giveMeBG', ( req: express.Request, res: express.Response ) => {

    // .. requests
    const fileName = req.query.f as string;

    // .. Process Request by BG Department 
    BG.giveBG ( fileName )
    // .. everything is good: Providing Download Link
    .then( obj => res.download( obj.filePath, obj.fileName ) )
    // .. report error
    .catch( err => res.json( { status: 500, reason: err + "" } ) );


} );

// -- =================================== Providing Ribosomes filtered by Institute =======

app.get( '/ribosome', ( req: express.Request, res: express.Response ) => {

    // .. requests
    const institute = req.query.i as string;
    const email = req.query.e as string;

    // .. Process Request by Genetic Department
    const list = genetics._ribosomes( institute as string, email );
    // .. report the list
    res.json( { status: 200, answer: JSON.stringify( list ) } );

} );

// -- ================================================== verification Email Address =======

app.get( '/verificationCode', function (req, res) {

    // .. requests
    const email = req.query.e as string;
    const code = req.query.c as string;

    // .. Process Request by Users Department
    userActions._sendVerificationEmail( email, code )
    // .. everything is good
    .then( state => res.json( { status: 200, answer: state } ) )
    // .. report error
    .catch( err => res.json( { status: 500, reason: err + "" } ) );

} );

// -- ===================================================== CHECKING  Email Address =======

app.get( '/isNewEmail', ( req: express.Request, res: express.Response ) => {

    // .. requests
    const email = req.query.e as string;

    // .. Process Request by Users Department
    userActions._userByEmail( email )
    // .. everything is good
    .then( user => res.json( { status: 200, answer: !user } ) )
    // .. report error
    .catch( err => res.json( { status: 500, reason: err + "" } ) );

} );

// -- ================================================================ register User =======

app.get( '/register', async ( req: express.Request, res: express.Response ) => {

    // .. requests
    const email = req.query.e as string;
    const CKeyString = req.query.k as string;

    // .. Process Request by Users Department
    userActions._register( email, CKeyString )
    // .. everything is good
    .then( msg => res.json( { status: 200, answer: msg } ) )
    // .. report error
    .catch( err => res.json( { status: 500, reason: err + "" } ) );

} );

// -- ======================================= Reporting Already User-Purchased-Items =======

app.post( '/purchasedItems', ( req: express.Request, res: express.Response ) => {

    // .. requests | assign requests from POST
    const email = req.body.e as string;
    const CKeyString = req.body.k as string;

    // .. Process Request by Users Department
    userActions._userPurchasedItems( email, CKeyString )
    // .. everything is good
    .then( msg => res.json( { status: 200, answer: msg } ) )
    // .. report error
    .catch( err => res.json( { status: 500, reason: err + "" } ) );

} );

// -- =========================================================== Get Battery Status =======

app.post( '/getBattery', ( req: express.Request, res: express.Response ) => {

    // .. requests | assign requests from POST
    const email = req.body.e as string;

    // .. Process Request by Users Department
    userActions._battery_status( email )
    // .. everything is good
    .then( chargeValue => res.json( { status: 200, answer: chargeValue } ) )
    // .. report error
    .catch( err => res.json( { status: 500, reason: err + "" } ) );

} );

// -- ================================================================= Get new Cell =======

app.post( '/x_cell', ( req: express.Request, res: express.Response ) => {

    // .. requests | assign requests from POST
    const email = req.body.e as string;
    const CKeyString = req.body.k as string;
    const ribosomeCode = req.body.r as string;
    const alreadyGotLessons = req.body.l as string[];

    // .. Process Request by Users Department
    userActions._cell_delivery( email, CKeyString, ribosomeCode, alreadyGotLessons )
    // .. everything is good
    .then( x_cell => res.json( { status: 200, answer: x_cell } ) )
    // .. report error
    .catch( err => res.json( { status: 500, reason: err + "" } ) );

} );

// -- ================================================================ RAM : status =======

app.post( '/getRamStatus', ( req: express.Request, res: express.Response ) => {

    // .. requests | assign requests from POST
    const email = req.body.e as string;
    const CKeyString = req.body.k as string;

    // .. Process Request by Users Department
    userActions._ramAction( email, CKeyString, "check" )
    // .. everything is good
    .then( msg => res.json( { status: 200, answer: msg } ) )
    // .. report error
    .catch( err => res.json( { status: 500, reason: err + "" } ) );

} );

// -- ========================================================== RAM : read | write =======

app.post( '/ram', ( req: express.Request, res: express.Response ) => {

    // .. requests | assign requests from POST
    const email = req.body.e as string;
    const CKeyString = req.body.k as string;
    const z_data = req.body.d as string;
    const action = req.body.a as u.RamActions;

    // .. Process Request by Users Department
    userActions._ramAction( email, CKeyString, action, z_data )
    // .. everything is good
    .then( msg => res.json( { status: 200, answer: msg } ) )
    // .. report error
    .catch( err => res.json( { status: 500, reason: err + "" } ) );

} );

// -- ============================================================ Listening on Port =======

app.listen( PORT, () => console.info( `running on ${ PORT } ...` ) ); 

// -- ========================================================================= FINE =======