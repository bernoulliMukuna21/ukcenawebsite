import GlobalStyles from './GlobalStyles'
import { ThemeProvider } from 'styled-components'
import AppRoutes from './routes'
import Layout from './Layout'
import { createContext } from 'react'

export const theme = {
  heightOfcrossFadeImages: '80vh',
  color: {
    blue: '#2d7dd2',
    green: '#04AA6D',
    red: '#ff3333',
    backgroundColor: '#f7d4fb',
  },
  heights: {
    heightOfFooter: '10vh',
  },
}

const signupCompleted = false

type TAppGlobalContextType = {
  signupCompleted: boolean
}

export const AppGlobalContext = createContext<TAppGlobalContextType>({ signupCompleted })

const App = () => {
  return (
    <AppGlobalContext.Provider value={{ signupCompleted }}>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <AppRoutes AppLayout={Layout} />
      </ThemeProvider>
    </AppGlobalContext.Provider>
  )
}

export default App
