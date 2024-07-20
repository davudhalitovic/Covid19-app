import React from "react";
import img from "./covidImg.png"
import { Nav, Navigation } from "./NavBarStyle";
import { Link } from "react-router-dom";

function NavBar() {
    return(
        <Nav>
            <div>
                <Link style={{ textDecoration: "none", color: "black" }} to={"/"}><img src={img} alt="" /></Link>
            </div>
            <Navigation>
                <Link style={{ textDecoration: "none", color: "black" }} to={"/covid-stats"}><h2>COVID STATS</h2></Link>
                <Link style={{ textDecoration: "none", color: "black" }} to={"/contry-stats"}><h2>COUNTRY STATS</h2></Link>
                <Link style={{ textDecoration: "none", color: "black" }} to={"/about-us"}><h2>ABOUT US</h2></Link>
            </Navigation>
        </Nav>
    )
}

export default NavBar
