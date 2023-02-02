import * as fs                          from "fs";

// -- ======================================================================================

// .. list of all files
export const list = [
    "sign"      ,   "mountain"  ,   "bird"      ,   "elephant"  ,   "mother"    ,
    "coffee"    ,   "girl"      ,   "crow"      ,   "london"    ,   "sunset"    ,
    "wizard"    ,   "man"       ,   "puppy"     ,   "boat"      ,   "feather"   ,
    "home"      ,   "cat"       ,   "march"     ,   "leafs"     ,   "wet"       ,
    "march_8"   ,   "student"   ,   "snowball"  ,
    // "skull"
];

// -- ======================================================================================

// .. Check Existence of File and Providing its Download Info 
export function giveBG ( name: string ): Promise<{ filePath: string, fileName: string }> {

    // .. append ext of file
    let fileName = name + ".jpg";
    // .. define the path
    let filePath = "./src/beautyBGs/" + fileName;

    return new Promise ( (rs, rx) => { 
        // .. check existence of file 
        fs.promises.access( filePath, fs.constants.F_OK )
        // .. provide download info
        .then( () => rs( { filePath: filePath, fileName: fileName } ) )
        // .. report error
        .catch( e => rx(e) );
    } );

}

// -- ======================================================================================
