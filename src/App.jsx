import { Route } from "react-router-dom"
import { Routes } from "react-router-dom"
import { createGlobalStyle } from "styled-components"
import NavBar from "./Components/NavBar/NavBar"
import Footer from "./Components/Footer/Footer"
import { Home } from "./Components/Home/Home"
import { CovidStats } from "./Components/CovidStats/CovidStats"
import { AboutUs } from "./Components/AboutUs/AboutUs"
import { CountryStats } from "./Components/CountryStats/CountryStats"

function App() {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/covid-stats" element={<CovidStats />}></Route>
        <Route path="/contry-stats" element={<CountryStats />}></Route>
        <Route path="/about-us" element={<AboutUs />}></Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App

const GlobalStyle = createGlobalStyle`
body{
  padding: 0;
  margin: 0;
  width: 100%;
  font-family: 'Open Sans', sans-serif;
}

`
