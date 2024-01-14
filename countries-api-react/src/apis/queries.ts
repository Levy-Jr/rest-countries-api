import { useQuery } from '@tanstack/react-query'
import { getCountries, getCountry } from './api'

export const useCountries = () => {
  return useQuery({ queryKey: ['countries'], queryFn: getCountries })
}

export const useCountry = (name: string) => {
  return useQuery({ queryKey: ['countries', name], queryFn: () => getCountry(name) })
}