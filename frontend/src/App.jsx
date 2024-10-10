import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LeftSection from './components/LeftSection'
import Spinner from './components/Spinner/Spinner'
import MainSection from './components/MainSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <section className='realative flex justify-center container mx-auto'>
      <LeftSection/>
      <MainSection />
    </section>
    
  )
}

export default App
