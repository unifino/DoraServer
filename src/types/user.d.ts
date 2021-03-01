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
}

export interface key {
    name                : string                        ,
    uuid                : string                        ,
}