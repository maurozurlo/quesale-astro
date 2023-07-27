import { USER_CATEGORIES, USER_GENDER } from "../constants/user";

type UserGender = typeof USER_GENDER[number]["key"];
type UserCategories = typeof USER_CATEGORIES[number]["key"];

type Link = {
    name: string
    url: string
}

export interface IUserData {
    name: string;
    age: number;
    gender: UserGender;
    avatarUrl: string
    links: Link[]
    categories: UserCategories[],
    email: string;
}
