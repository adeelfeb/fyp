import { useState } from 'react'
import AuthPage from './components/login/AuthPage'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <AuthPage></AuthPage>
    </>
  )
}

export default App
