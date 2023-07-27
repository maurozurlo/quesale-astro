import { atom } from "nanostores";

export const userData = atom({
    userName: "Mauro Zurlo",
    age: 108,
    //profilePicture: /22890128.png
})

export function addNote(note: string) {
    //notes.set([...notes.get(), note]);
}