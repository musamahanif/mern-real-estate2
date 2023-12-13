import { BrowserRouter, Route, Routes } from "react-router-dom"

import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import ABout from "./pages/ABout"



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="sign-in" element={<SignIn/>} />
        <Route path="sign-up" element={<SignUp/>} />
        <Route path="profile" element={<Profile/>} />
        <Route path="about" element={<ABout/>} />

      </Routes>
    </BrowserRouter>
    
  )
}
