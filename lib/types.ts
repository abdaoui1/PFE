

export type ApiResponse <T> = {
    success: boolean,
    message: string | null,
    data: T | null ,
    error? : string | null 
}




export type Module = {
    idModule: number,
    nomModule: string
    abrModule: string
    dure: number
    departement: string | null
}

