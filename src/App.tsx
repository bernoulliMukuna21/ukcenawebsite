import GlobalStyles from './GlobalStyles';
import { ThemeProvider } from 'styled-components';
import AppRoutes from './routes';
import Layout from './Layout'

export const theme = {
  heightOfcrossFadeImages: '80vh',
  color: {
    blue: '#2d7dd2',
    green: '#04AA6D',
    red: '#ff3333'
  }
}

function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme ={ theme }>
        <AppRoutes AppLayout = { Layout } />
      </ThemeProvider>
    </>
  );
}

export default App;
