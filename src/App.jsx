import React from 'react'
import Layout from './components/Layout.jsx'

const App = () =>
{
  return (
    // FIX 1: className instead of class
    // FIX 2: bg-gradient-to-b instead of bg-linear-to-b
    <div className="bg-linear-to-b from-white via-blue-100 to-white min-h-screen">
      <Layout />
    </div>
  )
}

export default App