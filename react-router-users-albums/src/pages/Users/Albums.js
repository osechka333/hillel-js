import {Link, useNavigate, useParams} from 'react-router-dom'
import { useEffect, useState } from 'react'
import UsersDataApi from "../../api/UsersDataApi";

export default function AlbumsList () {
    const navigate = useNavigate()
    const [albumsList, setAlbum ] = useState([]);
    let { idUser } = useParams();

    useEffect(() => {
        if (idUser) {
            UsersDataApi.getAlbumPerUser(idUser)
                .then((albumsList) => {
                    setAlbum(albumsList)
                })
        }
    }, [idUser])

    function onPhotosBtnClick(idAlbum) {
        navigate(`/users/${idUser}/albums/${idAlbum}/photos`)
    }

    return (
        <>
            <div>
                <ul>
                    <h4>List of user albums:</h4>
                    {albumsList.map((albumData) => (
                        <li key={albumData.id}>{albumData.title}
                            <span>
                                 <button onClick={() => onPhotosBtnClick(albumData.id)}>Photos</button>
                            </span>
                        </li>))
                    }
                </ul>
            </div>

            <div>
                <Link to='/users'><button>Back</button></Link>
            </div>
        </>
    )
}