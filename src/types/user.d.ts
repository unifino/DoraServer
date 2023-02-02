export interface user {
    id                  : number                        ,
    email               : string                        ,
    devices             : [ {                            
        name            : string                        , 
        uuid            : string                        , 
    } ]                                                 ,
    charge              : number                        ,
    purchased_items     : { [key: string]: string[] }   ,
    currentDevice?      : string                        ,
    gotFromThisRibosome?: string[]                      ,
    ram                 : string                        ,
}

export interface key {
    name                : string                        ,
    uuid                : string                        ,
}

export type RamActions = "upload"|"download"|"purge";