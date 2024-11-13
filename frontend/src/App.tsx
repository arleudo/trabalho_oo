import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './pages/Login'
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Toaster } from "@/components/ui/toaster"

function App() {

  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Toaster />
    </Router>
    </>
  )
}

export default App
