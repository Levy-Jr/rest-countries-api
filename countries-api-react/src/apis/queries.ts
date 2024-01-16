import { useQuery } from '@tanstack/react-query'
import { getCountries, getCountry, getCountryCode } from './api'

export const useCountries = () => {
  return useQuery({ queryKey: ['countries'], queryFn: getCountries })
}

export const useCountry = (name: string) => {
  return useQuery({ queryKey: ['countries', name], queryFn: () => getCountry(name) })
}

export const useCountryCode = (code: string) => {
  return useQuery({ queryKey: ['countries', code], queryFn: () => getCountryCode(code) })
}