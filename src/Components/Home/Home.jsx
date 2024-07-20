// // import { useContext } from "react"
// // import { DataContex } from "../../Context/DataConext"

// // import { CardContent, Typography } from "@mui/material"
// // import { WorldImg, ParentDiv, StyledGrid, StyledCard } from "./HomeStyled"

// // export function Home() {
// //   const { data } = useContext(DataContext)

// //   console.log(data) // Provera strukture podataka

// //   const countries = data.response || []
// //   return (
// //     <ParentDiv>
// //       <WorldImg src="src/Components/Home/svet.png" />
// //       <h1
// //         style={{
// //           color: "rgb(136, 8, 8)",
// //           fontSize: "40px",
// //           fontWeight: "lighter",
// //         }}
// //       >
// //         World Stats
// //       </h1>
// //       <StyledGrid container>
// //         {Array.isArray(countries) && countries.length > 0 ? (
// //           countries.map((country, index) => (
// //             <StyledCard key={index}>
// //               <CardContent>
// //                 <Typography>{country}</Typography>
// //               </CardContent>
// //             </StyledCard>
// //           ))
// //         ) : (
// //           <Typography>No data available</Typography>
// //         )}
// //       </StyledGrid>
// //     </ParentDiv>
// //   )
// // }
// import { useContext } from "react"
// import { DataContex } from "../../Context/DataConext"

// import { CardContent, Typography } from "@mui/material"
// import { WorldImg, ParentDiv, StyledGrid, StyledCard } from "./HomeStyled"

// export function Home() {
//   const { stats } = useContext(DataContex)

//   const usaStats = stats.filter((item) => item.country.toUpperCase() === "USA")
//   return (
//     <ParentDiv>
//       <WorldImg src="src/Components/Home/svet.png" />
//       <h1
//         style={{
//           color: "rgb(136, 8, 8)",
//           fontSize: "40px",
//           fontWeight: "lighter",
//         }}
//       >
//         World Stats
//       </h1>
//       <StyledGrid container>
//         <>
//           <StyledCard style={{ display: "flex", flexDirection: "column" }}>
//             <CardContent>
//               <h3>Recovered:</h3>
//               {usaStats.recovered}
//             </CardContent>
//           </StyledCard>
//           <StyledCard>
//             <CardContent>
//               <h3>Deaths:</h3>
//               {usaStats.total}
//             </CardContent>
//           </StyledCard>
//           <StyledCard>
//             <CardContent>
//               <h3>ActiveCases:</h3>
//               {usaStats.active}
//             </CardContent>
//           </StyledCard>
//           <StyledCard>
//             <CardContent>
//               <h3>Country Stats</h3>
//             </CardContent>
//           </StyledCard>
//         </>
//       </StyledGrid>
//     </ParentDiv>
//   )
// }

import { useContext } from "react"
import { DataContex } from "../../Context/DataConext"
import { CardContent, Typography } from "@mui/material"
import { WorldImg, ParentDiv, StyledGrid, StyledCard } from "./HomeStyled"

export function Home() {
  const { stats } = useContext(DataContex)

  const usaStats = stats.filter((item) => item.country.toUpperCase() === "USA")

  const usaData = usaStats.length > 0 ? usaStats[0] : {}

  return (
    <ParentDiv>
      <WorldImg src="src/Components/Home/svet.png" />
      <h1
        style={{
          color: "rgb(136, 8, 8)",
          fontSize: "40px",
          fontWeight: "lighter",
        }}
      >
        USA Stats
      </h1>
      <StyledGrid container>
        {usaStats.length > 0 ? (
          <>
            <StyledCard
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                backgroundColor: "red",
              }}
            >
              <CardContent>
                <Typography
                  variant="h6"
                  style={{
                    fontWeight: "bolder",
                  }}
                >
                  <h3>Recovered:</h3> {usaData.cases?.recovered || "N/A"}
                </Typography>
              </CardContent>
            </StyledCard>
            <StyledCard>
              <CardContent>
                <h3>Deaths:</h3>
                <Typography variant="h6" style={{ fontWeight: "bolder" }}>
                  {usaData.deaths?.total || "N/A"}
                </Typography>
              </CardContent>
            </StyledCard>
            <StyledCard>
              <CardContent>
                <h3>Active Cases:</h3>
                <Typography variant="h6" style={{ fontWeight: "bolder" }}>
                  {usaData.cases?.active || "N/A"}
                </Typography>
              </CardContent>
            </StyledCard>
            <StyledCard>
              <CardContent>
                <h3>Country Stats</h3>
              </CardContent>
            </StyledCard>
          </>
        ) : (
          <Typography>No data available for USA</Typography>
        )}
      </StyledGrid>
    </ParentDiv>
  )
}
