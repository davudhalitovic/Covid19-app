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

import { Card, CardMedia, Typography, Grid, Link } from "@mui/material"

export const StyledGrid = styled(Grid)(({ theme }) => ({
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexWrap: "wrap",
  gap: theme.spacing(1),
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
  boxShadow: theme.shadows[5],
}))

// export const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
//   width: 150,
//   height: 150,
//   borderRadius: "50%",
//   position: "absolute",
//   top: -75,
//   left: "calc(50% - 75px)",
//   border: "none",
//   boxShadow: theme.shadows[3],
// }))

// export const StyledTypographyName = styled(Typography)(({ theme }) => ({
//   fontSize: "27px",
//   fontWeight: 900,
//   color: "inherit",
//   textAlign: "center",
//   marginBottom: theme.spacing(0),
//   marginTop: theme.spacing(4),
// }))

// export const StyledTypographyCity = styled(Typography)(({ theme }) => ({
//   fontSize: "13px",
//   fontWeight: 900,
//   color: "gray",
//   textAlign: "center",
//   marginBottom: theme.spacing(1),
//   marginTop: theme.spacing(1),
// }))
// export const LineDiv = styled("div")(({ theme }) => ({
//   borderTop: `2px solid ${theme.palette.divider}`,
//   margin: `${theme.spacing(2)} 0`,
// }))
// export const StyledTypographyDescription = styled(Typography)(({ theme }) => ({
//   fontSize: "17px",
//   fontWeight: 100,
//   color: "gray",
//   textAlign: "center",
//   marginBottom: theme.spacing(1),
//   marginTop: theme.spacing(5),
// }))

// export const StyledGitHubLink = styled(Link)(({ theme }) => ({
//   position: "absolute",
//   bottom: theme.spacing(2),
//   left: "50%",
//   transform: "translateX(-50%)",
//   color: theme.palette.text.primary,
//   "&:hover": {
//     color: theme.palette.primary.main,
//   },
//   svg: {
//     fontSize: "4rem", // Znatno uvećajte veličinu ikone
//   },
// }))
