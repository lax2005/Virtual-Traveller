import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Admin from './pages/Admin'
import Videos from './pages/Videos'

function App(){
  return (
    <BrowserRouter>
      <nav className="p-4 bg-slate-100 flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/videos">Videos</Link>
        <Link to="/admin">Admin</Link>
      </nav>
      <Routes>
        <Route path="/" element={<h1 className="p-6">Welcome to Virtual Traveller</h1>} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
