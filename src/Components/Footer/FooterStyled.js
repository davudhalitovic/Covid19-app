import { styled } from "@mui/material"

export const ParentDiv = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 40px;
`

export const StyledIcon = styled("div")`
  transition: transform 0.3s ease-in-out, color 0.3s ease-in-out;
  &:hover {
    transform: scale(1.7);
    color: red;
  }
`
