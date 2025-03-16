import { useEffect } from 'react'
import './App.css'
import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import Layout from './components/Layout'
import Resources from './components/Resources'
import PageTitle from './components/PageTitle'

function App() {

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Ser etter om siden er på en annen path enn "/", og sender brukeren til path "/" om den ikke er det, når siden lastes
    if (location.pathname !== "/") {
      navigate("/", { replace: true });
    }
  }, []); 

  return (
    <Layout>
      <Routes>
        {/** Når path er på "/" vil den automatisk bli navigert til "html" */}
        <Route path="/" element={<><PageTitle /><Resources /><Navigate to="/HTML" /></>} />
        <Route path=":category" element={<><PageTitle /><Resources /> </>} />
      </Routes>
    </Layout>
  )
}

export default App
