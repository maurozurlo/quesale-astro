export const USER_GENDER = [
    {
        key: "M",
        label: "Masculino"
    },
    {
        key: "F",
        label: "Femenino"
    },
    {
        key: "NB",
        label: "No binarie"
    },
    {
        key: "NS",
        label: "Prefiero no decir"
    }
] as const; // Add 'as const' to preserve the specific string literal types of 'key' property

export const USER_CATEGORIES = [
    {
        label: "Arte Plastico",
        key: "AP"
    },
    {
        label: 'Arte Audiovisual',
        key: "AA"
    },
    {
        label: 'Arte Digital',
        key: "AD"
    },
    {
        label: 'Fotografia',
        key: 'FG'
    },
    {
        label: 'Teatro',
        key: 'TT'
    },
    {
        label: 'Danza',
        key: 'DZ'
    },
    {
        label: 'Musica',
        key: 'MU'
    },
    {
        label: 'Instalacion',
        key: 'IL'
    },
    {
        label: 'Poesia',
        key: 'PO'
    },
    {
        label: 'VR',
        key: 'VR'
    },
    {
        label: '3D/Videojuegos',
        key: '3D'
    },
    {
        label: 'Organizacion de eventos',
        key: 'OR'
    },
] as const;

export const GetCategory = (categoryKey: string) => USER_CATEGORIES.find(({key}) => key === categoryKey);
export const GetGender = (genderKey: string) => USER_GENDER.find(({key}) => key === genderKey);

export const USER_MAX_LINKS = 5;

export const USER_LOCALSTORAGE = "quesale-user"