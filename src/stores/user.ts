import { atom } from "nanostores";
import { IUserData } from "../types/user";

export const UserData: IUserData = atom({
    "name": "Miau",
    "age": "18",
    "gender": "M",
    "avatarUrl": "/uploads/tmpp67mmyiq_23158c9c00.png",
    "links": [
        {
            "name": "Instagram",
            "url": "https://instagram.com/elmiauro"
        }
    ],
    "categories": ["DZ"]
})

export function addNote(note: string) {
    //notes.set([...notes.get(), note]);
}