import { useEffect, useState } from 'react'
import UsersApi from '../api/UsersApi'
import {Link, useNavigate} from 'react-router-dom'

export default function UserList () {
    const [list, setList] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        UsersApi.getUserList()
            .then((list) => {
                setList(list)
            })
    }, [])

    function onAlbumsBtnClick (user) {
        navigate(`/users/${user.id}/albums`)
    }

    return (
        <>
            <div>
                <ul>
                {list.map((user) => (
                    <li key={user.id}>{user.name}
                        <span>
                            <button onClick={() => onAlbumsBtnClick(user)}>Albums</button>
                        </span>
                    </li>
                ))}
                </ul>
            </div>
        </>
    )
}