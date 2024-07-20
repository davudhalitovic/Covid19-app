import { useEffect, useState } from "react";
import { App, CasesDiv, InfoChild, InfoDiv } from "./CountryStatsStyled";
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import axios from 'axios';


export function CountryStats() {
  const [flags, setFlags] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    const fetchFlags = async () => {
      try {
        const response = await axios.get('https://restcountries.com/v3.1/all');
        setFlags(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching the flags', error);
      }
    };

    fetchFlags();
  }, []);

  return (
    <>
      <App>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={flags}
          getOptionLabel={(option) => option.name.common}
          sx={{ width: 300 }}
          onChange={(event, newValue) => {
            setSelectedCountry(newValue);
          }}
          renderOption={(props, option) => (
            <li {...props} style={{ display: 'flex', alignItems: 'center' }}>
              <img
                src={option.flags.png}
                style={{ width: 24, height: 16, marginRight: 8 }}
              />
              {option.name.common}
              <br />
              <p>({option.cioc})</p>
            </li>
          )}
          renderInput={(params) => <TextField {...params} label="Country" />}
        />
        <InfoDiv>
          <InfoChild>
            {selectedCountry ? (
              <>
                <h1 style={{ marginRight: "1rem" }}>{selectedCountry.name.common}</h1>
                <img src={selectedCountry.flags.png} alt={`${selectedCountry.name.common} flag`} style={{ width: 50, height: 30, marginRight: "1rem" }} />
              </>
            ) : (
              <h1>No country selected</h1>
            )}
          </InfoChild>

          <InfoChild>
            <CasesDiv>
              <p>{selectedCountry?.cases} <br /> New cases</p>
            </CasesDiv>
            <CasesDiv>
              <p>{selectedCountry?.todayCases} <br /> New cases</p>
            </CasesDiv>
            <CasesDiv>
              <p>{selectedCountry?.deaths} <br /> New cases</p>
            </CasesDiv>
          </InfoChild>
          <InfoChild>
            <CasesDiv>
              <p>/ <br /> New cases</p>
            </CasesDiv>
          </InfoChild>
        </InfoDiv>
      </App>
    </>
  )
}
