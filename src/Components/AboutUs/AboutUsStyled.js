import { styled } from "@mui/material"

export const Wrapper = styled("div")`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`
export const CardDiv = styled("div")`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 3rem;
    border-radius: 10px;
    box-shadow: 0 2px 4px 0;
    width: 300px;
    text-align: center;
    img{
        width: 85px;
        height: 70px;
        padding: 20px;
    }
    img:hover{
        transition: 0.2s ease-in-out;
        transform: scale(1.1);
    }
    p{
        padding: 10px;
    }
`