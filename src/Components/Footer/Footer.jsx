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
        <Link
          to="/covid-stats"
          style={{
            textDecoration: "none",
            color: "black",
            fontWeight: "bolder",
          }}
        >
          Covid Stats
        </Link>
        <Link
          to="/contry-stats"
          style={{
            textDecoration: "none",
            color: "black",
            fontWeight: "bolder",
          }}
        >
          Country Stats
        </Link>
        <Link
          to="/about-us"
          style={{
            textDecoration: "none",
            color: "black",
            fontWeight: "bolder",
          }}
        >
          About us
        </Link>
      </div>
      <br />
      <div>
        <h3>© Covid 19 Corporation</h3>
      </div>
    </ParentDiv>
  )
}
