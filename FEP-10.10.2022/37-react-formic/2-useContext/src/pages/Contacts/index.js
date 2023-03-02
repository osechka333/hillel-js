import { Route, Routes } from 'react-router-dom'
import List from './List'
import Form from './Form'

export default function Contacts () {
  return (
    <Routes>
      <Route path="/" element={<List />} />
      <Route path="/create" element={<Form />} />
      <Route path="/edit/:idContact" element={<Form />} />
    </Routes>
  )
}