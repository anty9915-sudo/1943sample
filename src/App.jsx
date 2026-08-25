import { Routes, Route } from 'react-router-dom'
import Layout from './layouts/Layout'
import Home from './pages/Home/Home'
import Brand from './pages/Brand/Brand'
import Menu from './pages/Menu/Menu'
import Store from './pages/Store/Store'
import Marketing from './pages/Marketing/Marketing'
import Franchise from './pages/Franchise/Franchise'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/brand" element={<Brand />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/store" element={<Store />} />
        <Route path="/marketing" element={<Marketing />} />
        <Route path="/franchise" element={<Franchise />} />
      </Route>
    </Routes>
  )
}

export default App
