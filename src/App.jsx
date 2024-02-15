import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Categories from './components/Categories'
import Layout from './components/Layout'


function App() {

  return (
    <Layout>
      <Routes>
          <Route index element={<Home/>} />
          <Route path="categories" element={<Categories/>} />
      </Routes>
    </Layout>
  )
}

export default App
