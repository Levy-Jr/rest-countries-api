import { useCountries } from "@/apis/queries"
import { Country } from "./Country"
import { FilterButton } from "./FilterButton"
import { useMemo, useState } from "react"

export const Home = () => {
  const countries = useCountries()
  const [query, setQuery] = useState("")

  const filteredItems = useMemo(() => {
    if (countries.data) {
      return countries.data.filter(item => (
        item.name.common.toLowerCase().includes(query.toLowerCase())
      ))
    }
  }, [countries, query])

  return (
    <div className="mx-auto w-[min(69.375rem,100%-2rem)]">
      <div className="flex flex-col sm:flex-row gap-8 sm:gap-0 justify-between my-12">

        <input value={query} onChange={e => setQuery(e.target.value)} className="el-color dark:bg-dark-el-color text-color dark:text-dark-color py-4 pl-6 w-[min(100%,26rem)] text-[0.875rem] rounded outline-0 shadow-lg" type="text" placeholder="Search for a country..." />

        <FilterButton />

      </div>

      {countries.isLoading && "Carregando países..."}

      {filteredItems &&
        <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-12">
          {filteredItems.map((item, index) => (
            <Country
              key={index}
              flag={item.flags.svg}
              altFlag={item.flags.alt}
              name={item.name.common}
              population={item.population}
              region={item.region}
              capital={item.capital}
            />
          ))}
        </ul>
      }
    </div>
  )
}