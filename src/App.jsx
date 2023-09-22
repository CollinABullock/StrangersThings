import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import Login from './Components/LogIn'
import Posts from './Components/Posts'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div id='nav-container'>
      <div>
        <Navbar/>
      </div>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/posts' element={<Posts/>}/>
    </Routes>
    </div>
    </>
  )
}

export default App
