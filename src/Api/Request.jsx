import axios from "axios"

const options = {
  method: "GET",
  url: "https://covid-193.p.rapidapi.com/countries",
  headers: {
    "x-rapidapi-key": "3cbc4a795amshde599d6e92a2568p12b816jsn8f81f5d58250",
    "x-rapidapi-host": "covid-193.p.rapidapi.com",
  },
}

export async function FetchData() {
  try {
    const response = await axios.request(options)
    console.log(`USPESNO`, response.data)
    return response.data
  } catch (error) {
    console.error(`Nista od vatanja`, error)
  }
}
