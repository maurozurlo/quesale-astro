import { useStore } from '@nanostores/react';
import classNames from 'classnames';
import { useState } from 'react';
import { UserData, setUser } from '../../stores/user';
import { serverUrl } from '../../constants/api';
import { USER_LOCALSTORAGE } from '../../constants/user';

const UserDropdown = () => {
  const user = useStore(UserData);
  
  const [isOpen, setIsOpen] = useState(false);
  
  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem(USER_LOCALSTORAGE);
    location.replace('/')
  }

  if(!user) return null;

  return (
    <div className={classNames({dropdown: true, ["is-active"]:isOpen, "is-right": true})}>
      <div className="dropdown-trigger">
        <button
          className="button is-ghost px-0"
          aria-haspopup="true"
          aria-controls="dropdown-user"
          onClick={() => setIsOpen(v => !v)}
        >
          <figure className="image is-32x32" >
            <img
              className="is-rounded"
              style={{height:'32px', objectFit: 'cover'}}
              src={serverUrl.concat(user.avatarUrl)}
              alt={"User name"}
            />
          </figure>
        </button>
      </div>
      <div className="dropdown-menu" role="menu">
        <div className="dropdown-content">
          <div className="dropdown-item">
            <a href="/profile" className="dropdown-item">
              Perfil
            </a>
            <hr className="dropdown-divider" />
            <button onClick={handleLogout} className="button dropdown-item">
              Cerrar Sesion
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDropdown;
