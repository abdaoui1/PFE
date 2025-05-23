import {JSX} from 'react'

export type ApiResponse<T> = {
    success: boolean,
    message: string | null,
    data: T | null,
    error?: string | null
}

// export const sallesJSX = Array.from({ length: 64 }, (_, i) => {
//     const num = i + 1;
//     return (<option key=${num} value="S${num}">Salle ${num}</option>);
// })
export const sallesJSX : JSX.Element[] = Array.from({ length: 64 }, (_, i) => {
  const num = i + 1;
  return (
    <option key={num} value={`S${num}`}>
      Salle {num}
    </option>
  );
});


//  let sallesJSX: string = ''; 
// for (let i = 1 ; i <= 64 ; i++) 
//     sallesJSX += `<option value="S${i}">Salle ${i}</option>`; // this only a string not a JSX element
// export  {sallesJSX}; 

export type TypeEntity = 'module' | 'filiere' | 'lieu';

export type Classe = {
    idClasse: number
    semestre: Semestre // each filiere has many classes switch the semestre s1 ,s2 ,s3...
    section?: Section //  each semestre has many classes switch the section A ,B ,C ... (null => without sections)
    groupe?: Groupe //  each section has many classes switch the groupe G1 ,G2 ,G3... (null => without groupes)
    effectif?: number

    Etudiant: Etudiant[]
    idFiliere?: number
    seances: Seance[]
}



export type Filiere = {
    idFiliere: number,
    nomFiliere: string
    abrFiliere: string
    classes?: Classe[]
}

export type Module = {
    idModule: number,
    nomModule: string
    abrModule: string
    dure: number
    departement: string | null
}


export type Sexe = 'HOMME' | 'FEMME'


export type TypeUser = 'ETUDIANT' | 'PROF' | 'ADMIN'


export type TypeLieu = 'AMPHI' | 'SALLE';

export type Bloc = 'A' | 'B' | 'C' | 'D';

export type Semestre = 'S1' | 'S2' | 'S3' | 'S4' | 'S5' | 'S6' | 'S7' | 'S8' | 'S9' | 'S10';

export type TypeSeance = 'COURS' | 'TD' | 'TP';

export type Section = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H';

export type Groupe = 'G1' | 'G2' | 'G3' | 'G4' | 'G5' | 'G6' | 'G7' | 'G8';

export type NumeroSeance = 'FIRST' | 'SECOND' | 'THIRD' | 'FOURTH' | 'FIFTH' | 'SIXTH';

export type Day = 'MONDAY' | 'TUESDAY' | 'WEDNEDAY' | 'THURSDAY' | 'FRIDAY' | 'SATURDAY';

export type User = {
    email: string
    password: string
    typeUser: TypeUser
    // relations belowe
    etudiant?: Etudiant
    prof?: Prof
    admin?: Admin
}

export type Etudiant = {
    cne: string
    nomEtd: string
    prenomEtd: string
    sexeEtd: Sexe
    teleEtd: string
    image: string
    emailEtd: string
    user?: User
    classe?: Classe
    idClasse?: number
}

export type Prof = {
    idProf: number
    nomProf: string
    prenomProf: string
    sexeProf: Sexe
    teleProf: string
    image?: string
    emailProf: string
    // relations
    user?: User
    seances?: Seance[]
}

export type Admin = {
    emailAdmin: string
    nomAdmin: string
    prenomAdmin: string
    sexeAdmin: Sexe
    teleAdmin: string
    image?: string
    user?: User
}

export type Lieu = {
    idLieu: number
    nomLieu?: string | null           // ✅ Only for AMPHI (can be null for SALLE)
    typeLieu?: TypeLieu | null
    numeroSalle?: number | null           // ✅ Only for Salle (can be null for AMPHI)
    bloc?: Bloc | null         // ✅ Only for SALLE (can be null for Amphi)
    capacite?: number | null
    etat?: string | null
    // relations 
    seances?: Seance[]
}


export type Seance = {
    idSeance: number
    numeroSeance: NumeroSeance
    typeSeance?: TypeSeance
    day: Day
    // For the official schedule, we want to know which day of the week it is
    // Later, I can add other attributes, such as whether the session is official or not.
    // If the session is not official, how can we determine its exact date?
    // relations 
    idModule?: number
    idLieu?: number
    idClasse?: number
    idProf?: number
    module?: Module
    lieu?: Lieu
    classe?: Classe
    prof?: Prof
}