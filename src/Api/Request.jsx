import axios from "axios"

const countries = {
  method: "GET",
  url: "https://covid-193.p.rapidapi.com/countries",
  headers: {
    "x-rapidapi-key": "7cdf079073mshacc4f77771a71cap1f6996jsnabcfd5a437bf",
    "x-rapidapi-host": "covid-193.p.rapidapi.com",
  },
}

const statistic = {
  method: "GET",
  url: "https://covid-193.p.rapidapi.com/statistics",
  headers: {
    "x-rapidapi-key": "7cdf079073mshacc4f77771a71cap1f6996jsnabcfd5a437bf",
    "x-rapidapi-host": "covid-193.p.rapidapi.com",
  },
}

const history = {
  method: "GET",
  url: "https://covid-193.p.rapidapi.com/history",
  params: {
    country: "china",
    day: "2020-06-02",
  },
  headers: {
    "x-rapidapi-key": "7cdf079073mshacc4f77771a71cap1f6996jsnabcfd5a437bf",
    "x-rapidapi-host": "covid-193.p.rapidapi.com",
  },
}

export async function FetchCountry() {
  try {
    const response = await axios.request(countries)
    console.log(`Country`, response.data)
    return response.data
  } catch (error) {
    console.error(`Nista od vatanja`, error)
  }
}

export async function FetchStatistic() {
  try {
    const response = await axios.get(`https://covid-193.p.rapidapi.com/statistics`,
      {
        headers: {
          "x-rapidapi-key": "7cdf079073mshacc4f77771a71cap1f6996jsnabcfd5a437bf",
          "x-rapidapi-host": "covid-193.p.rapidapi.com",
        }
      }
    )
    console.log(`Statistic`, response.data)
    return response.data
  } catch (error) {
    console.error(`Nista od vatanja2`, error)
  }
}

export async function FetchHistory() {
  try {
    const response = await axios.request(history)
    console.log(`History`, response.data)
    return response.data
  } catch (error) {
    console.error(`Nista od vatanja2`, error)
  }
}
