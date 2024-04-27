import { useState } from 'react'
import './App.css'
import StepOne from './components/StepOne'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import StepTwo from './components/StepTwo'
import StepThree from './components/StepThree'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<StepOne />} />
          <Route path='/steptwo' element={<StepTwo />} />
          <Route path='/stepthree' element={<StepThree />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
