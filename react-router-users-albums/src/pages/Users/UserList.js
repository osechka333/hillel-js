import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import UsersDataApi from "../../api/UsersDataApi";

export default function UserList () {
    const [list, setList] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        UsersDataApi.getUserList()
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