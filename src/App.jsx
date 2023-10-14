import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { AppRoutes } from './routes/root'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <div className='window'>
        <AppRoutes/>
      </div>

    </BrowserRouter>
    )
}

export default App
