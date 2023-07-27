import Pill from './atoms/Pill';
import { GetCategory, GetGender } from '../constants/user';
import { serverUrl } from '../constants/api';
import { UserData } from '../stores/user';
import { useStore } from '@nanostores/react';
import { useEffect, useState } from 'react';
import UserLinksViewer from './particles/UserLinksViewer';

export default function UserProfile() {
    const user = useStore(UserData);
    const [userLoaded, setUserLoaded] = useState(Boolean(user));

    useEffect(() => {
        if(user){
            setUserLoaded(true)
        }
    }, [user])

    if (!userLoaded) return <div />;
    const { name, age, gender, avatarUrl, links, categories } = user;

    return (
        <div className="container is-primary-background">
            <h1 className="is-size-2 has-text-weight-semibold">Perfil de {name}</h1>
            <div className="columns">
                <div className="column signup-image-container px-4">
                    <img src={serverUrl.concat(avatarUrl)} alt={name} className="avatar" />
                </div>

                <div className="form-container columns mt-4">
                    <div
                        className="column is-half is-flex is-flex-direction-column is-flex-row-gap-2 px-4"
                    >
                        <label htmlFor="name">Nombre</label>
                        <h2>{name}</h2>

                        <label htmlFor="age">Edad</label>
                        <h2>{age}</h2>

                        <label htmlFor="gender">Genero</label>
                        <h2>{GetGender(gender).label}</h2>

                        <label htmlFor="categories">Categorias</label>

                        <div className="is-flex is-flex-wrap-wrap is-flex-gap-2 mt-2">
                            {
                                categories.map((category) => {
                                    return (
                                        <Pill key={category} label={GetCategory(category).label} color="lime" />
                                    );
                                })
                            }
                        </div>
                    </div>
                    <div className="column is-half">
                        <label>Links</label>
                        <UserLinksViewer links={links} />
                    </div>
                </div>
            </div>

            <div>
                <h4 className="is-size-4 has-text-weight-semibold">
                    Ultimos Eventos donde participo
                </h4>
                {/* <EventList events={starters} /> */}
            </div>
        </div>
    )
}
