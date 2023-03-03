import './App.css'
import About from './components/About/About.jsx'
import Details from './components/Detail/Detail.jsx'
import Cards from './components/Cards/cards.jsx'
import NavBar from './components/Nav/Nav.jsx'
import Error from './components/Error/Error.jsx'
import Form from './components/Form/Form.jsx'
import Favorites from './components/favorites/Favorites.jsx'
import { useEffect, useState } from 'react'
import { useNavigate, Route, Routes, useLocation } from 'react-router-dom'

function App() {
  const [characters, setCharacters] = useState([])
  const [access, setAccess] = useState(true)
  const username = "Claudio@mail.com"
  const password = "claudio1234"
  const location = useLocation()
  const navigate = useNavigate()


  const login = (userData) => {
    if (userData.username === username & userData.password === password) {
      setAccess(true)
      navigate('/home')
    }
  }
  const logout = () => {
    setAccess(false)
    navigate('/')
  }


  function onSearch(character) {
    fetch(`http://localhost:3001/rickandmorty/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          if (characters.find(char => char.id === data.id)) window.alert('ID Repetido');
          else setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert('No hay personajes con ese ID');
        }
      });
  }

  const onClose = (id) => {
    setCharacters(characters.filter(char => char.id !== id))
  }

  useEffect(() => {
    !access && navigate('/')
  }, [access])

  return (
    <div className='App' style={{ padding: '25px' }}>
      <div >
        {location.pathname !== '/' && <NavBar onSearch={onSearch} logout={logout} />}

        <Routes>
          <Route path='/' element={<Form login={login} />} />
          <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
          <Route path='/favorites' element={<Favorites />} />
          <Route path='/about' element={<About />} />
          <Route path='/detail/:detailId' element={<Details />} />
          <Route path='*' element={<Error />} />
        </Routes>


      </div>
    </div>
  )
}

export default App
