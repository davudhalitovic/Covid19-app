import { DataContex } from "../../Context/DataConext"
import { useContext, useState, useEffect } from "react"
import axios from "axios"
import {
  ParentDiv,
  StyledGrid,
  StyledCard,
  StyledCard2,
  StyledCard3,
  StyledCard4,
} from "./CovidStatsStyled"

export function CovidStats() {
  const { stats } = useContext(DataContex)

  const [flags, setFlags] = useState([])

  useEffect(() => {
    const fetchFlags = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all")
        setFlags(response.data)
      } catch (error) {
        console.error("Error fetching the flags", error)
      }
    }

    fetchFlags()
  }, [])

  const getFlagUrl = (countryName) => {
    const country = flags.find(
      (flag) => flag.name.common.toLowerCase() === countryName.toLowerCase()
    )
    return country ? country.flags.png : ""
  }

  return (
    <>
      <ParentDiv>
        <StyledGrid>
          {stats.map((item) => (
            <StyledCard
              key={item.country}
              style={{ display: "flex", alignItems: "center" }}
            >
              <div style={{ flex: 1 }}>
                <h3>Continent: {item.continent}</h3>
                <h3>Country: {item.country}</h3>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "10px",
                  }}
                >
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <p>Population:</p>
                    <StyledCard2>{item.population}</StyledCard2>
                  </div>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <p>New Cases:</p>
                    <StyledCard3>{item.newCases || null}</StyledCard3>
                  </div>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <p>Deaths: </p>
                    <StyledCard4>{item.deaths["1M_pop"]}</StyledCard4>
                  </div>
                </div>
              </div>
              <div
                style={{
                  flexShrink: 0,

                  width: "40%",
                  height: "100%",
                  paddingBottom: "10px",
                }}
              >
                {flags ? (
                  <img
                    src={getFlagUrl(item.country)}
                    style={{
                      width: "100%",
                      height: "100%",
                      marginLeft: "auto",
                    }}
                  />
                ) : null}
              </div>
            </StyledCard>
          ))}
        </StyledGrid>
      </ParentDiv>
    </>
  )
}
