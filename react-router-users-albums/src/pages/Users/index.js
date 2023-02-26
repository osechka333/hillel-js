import { Route, Routes } from 'react-router-dom'
import UserList from './UserList'
import Albums from './Albums'
import PhotosList from "./Photos"

export default function Users () {
    return (
        <Routes>
            <Route path="/" element={<UserList />} />
            <Route path="/:idUser/albums" element={<Albums />} />
            <Route path="/:idUser/albums/:idAlbum/photos" element={<PhotosList/>} />
        </Routes>
    )
}