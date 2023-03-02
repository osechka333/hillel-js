import { Routes, Route, NavLink } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contacts from './pages/Contacts'
import styles from './App.module.css'
import { useState } from 'react'

const DEFAULT_LANG = 'en';
const UA_LANG = 'ua';

function App() {
  const [lang, setLang] = useState(DEFAULT_LANG)
  const active = ({ isActive }) => isActive ? styles.active : undefined

  function toggleLang () {
    setLang(lang === DEFAULT_LANG ? UA_LANG : DEFAULT_LANG)
  }

  function t7e (en, ua) {
    return lang === UA_LANG ? ua : en;
  }

  return (
    <>
      <nav>
        <NavLink className={active} to="/">{t7e('Home', 'Головна')}</NavLink> | {' '}
        <NavLink className={active} to="/about">About</NavLink> | {' '}
        <NavLink className={active} to="/contacts">Contacts</NavLink> | {' '}
        <button onClick={toggleLang}>Toggle lang</button>
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
