import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
import Carousal from './components/Carousal'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Carousal/>
    </>
  )
}

export default App
