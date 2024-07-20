import { useEffect, useState } from "react"
import { createContext } from "react"
import { FetchCountry, FetchStatistic, FetchHistory } from "../Api/Request"

export const DataContex = createContext()

export function DataProvider({ children }) {
  const [country, setCountry] = useState({ response: [] })
  const [stats, setStats] = useState([])
  const [history, setHistory] = useState([])

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await FetchCountry()
        setCountry(response)
      } catch (error) {
        console.error("Error fetching countries:", error)
      }
    }
    fetch()
  }, [])

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await FetchStatistic()
        setStats(response.response)
      } catch (error) {
        console.error("Error fetching Stats:", error)
      }
    }
    fetch()
  }, [])

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await FetchHistory()
        setHistory(response.response)
      } catch (error) {
        console.error("Error fetching History:", error)
      }
    }
    fetch()
  }, [])

  return (
    <DataContex.Provider value={{ country, stats, history }}>
      {children}
    </DataContex.Provider>
  )
}
