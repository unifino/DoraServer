import * as express                     from "express"
import * as BG                          from "./Department/BG";
import * as genetics                    from "./Department/Genetics"
import * as userActions                 from "./Department/Users";
let bodyParser = require('body-parser');

// -- ========================================================================= INIT =======

const PORT = process.env.PORT || 5000;
const app = express();

// -- ======================================================================== SETUP =======

app.use( bodyParser.urlencoded( { extended: false } ) );
app.use( bodyParser.json() );

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


// -- =================================== Providing Ribosomes filtered by Institute =======

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

// -- ============================================================ Listening on Port =======

app.listen( PORT, () => console.info( `running on ${ PORT } ...` ) ); 
