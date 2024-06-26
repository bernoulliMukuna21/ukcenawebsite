import { Outlet } from 'react-router-dom'
import Header from './components/static/Header'
import Footer from './components/static/Footer'

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout
