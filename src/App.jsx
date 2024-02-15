import { Routes } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <Routes>
        <Route index element={<Home/>}/>
    </Routes>
  )
}

export default App
