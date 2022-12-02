import './App.css'

import { useAuth } from 'helpers/auth'
import { AppProvider } from 'providers/AppProvider'
import React from 'react'
import { Change } from 'views/Login/Change'
import { Confirm } from 'views/Login/Confirm'
import { Forgot } from 'views/Login/Forgot'
import { Login } from 'views/Login/Login'
import { Register } from 'views/Login/Register'
import { Success } from 'views/Login/Success'
import { useLocation } from 'wouter'

function App() {
  const [location, setLocation] = useLocation()
  const { isLoading } = useAuth()

  if (isLoading) {
    return <p>Loading...</p>
  }

  return (
    <AppProvider setLocation={setLocation}>
      <div className="App">
        {location === '/login' && <Login />}
        {location === '/register' && <Register />}
        {location === '/confirm' && <Confirm />}
        {location === '/forgot' && <Forgot />}
        {location === '/change' && <Change />}
        {location === '/' && <Success />}
      </div>
    </AppProvider>
  )
}

export default App
