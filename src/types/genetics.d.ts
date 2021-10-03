import * as u                           from "./user";

export interface Ribosome {
    institute       : string                        ,
    code            : string                        ,
    type            : LessonType                    ,
    level           : CEF                           ,
    title           : string                        ,
    avatar          : string                        ,
    source          : string                        ,
    contains        : number|"∞"                    ,
    readMode        : "start"|"random"|"end"        ,
    private?        : boolean                       ,
}

export interface gene {
    id?             : string                        ,
    model?          : OrganelleType[]               ,
    title           : string                        ,
                                                     
    text            : string                        ,
    initSnaps?      : [number,number][]             ,
                                                     
    avatarURL       : string                        ,
    avatar_C?       : boolean                       ,
                                                     
    mediaURL        : string                        ,
    media_C?        : boolean                       ,
    isYouTube?      : boolean                       ,
                                                     
    hPath?          : string[]                      ,
    flags?          : UnifiedGeneFlags              ,
}
export interface UnifiedGeneFlags {
    author?         : string                        ,
    genre?          : "melodrama"|"drama"|"funny"   ,
    source?         : string                        ,
}
export type snapMargin = [ [0, number], [-1, number] ];

export interface hypGene {
    id?             : string                        ,
    title           : string                        ,
                                                     
    avatarURL       : string                        ,
    avatar_C?       : boolean                       ,
                                                     
    hPath?          : string[]                      ,
                                                     
    hyperText       : UniText[]                     ,
}

export interface _new_gene {
    [key: string ]  : ( ribosomeCode: string, user: u.user ) => Promise<gene> 
}

export interface junk {
    // .. mandatory properties                       
    institute       : string                        ,
    level           : CEF                           ,
    vPath           : string[]                      ,
    status          : LessonStatus                  ,
}

export interface _junk { 
    [key: string ]  : () => Promise<junk> 
}

export interface Chromosome {
                                                     
    institute       : string                        ,
    title           : string                        ,
    model           : OrganelleType[]               ,
    code            : ChromosomeCode                ,
    level?          : CEF                           ,
    hPath           : string[]                      ,
    vPath           : string[]                      ,
    status          : LessonStatus                  ,
                                                     
}

export interface cell { 
    chromosome      : Chromosome                    ,
    protoplasm      : Organelle[]                   ,
}

export type Organelle = {                            
                                                     
    type            : OrganelleType                 ,
                                                     
    sourceURL?      : string                        ,
    copyRight?      : boolean                       ,
    address?        : string                        ,
                                                     
    text?           : string                        ,
    content?        : UniText[]                     ,
    etikett?        : { [key: string]: number[] }   ,
    initSnaps?      : [number,number][]             ,
                                                     
    isYouTube?      : boolean                       ,
                                                     
    location?       : "before"|"after"              ,
    pinnedPoint?    : number                        ,
    position?       : number                        ,
                                                     
}

export type LessonType = 'audio'|'video'|'mixed'|"plain";
export type OrganelleType = 
      "dAudio"
    | "dVideo"
    | "dImage"
    | "dText"
    | "hypText"
    | "dAvatar"
    | "subtitle"
    | "rawText"
    ;

type LessonStatus = 'reading' | 'read';
type CEF = "A1"|"A2"|"B1"|"B2"|"C1"|"C2";

// -- =====================================================================================

export interface UniText {
    [0]:  string,
    [1]:  UniTextFlags,
    [2]?: LinkedMaterials,
    length : 2|3,
}
export interface UniTextFlags {
    isDeleted?      : boolean                       ,
    phrased?        : "blue"|"red"                  ,
    bind?           : number                        ,
    snap?           : number                        ,
    standoff?       : "block"|"bridge"|"depart"     ,
    isBreakLine?    : boolean                       ,
}
export type LinkedMaterials = Organelle[];

interface ChromosomeCode {                           
    ribosome    : string                            ,
    idx         : string                            ,
}                                                    