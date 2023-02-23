import {Link, useParams} from 'react-router-dom'
import { useEffect, useState } from 'react'
import UsersDataApi from "../../api/UsersDataApi";

export default function PhotosList () {
    const [photosList, setPhoto] = useState([]);
    let { idAlbum } = useParams();

    useEffect(() => {
        if (idAlbum) {
            UsersDataApi.getPhotosPerAlbum(idAlbum)
                .then((photosList) => {
                    setPhoto(photosList)
                })
        }
    }, [idAlbum])

    return (
        <>
            <div>
                <Link to='/users'><button>Back</button></Link>
            </div>
            <div>
                    <h4>List of user photos:</h4>
                    {photosList.map((photo) => (
                        <img src={photo.thumbnailUrl} alt="User images"/>
                        ))
                    }
            </div>
        </>
    )
}