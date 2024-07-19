import { useContext, useEffect, useState } from "react"
import { createContext } from "react"
import { FetchData } from "../Api/Request"

const DataContex = createContext()

export function DataProvider({ children }) {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetch = async () => {
      const response = await FetchData()
      setData(response)
    }
    fetch()
  }, [])

  return <DataContex.Provider value={{ data }}>{children}</DataContex.Provider>
}
