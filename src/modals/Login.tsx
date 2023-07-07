import { useState } from 'react'
import './Login.scss'
import '../components/atoms/Button.scss'

export default function Login() {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [rememberMe, setRememberMe] = useState(true)

  return (
    <>
      <button className="primary-button" onClick={() => setIsModalOpen(v => !v)}>
        Ingresar
      </button>
      {
        isModalOpen ? (
          <div className="modal">
            <form className="modal-content animate" action="/action_page.php" method="post">
              <div className="modal-header">
                <span />
                <span className="close-modal" title="Close Modal" onClick={() => setIsModalOpen(false)}>&times;</span>
              </div>

              <img src="img_avatar2.png" alt="Avatar" className="avatar" />

              <div className="form-group">
                <label htmlFor="uname">Usuario</label>
                <input type="text" placeholder="Enter Username" name="uname" required />

                <label htmlFor="psw">Contraseña</label>
                <input type="password" placeholder="Enter Password" name="psw" required />

                <button type="submit" className='primary-button'>Ingresar</button>

                <div className='align-left'>
                  <label className='checkbox'>
                    Recordarme
                    <input type="checkbox" onChange={(evt) => setRememberMe(evt.target.checked)} checked={rememberMe} name="remember" />
                  </label>
                </div>
              </div>

              <div className="modal-footer">
                <button className="outline-button" type="button" onClick={() => setIsModalOpen(false)}>Cancelar</button>
                <a href="#">Te olvidaste la contraseña?</a>
              </div>
            </form>
          </div>
        ) : null
      }
    </>
  )
}
