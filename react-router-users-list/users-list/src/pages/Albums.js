import {useNavigate, useParams} from 'react-router-dom'
import { useEffect, useState } from 'react'
import AlbumsApi from "../api/AlbumsApi";

export default function AlbumsList () {
    const navigate = useNavigate()
    const [album, setAlbums] = useState({});
    let { userId, albumId } = useParams();

    useEffect(() => {
        if (userId) {
            AlbumsApi.getAlbumPerUser(userId)
                .then((album) => {
                    setAlbums(album)
                })
        }
    }, [userId])

    // function onPhotosBtnClick (user, album) {
    //     //navigate(`/${user.id}/albums/${album.id}/photos}`)
    // }

    return (
        <>
            <div>
                <ul>
                    {album}
                </ul>
            </div>
        </>
    )
}
