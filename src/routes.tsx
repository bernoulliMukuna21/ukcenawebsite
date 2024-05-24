import React from "react"
import { Route, Routes } from "react-router-dom"
import Home from "./components/static/Home"

type AppRoutesProps = {
  AppLayout: React.ComponentType<{}>
}

const AppRoutes = ({ AppLayout }: AppRoutesProps) => {
  return (
    <Routes>
      <Route path='/' element = {<AppLayout/>}>
        <Route index element = {<Home />} />
        <Route path="/team" element = {<h1>Meet the Team</h1>}/>
      </Route>
    </Routes>
  )
}

export default AppRoutes