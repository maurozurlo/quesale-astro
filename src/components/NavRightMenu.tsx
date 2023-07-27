// Navbar.js
import Login from '../modals/LoginProviders';
import UserMenu from './dropdowns/UserMenu';
import { useStore } from '@nanostores/react';
import { UserData } from '../stores/user';
import { useEffect, useState } from 'react';

export default function NavRightMenu() {
    const user = useStore(UserData);
    const [isLoggedIn, setIsLoggedIn] = useState(Boolean(user));

    useEffect(() => {
        if (user) {
            setIsLoggedIn(true)
        }
    }, [user])

    return isLoggedIn ? <UserMenu /> : <Login />
}