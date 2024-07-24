import { useEffect, useState } from "react"
import { App, CasesDiv, InfoChild, InfoDiv } from "./CountryStatsStyled"
import * as React from "react"
import TextField from "@mui/material/TextField"
import Autocomplete from "@mui/material/Autocomplete"
import axios from "axios"

export function CountryStats() {
  const [flags, setFlags] = useState([])
  const [selectedCountry, setSelectedCountry] = useState(null)
  const [covidData, setCovidData] = useState({})
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [selectedDate, setSelectedDate] = useState("")

  // Fetch all countries and their flags
  useEffect(() => {
    const fetchFlags = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all")
        setFlags(response.data)
        console.log(response.data)
      } catch (error) {
        console.error("Error fetching the flags", error)
      }
    }

    fetchFlags()
  }, [])

  // Fetch COVID-19 statistics for the selected country
  useEffect(() => {
    if (selectedCountry) {
      const fetchData = async (country) => {
        setLoading(true)
        setError(null)
        setCovidData({})

        const options = {
          method: "GET",
          headers: {
            "x-rapidapi-key":
              "7cdf079073mshacc4f77771a71cap1f6996jsnabcfd5a437bf",
            "x-rapidapi-host": "covid-193.p.rapidapi.com",
          },
        }

        try {
          const response = await fetch(
            `https://covid-193.p.rapidapi.com/statistics?country=${country}`,
            options
          )
          if (!response.ok) {
            throw new Error("Network response was not ok")
          }
          const result = await response.json()
          const countryData = result.response[0]
          setCovidData({
            cases: countryData.cases.total,
            todayCases: countryData.cases.new,
            deaths: countryData.deaths.total,
            todayDeaths: countryData.deaths.new,
            recovered: countryData.recovered,
            active: countryData.cases.active,
          })
        } catch (error) {
          setError(error.message)
        } finally {
          setLoading(false)
        }
      }

      fetchData(selectedCountry.name.common)
    }
  }, [selectedCountry])

  return (
    <div>
      <App>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={flags}
            getOptionLabel={(option) => option.name.common}
            sx={{ width: 300 }}
            onChange={(event, newValue) => {
              setSelectedCountry(newValue)
            }}
            renderOption={(props, option) => (
              <li {...props} style={{ display: "flex", alignItems: "center" }}>
                <img
                  src={option.flags.png}
                  style={{ width: 24, height: 16, marginRight: 8 }}
                  alt={`${option.name.common} flag`}
                />
                {option.name.common}
                <br />
                <p>({option.cioc})</p>
              </li>
            )}
            renderInput={(params) => <TextField {...params} label="Country" />}
          />
          <TextField
            id="date-picker"
            label="Select Date"
            type="date"
            sx={{ width: 220, marginLeft: 2 }}
            InputLabelProps={{
              shrink: true,
            }}
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          />
        </div>
        <InfoDiv>
          <InfoChild>
            {selectedCountry ? (
              <>
                <h1 style={{ marginRight: "1rem" }}>
                  {selectedCountry.name.common}
                </h1>
                <img
                  src={selectedCountry.flags.png}
                  alt={`${selectedCountry.name.common} flag`}
                  style={{ width: 50, height: 30, marginRight: "1rem" }}
                />
              </>
            ) : (
              <h1>No country selected</h1>
            )}
          </InfoChild>

          <InfoChild>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {!loading && !error && selectedCountry && (
              <>
                <CasesDiv>
                  <p>
                    {covidData.todayCases === null ? "/" : covidData.todayCases}{" "}
                    <br /> New Cases
                  </p>
                </CasesDiv>
                <CasesDiv>
                  <p>
                    {covidData.todayDeaths === null
                      ? "/"
                      : covidData.todayDeaths}{" "}
                    <br /> New Deaths
                  </p>
                </CasesDiv>
                <CasesDiv>
                  <p>
                    {covidData.cases === null ? "/" : covidData.cases} <br />{" "}
                    Total Cases
                  </p>
                </CasesDiv>
              </>
            )}
          </InfoChild>
          <InfoChild>
            {error && <p>Error: {error}</p>}
            {!loading && !error && selectedCountry && (
              <>
                <CasesDiv>
                  <p>
                    {covidData.deaths === null ? "/" : covidData.deaths} <br />{" "}
                    Total Active
                  </p>
                </CasesDiv>
              </>
            )}
          </InfoChild>
        </InfoDiv>
      </App>
    </div>
  )
}
