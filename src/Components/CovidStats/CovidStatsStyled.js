// import { styled } from "@mui/material"

// import { Card, Grid } from "@mui/material"

// export const ParentDiv = styled("div")`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
// `
// export const StyledGrid = styled(Grid)(({ theme }) => ({
//   minHeight: "100vh",
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
//   flexWrap: "wrap",
//   gap: theme.spacing(1),
//   display: "flex",
//   flexDirection: "column",
// }))

// export const StyledCard = styled(Card)(({ theme }) => ({
//   width: 1100,
//   height: 170,

//   border: "1px solid red",
//   margin: theme.spacing(3),
//   position: "relative",
//   paddingTop: theme.spacing(1),
//   transition: "transform 0.3s ease-in-out",
//   overflow: "visible",

//   paddingLeft: "50px",
//   "&:hover": {
//     transform: "scale(1.2)",
//   },
//   boxShadow: theme.shadows[5],
// }))

// export const StyledCard2 = styled(Card)(({ theme }) => ({
//   width: "auto",
//   height: 30,
//   borderRadius: 80,
//   border: "2px solid green",
//   margin: theme.spacing(1),
//   position: "relative",
//   paddingTop: theme.spacing(2),
//   transition: "transform 0.3s ease-in-out",
//   overflow: "visible",

//   paddingLeft: "10px",

//   boxShadow: theme.shadows[5],
// }))

// export const StyledCard3 = styled(Card)(({ theme }) => ({
//   width: "auto",
//   height: 30,
//   borderRadius: 80,
//   border: "2px solid rgb(139 ,92 ,246,1 )",
//   margin: theme.spacing(1),
//   position: "relative",
//   paddingTop: theme.spacing(2),
//   transition: "transform 0.3s ease-in-out",
//   overflow: "visible",

//   paddingLeft: "10px",

//   boxShadow: theme.shadows[5],
// }))

// export const StyledCard4 = styled(Card)(({ theme }) => ({
//   width: "auto",
//   height: 30,
//   borderRadius: 80,
//   border: "1px solid rgb(239 ,68, 68 ,1)",
//   margin: theme.spacing(1),
//   position: "relative",
//   paddingTop: theme.spacing(2),
//   transition: "transform 0.3s ease-in-out",
//   overflow: "visible",
//   color: "rgb(239 ,68, 68 ,1)",
//   paddingLeft: "10px",

//   boxShadow: theme.shadows[5],
// }))

import { styled } from "@mui/material"
import { Card, Grid } from "@mui/material"

export const ParentDiv = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const StyledGrid = styled(Grid)(({ theme }) => ({
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexWrap: "wrap",
  gap: theme.spacing(1),
  display: "flex",
  flexDirection: "column",
}))

export const StyledCard = styled(Card)(({ theme }) => ({
  width: 1100,
  height: 170,
  border: "1px solid red",
  margin: theme.spacing(3),
  position: "relative",
  paddingTop: theme.spacing(1),
  transition: "transform 0.3s ease-in-out",
  overflow: "visible",
  paddingLeft: "50px",
  "&:hover": {
    transform: "scale(1.2)",
  },
  boxShadow: theme.shadows[5],
}))

export const StyledCard2 = styled(Card)(({ theme }) => ({
  width: "auto",
  height: 30,
  borderRadius: 80,
  border: "2px solid green",
  margin: theme.spacing(1),
  position: "relative",
  paddingTop: theme.spacing(2),
  transition: "transform 0.3s ease-in-out",
  overflow: "visible",
  paddingLeft: "10px",
  boxShadow: theme.shadows[5],
}))

export const StyledCard3 = styled(Card)(({ theme }) => ({
  width: "auto",
  height: 30,
  borderRadius: 80,
  border: "2px solid rgb(139, 92, 246, 1)",
  margin: theme.spacing(1),
  position: "relative",
  paddingTop: theme.spacing(2),
  transition: "transform 0.3s ease-in-out",
  overflow: "visible",
  paddingLeft: "10px",
  boxShadow: theme.shadows[5],
}))

export const StyledCard4 = styled(Card)(({ theme }) => ({
  width: "auto",
  height: 30,
  borderRadius: 80,
  border: "1px solid rgb(239, 68, 68, 1)",
  margin: theme.spacing(1),
  position: "relative",
  paddingTop: theme.spacing(2),
  transition: "transform 0.3s ease-in-out",
  overflow: "visible",
  color: "rgb(239, 68, 68, 1)",
  paddingLeft: "10px",
  boxShadow: theme.shadows[5],
}))
