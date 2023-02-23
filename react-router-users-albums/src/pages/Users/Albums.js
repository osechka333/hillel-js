import {useNavigate, useParams} from 'react-router-dom'
import { useEffect, useState } from 'react'
import UsersDataApi from "../../api/UsersDataApi";

export default function AlbumsList () {
    const navigate = useNavigate()
    const [albumsList, setAlbum] = useState([]);
    let { idUser } = useParams();

    useEffect(() => {
        if (idUser) {
            UsersDataApi.getAlbumPerUser(idUser)
                .then((albumsList) => {
                    setAlbum(albumsList)
                })
        }
    }, [idUser])

    function onPhotosBtnClick(albumData) {
        navigate(`/users/${idUser}/albums/${albumData.id}`)
    }

    return (
        <>
            <div>
                <ul>
                    <h4>List of user albums:</h4>
                    {albumsList.map((albumData) => (
                        <li key={albumData.id}>{albumData.title}
                            <span>
                                 <button onClick={() => onPhotosBtnClick(albumData)}>Photos</button>
                            </span>
                        </li>))
                    }
                </ul>
            </div>
        </>
    )
}