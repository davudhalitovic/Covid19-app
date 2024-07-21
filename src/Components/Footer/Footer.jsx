import InstagramIcon from "@mui/icons-material/Instagram"
import FacebookIcon from "@mui/icons-material/Facebook"
import TwitterIcon from "@mui/icons-material/Twitter"

import { Link } from "react-router-dom"
import { ParentDiv } from "./FooterStyled"

import { StyledIcon } from "./FooterStyled"

export default function Footer() {
  return (
    <ParentDiv>
      <div style={{ display: "flex", flexDirection: "row", gap: "30px" }}>
        <StyledIcon>
          <FacebookIcon style={{ width: "30px", height: "30px" }} />
        </StyledIcon>
        <StyledIcon>
          <InstagramIcon style={{ width: "30px", height: "30px" }} />
        </StyledIcon>
        <StyledIcon>
          <TwitterIcon style={{ width: "30px", height: "30px" }} />
        </StyledIcon>
      </div>
      <br />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "60px",
        }}
      >
        <StyledLink to="/covid-stats">Covid Stats</StyledLink>
        <StyledLink to="/contry-stats">Country Stats</StyledLink>
        <StyledLink to="/about-us">About us</StyledLink>
      </div>
      <br />
      <div>
        <h3>© Covid 19 Corporation</h3>
      </div>
    </ParentDiv>
  )
}

import { styled } from "@mui/material"
const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-weight: bolder;
  &:hover {
    color: red; /* Promenite boju prilikom hover-a */
    /* text-decoration: underline; Primer dodavanja podvlačenja */
  }
`
