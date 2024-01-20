import { useQuery } from '@tanstack/react-query'
import { getCountries, getCountryCode } from './api'

export const useCountries = () => {
  return useQuery({ queryKey: ['countries'], queryFn: getCountries })
}

export const useCountryCode = (code: string) => {
  return useQuery({ queryKey: ['countries', code], queryFn: () => getCountryCode(code) })
}