import React from "react"
import Header from "./components/Header"
import Notification from "./components/Notification"
import MainLayout from "./components/MainLayout"
//CSS
import "./App.css"

const App = () => {
  return (
    <>
      <Header />
      <Notification />
      <MainLayout />
    </>
  )
}

export default App
