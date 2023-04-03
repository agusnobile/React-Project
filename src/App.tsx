import { Route, Routes } from 'react-router-dom'
import Home from './components/home'
import UserRepo from './components/userRepo'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/userrepo/:username' element={<UserRepo />} />
    </Routes>
  )
}

export default App
