import React from 'react'
import Dashboard from './containers/Dashboard'
import { ThemeProvider } from 'styled-components'

const App = () => {
  return (
    <div>
      <ThemeProvider />
      <Dashboard/>
      <ThemeProvider />
    </div>
  )
}

export default App
