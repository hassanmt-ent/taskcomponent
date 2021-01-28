
import React, { useContext } from 'react'
import { ThemeProvider } from 'styled-components'
import Dashboard from './containers/Dashboard'
import { lightTheme, darkTheme } from './styles/theme'
import { GlobalStyles } from './styles/global'
// import { ThemeContext } from './context/themeContext'
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
