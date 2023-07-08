import { useState } from 'react'
import './Login.scss'
import '../components/atoms/Button.scss'
import classNames from 'classnames'

export default function Login() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <button className="primary-button" onClick={() => setIsModalOpen(v => !v)}>
                Ingresar
            </button>

            <div className={classNames({ modal: true, 'is-active': isModalOpen })}>
            <div className="modal-background"></div>
                <form className="modal-content animate" action="/signup" method="get">
                    <div className="modal-header">
                        <span />
                        <div className="close-modal" onClick={() => setIsModalOpen(false)}>&times;</div>
                    </div>

                    <div className="form-group">

                        <h3>Ingresar con</h3>
                        <input type="submit" className='facebook-button' value='Facebook' />
                        <input type="submit" className='google-button' value='Google' />
                    </div>

                    <div className="modal-footer">
                        <button className="outline-button" type="button" onClick={() => setIsModalOpen(false)}>Cancelar</button>
                    </div>
                </form>
            </div>
        </>
    )
}
