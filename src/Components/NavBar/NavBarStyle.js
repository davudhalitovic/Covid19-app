import { styled } from "@mui/material"

export const Nav = styled("nav")`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    img{
        width: 130px;
        height: 60px;
    }
`
export const Navigation = styled("div")`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    h2{
        margin: 0 1rem;
        font-size: 1rem;
    }
    h2:hover{
        color: red;
        cursor: pointer;
    }
`
