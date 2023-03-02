import { Routes, Route, NavLink } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contacts from './pages/Contacts'
import styles from './App.module.css'

function App() {
  const active = ({ isActive }) => isActive ? styles.active : undefined

  return (
    <>
      <nav>
        <NavLink className={active} to="/">Home</NavLink> | {' '}
        <NavLink className={active} to="/about">About</NavLink> | {' '}
        <NavLink className={active} to="/contacts">Contacts</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts/*" element={<Contacts />} />
      </Routes>
    </>
  )
}

export default App;
