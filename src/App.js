import React from 'react'
import Dashboard from './containers/Dashboard'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './styles/global'

const App = () => {
  return (
    <div>
      <ThemeProvider />
      <GlobalStyles />
      <Dashboard/>
      <ThemeProvider />
    </div>
  )
}

export default App
