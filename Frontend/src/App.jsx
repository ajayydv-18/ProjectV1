import React from 'react'
import HomePage from './components/HomePage/HomePage'
import NavBar from './components/NavBar/NavBar'
import { Routes , Route} from 'react-router-dom'
import Mentor from './components/Mentors/Mentor'
import SignIn from './components/SIgnIn/SignIn'
import About from './components/About/About'

const App = () => {
  return (
    <div>
      
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/mentors' element={<Mentor />} />
        <Route path='/about' element={<About />} />
        <Route path='/signin' element={<SignIn />} />

      </Routes>
    </div>
  )
}

export default App