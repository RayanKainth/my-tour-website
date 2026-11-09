import { Route, Routes } from 'react-router-dom'
import Home from './component/view/home/home.jsx'
import Tours from './component/view/tours/index.jsx'
import Layout from './component/layout/index.jsx'
function App() {
  return (
    <Layout>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tours" element={<Tours/>}></Route>
    </Routes>
    </Layout>
  )
}

export default App
