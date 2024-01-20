import { Country } from "@/types/CountryType";
import axios from "axios";

const req = axios.create({
  baseURL: 'https://restcountries.com/v3.1'
})

export const getCountries = async (): Promise<Country[]> => {
  const result = await req.get('/all')
  return result.data
}

export const getCountryCode = async (code: string): Promise<Country> => {
  const result = await req.get(`/alpha/${code}`)
  return result.data[0]
}