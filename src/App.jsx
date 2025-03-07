import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Layout from './components/Layout'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Resources from './components/Resources'
import PageTitle from './components/PageTitle'

function App() {

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
