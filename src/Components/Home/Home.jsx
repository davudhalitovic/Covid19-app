import { useContext } from "react"
import { DataContex } from "../../Context/DataConext"
import { CardContent, Typography } from "@mui/material"
import { ParentDiv, StyledGrid, StyledCard } from "./HomeStyled"
import Worldmap from "./Worldmap"

export function Home() {
  const { stats } = useContext(DataContex)

  const usaStats = stats.filter((item) => item.country.toUpperCase() === "USA")
  const usaData = usaStats.length > 0 ? usaStats[0] : {}

  return (
    <ParentDiv>
      <Worldmap />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1
          style={{
            color: "rgb(136, 8, 8)",
            fontSize: "40px",
            fontWeight: "lighter",
          }}
        >
          World Stats
        </h1>
        <StyledGrid container>
          <>
            <StyledCard>
              <CardContent
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "70%",
                }}
              >
                <Typography
                  variant="h6"
                  style={{
                    fontWeight: "bolder",
                  }}
                >
                  <h3>Recovered:</h3>{" "}
                  <p style={{ color: "green" }}>
                    {usaData.cases?.recovered || "N/A"}
                  </p>
                </Typography>
              </CardContent>
            </StyledCard>
            <StyledCard>
              <CardContent
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "70%",
                }}
              >
                <Typography variant="h6" style={{ fontWeight: "bolder" }}>
                  <h3>Deaths:</h3>
                  <p style={{ color: "red" }}>
                    {usaData.deaths?.total || "N/A"}
                  </p>
                </Typography>
              </CardContent>
            </StyledCard>
            <StyledCard>
              <CardContent
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "70%",
                }}
              >
                <Typography variant="h6" style={{ fontWeight: "bolder" }}>
                  <h3>Active Cases:</h3>
                  <p style={{ color: "blue" }}>
                    {usaData.cases?.active || "N/A"}
                  </p>
                </Typography>
              </CardContent>
            </StyledCard>
            <StyledCard>
              <CardContent
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "70%",
                }}
              >
                <h3 style={{ fontWeight: "bolder", fontSize: "25px" }}>
                  Country Stats
                </h3>
              </CardContent>
            </StyledCard>
          </>
        </StyledGrid>
      </div>
    </ParentDiv>
  )
}
