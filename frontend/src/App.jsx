import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomeScreen from './Screens/HomeScreen'
import Register from './Components/Auth/Register'
import Login from './Components/Auth/Login'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomeScreen />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
