import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './components/HomePage'
import SignupComponent from './components/SignupComponent'
import { useSelector } from 'react-redux'
import { RootState } from './store/store'
import LoginComponent from './components/LoginComponent'

function App() {

  const User: string[] = useSelector((state: RootState) => {
    return state.user.user
  });

  console.log(User);
  return (
    <>
      <Routes>
        <Route path='/' element={User ? <HomePage /> : <LoginComponent />} />
        <Route path='/signup' element={<SignupComponent />} />
      </Routes>
    </>
  )
}

export default App
