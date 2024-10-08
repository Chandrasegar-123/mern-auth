import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import Signin from "./pages/signin"
import Signup from "./pages/signup"
import About from "./pages/About"
import Header from "./components/Header"
import PrivateRoute from "./components/privateRoute"

export default function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}
