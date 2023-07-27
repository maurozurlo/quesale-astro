import { MouseEventHandler, useState } from 'react'
import { useStore } from '@nanostores/react';

import './Login.scss'
import '../components/atoms/Button.scss'
import classNames from 'classnames'
import { setUser } from '../stores/user';
import { MockUser } from '../mock/user';
import { USER_LOCALSTORAGE } from '../constants/user';

export default function Login() {
    const [isModalOpen, setIsModalOpen] = useState(false);


    const handleSubmit = (e: any) => {
        console.log()
        if (e.target.innerText === 'Facebook') {
            setUser(MockUser);
            localStorage.setItem(USER_LOCALSTORAGE, JSON.stringify(MockUser));
            location.replace('/');
        } else {
            // Do something else
            location.replace('/signup');
        }

    }

    return (
        <>
            <button className="primary-button" onClick={() => setIsModalOpen(v => !v)}>
                Ingresar
            </button>

            <div className={classNames({ modal: true, 'is-active': isModalOpen })}>
                <div className="modal-background"></div>
                <div className="modal-content animate">
                    <div className="modal-header">
                        <span />
                        <div className="close-modal" onClick={() => setIsModalOpen(false)}>&times;</div>
                    </div>

                    <div className="form-group">

                        <h3>Ingresar con</h3>
                        <button className='facebook-button' onClick={handleSubmit}>Facebook</button>
                        <button className='google-button' onClick={handleSubmit}>Google</button>
                    </div>

                    <div className="modal-footer">
                        <button className="outline-button" onClick={() => setIsModalOpen(false)}>Cancelar</button>
                    </div>
                </div>
            </div>
        </>
    )
}
