import { Country } from "@/types/CountryType";
import axios from "axios";

const req = axios.create({
  baseURL: 'https://restcountries.com/v3.1'
})

export const getCountries = async (): Promise<Country[]> => {
  const result = await req.get('/all')
  return result.data
}

export const getCountry = async (name: string): Promise<Country> => {
  const result = await req.get(`/name/${name}`)
  return result.data[0]
}