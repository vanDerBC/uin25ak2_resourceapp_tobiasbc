import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Layout from './components/Layout'
import { BrowserRouter, Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import Resources from './components/Resources'
import PageTitle from './components/PageTitle'

function App() {

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Hvis pathen ikke er "/" (altså hvis den er en kategori-side), naviger til "/"
    if (location.pathname !== "/") {
      navigate("/", { replace: true });
    }
  }, []); // Tom array sikrer at dette kun skjer ved første render (f.eks. etter refresh)

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<><PageTitle /><Resources /><Navigate to="/HTML" /></>} />
        <Route path=":category" element={<><PageTitle /><Resources /> </>} />
      </Routes>
    </Layout>
  )
}

export default App
