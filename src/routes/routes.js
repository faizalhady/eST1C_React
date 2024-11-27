import React from 'react'
import { BrowserRouter as Router, Routes, Route }  from 'react-router-dom'

const AppRoutes = () => {
  return (
    <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/1" element={<About />} />
                <Route path="/2" element={<Contact />} />
                <Route path="/3" element={<Profile />} />
            </Routes>
        </Router>
  )
}

export default AppRoutes