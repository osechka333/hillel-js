import { Routes, Route, NavLink } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contacts from './pages/Contacts'
import styles from './App.module.css'
import { useLang } from './hooks/LangContext'

function App () {
  const active = ({ isActive }) => isActive ? styles.active : undefined
  const { toggleLang, t7e } = useLang();

  return (
    <>
      <nav>
        <NavLink className={active} to="/">{t7e('Home', 'Головна')}</NavLink> | {' '}
        <NavLink className={active} to="/about">About</NavLink> | {' '}
        <NavLink className={active} to="/contacts">Contacts</NavLink> | {' '}
        <button onClick={toggleLang}>Toggle lang</button>
      </nav>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contacts/*" element={<Contacts/>}/>
      </Routes>
    </>
  )
}

export default App
