import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/static/Home'
import RegistrationForm from './components/registration-form'
import TheTeam from './components/theTeam'

type AppRoutesProps = {
  AppLayout: React.ComponentType<{}>
}

const AppRoutes = ({ AppLayout }: AppRoutesProps) => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="/team" element={<TheTeam />} />
        <Route path="/registration-form" element={<RegistrationForm />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes
