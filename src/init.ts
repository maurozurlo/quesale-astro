// Stuff that runs whenever the app is initialized
import { USER_LOCALSTORAGE } from "./constants/user";
import { UserData, setUser } from "./stores/user";
import { IUserData } from "./types/user";
// Check for user in localStorage, if it exists, save it to user store;

if (localStorage.getItem(USER_LOCALSTORAGE)) {
    setUser(JSON.parse(localStorage.getItem(USER_LOCALSTORAGE)));
    console.log('Loaded user form localStorage')
}