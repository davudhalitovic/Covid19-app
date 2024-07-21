import { styled } from "@mui/material"

export const ParentDiv = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const WorldImg = styled("img")`
  width: 100%;
`

import { Card, Grid } from "@mui/material"

export const StyledGrid = styled(Grid)(({ theme }) => ({
  height: "100px",
  display: "flex",
  paddingBottom: "250px",
  justifyContent: "center",
  alignItems: "center",
  flexWrap: "wrap",
  gap: theme.spacing(0),
}))

export const StyledCard = styled(Card)(({ theme }) => ({
  width: 280,
  height: 150,
  borderRadius: 10,
  border: "1px solid black",
  margin: theme.spacing(3),
  position: "relative",
  paddingTop: theme.spacing(1),
  transition: "transform 0.3s ease-in-out",
  overflow: "visible",
  "&:hover": {
    transform: "scale(1.2)",
  },
  boxShadow: theme.shadows[17],
}))
