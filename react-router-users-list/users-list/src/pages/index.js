import { Route, Routes } from 'react-router-dom'
import Photos from './Photos'
import List from "./Users";
import AlbumsList from "./Albums";
import Form from "./Albums";

export default function Users () {
    return (
        <Routes>
            <Route path="/" element={<List />} />
            <Route path="/create" element={<Form />} />
            <Route path="/edit/:idContact" element={<Form />} />
            <Route path="/:userId/albums" element={<AlbumsList />} />
            <Route path="/:userId/albums/:albumId/photos" element={<Photos />} />
        </Routes>
    )
}