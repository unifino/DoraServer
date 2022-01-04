import * as express                     from "express"
import * as BG                          from "./Department/BG";
import * as genetics                    from "./Department/Genetics"
import * as userActions                 from "./Department/Users";
import * as u                           from './types/user'

// -- ========================================================================= INIT =======

const PORT = process.env.PORT || 5000;
const app = express();
let bodyParser = require( 'body-parser' );

// -- ======================================================================== SETUP =======

app.use( bodyParser.json( { limit: '50mb' } ) );
app.use( bodyParser.urlencoded( {
    limit: '50mb',
    extended: true,
    parameterLimit: 50000
} ) );

// -- ============================================================ List of BeautyBGs =======
app.get( '/test', (req, res) => {
    res.write( `
    <!DOCTYPE html>
    <html lang="tr">
    
    <head>
        <meta charset="utf-8" />
        <title>Elektronik Tahlil Sonucu Doğrulama</title>
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta content="" name="description" />
        <meta content="" name="author" />
        <link href="https://enabiz.gov.tr/css/eNabizMain.css" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

        <style>
            .BoxContent {
                width: 50%;
                margin: 7% auto;
                position: relative;
                background-color: #fff;
                -webkit-box-shadow: 2px 2px 13px 0px rgba(0,0,0,.20);
                -moz-box-shadow: 2px 2px 13px 0px rgba(0,0,0,.20);
                box-shadow: 2px 2px 13px 0px rgba(0,0,0,.20);
            }
    
            .EnabizLogo {
                padding: 15px;
                height: 70px;
                position: relative;
                left: 0;
                margin-bottom: 50px
            }
    
            @media (max-width: 991px) {
                .BoxContent {
                    width: 100%;
                    margin: 0% auto;
                    -webkit-box-shadow: none;
                    -moz-box-shadow: none;
                    box-shadow: none;
                }
    
                body {
                    margin: 0;
                    padding: 0;
                }
    
                .EnabizLogo {
                    margin-bottom: 0px
                }
            }
        </style>
    </head>
    
    <body>
        <div class="BoxContent">
            <img src="https://enabiz.gov.tr/images/enabiz-logo-giris.png" class="EnabizLogo" />
            <img src="https://enabiz.gov.tr/images/sb-logo-giris.png" style="position: absolute;right:0;height: 100px;" />
            <div class="clearfix"></div>
            <div style="padding:50px;">
    
                    <p class="note note-success" style="line-height:30px;margin-bottom: 40px;">
                        Tahlil sonucu *******9558 pasaport numaral&#x131;    HA***  ZAMANDOKHTTEHR*** isimli kişiye aittir.
                        Test sonucu NEGATIF olup numune al&#x131;nma tarihi ise 01/03/2022 4:45:00 PM&#x2019;dir
                        <br />
                        Belge 03.01.2022 tarihinde  HA***  ZAMANDOKHTTEHR*** tarafından indirilmiştir.
                        <br />
                        YURT DI&#x15E;I &#xC7;IKI&#x15E; AMA&#xC7;LI BELGE OLARAK KULLANILAB&#x130;L&#x130;R.
                    </p>
                    <div class="clearfix"></div>
                    <p class="note note-success" style="line-height:30px;margin-bottom: 40px;">
                        The result of this test belongs to  HA***  ZAMANDOKHTTEHR*** with Passport Number *******9558.
                        The test result is NEGATIVE and the sampling date is 01/03/2022 4:45:00 PM.
                        <br />
                        It was downloaded by  HA***  ZAMANDOKHTTEHR*** on 03.01.2022.
                        <br />
                        CAN BE USED AS A DOCUMENT FOR EXIT ABROAD.
                    </p>
                    <div class="clearfix"></div>
                <div class="clearfix"></div>
            </div>
        </div>
    </body>
    </html>` )
 } )
app.get( '/test2', (req, res) => {
    res.write( `
    <!DOCTYPE html>
    <html lang="tr">
    
    <head>
        <meta charset="utf-8" />
        <title>Elektronik Tahlil Sonucu Doğrulama</title>
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta content="" name="description" />
        <meta content="" name="author" />
        <link href="https://enabiz.gov.tr/css/eNabizMain.css" rel="stylesheet" />
        <style>
            .BoxContent {
                width: 50%;
                margin: 7% auto;
                position: relative;
                background-color: #fff;
                -webkit-box-shadow: 2px 2px 13px 0px rgba(0,0,0,.20);
                -moz-box-shadow: 2px 2px 13px 0px rgba(0,0,0,.20);
                box-shadow: 2px 2px 13px 0px rgba(0,0,0,.20);
            }
    
            .EnabizLogo {
                padding: 15px;
                height: 70px;
                position: relative;
                left: 0;
                margin-bottom: 50px
            }
    
            @media (max-width: 991px) {
                .BoxContent {
                    width: 100%;
                    margin: 0% auto;
                    -webkit-box-shadow: none;
                    -moz-box-shadow: none;
                    box-shadow: none;
                }
    
                body {
                    margin: 0;
                    padding: 0;
                }
    
                .EnabizLogo {
                    margin-bottom: 0px
                }
            }
        </style>
    </head>
    
    <body>
        <div class="BoxContent">
            <img src="https://enabiz.gov.tr/images/enabiz-logo-giris.png" class="EnabizLogo" />
            <img src="https://enabiz.gov.tr/images/sb-logo-giris.png" style="position: absolute;right:0;height: 100px;" />
            <div class="clearfix"></div>
            <div style="padding:50px;">
    
                    <p class="note note-success" style="line-height:30px;margin-bottom: 40px;">
                        Tahlil sonucu *******9558 pasaport numaral&#x131;    HA***  ZAMANDOKHTTEHR*** isimli kişiye aittir.
                        Test sonucu NEGATIF olup numune al&#x131;nma tarihi ise 01/03/2022 6:07:00 PM&#x2019;dir
                        <br />
                        Belge 03.01.2022 tarihinde  HA***  ZAMANDOKHTTEHR*** tarafından indirilmiştir.
                        <br />
                        YURT DI&#x15E;I &#xC7;IKI&#x15E; AMA&#xC7;LI BELGE OLARAK KULLANILAB&#x130;L&#x130;R.
                    </p>
                    <div class="clearfix"></div>
                    <p class="note note-success" style="line-height:30px;margin-bottom: 40px;">
                        The result of this test belongs to  HA***  ZAMANDOKHTTEHR*** with Passport Number *******9558.
                        The test result is NEGATIVE and the sampling date is 03/01/2022 6:07:00 PM.
                        <br />
                        It was downloaded by  HA***  ZAMANDOKHTTEHR*** on 03.01.2022.
                        <br />
                        CAN BE USED AS A DOCUMENT FOR EXIT ABROAD.
                    </p>
                    <div class="clearfix"></div>
                <div class="clearfix"></div>
            </div>
        </div>
    </body>
    </html>` )
 } )

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