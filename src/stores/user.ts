import { atom } from "nanostores";
import { IUserData } from "../types/user";

export const UserData = atom(null)

export function setUser(user: IUserData) {
    console.log("Setting user in store")
    UserData.set(user);
}