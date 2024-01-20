import { useCountries } from "@/apis/queries"
import { Country } from "./Country"
import { useMemo, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import { faSearch } from "@fortawesome/free-solid-svg-icons"

export const Home = () => {
  const countries = useCountries()
  const [query, setQuery] = useState("")
  const [regionFilter, setRegionFilter] = useState("")

  const [showOptions, setShowOptions] = useState(false)

  const handleClick = () => {
    showOptions == false ? setShowOptions(true) : setShowOptions(false)
  }

  const filteredItems = useMemo(() => {
    if (countries.data) {
      return countries.data.filter(item => {
        return item.name.common.toLowerCase().includes(query.toLowerCase()) && item.region.toLowerCase().includes(regionFilter.toLowerCase())
      })
    }
  }, [countries, query, regionFilter])


  return (
    <div className="mx-auto w-[min(69.375rem,100%-2rem)]">
      <div className="flex flex-col sm:flex-row gap-8 sm:gap-0 justify-between my-12">

        <div className="w-[min(100%,26rem)] flex items-center el-color dark:bg-dark-el-color shadow-lg rounded overflow-hidden">
          <FontAwesomeIcon icon={faSearch} className='max-w-[1rem] pl-6' />
          <input value={query} onChange={e => setQuery(e.target.value)} className="el-color dark:bg-dark-el-color text-color dark:text-dark-color py-4 pl-6 w-full text-[0.875rem] outline-0" type="text" placeholder="Search for a country..." />
        </div>

        <div className="relative text-[.875rem]">
          <button onClick={handleClick} className="max-w-[12rem] flex items-center md:max-w-[15rem] bg-el-color dark:bg-dark-el-color py-3 px-3 sm:py-3 sm:px-3 md:px-6 md:py-4 rounded font-light shadow-md"><span className="mr-12">Filter by Region</span> <FontAwesomeIcon icon={faChevronDown} className='max-w-[1rem]' /></button>
          {showOptions &&
            <ul className='absolute flex flex-col w-full mt-2 rounded overflow-hidden bg-el-color dark:bg-dark-el-color py-4 pl-6'>
              <li><button className='text-left pb-4' onClick={() => { setRegionFilter("") }} value="africa">All</button></li>
              <li><button className='text-left pb-4' onClick={() => { setRegionFilter("africa") }} value="africa">Africa</button></li>
              <li><button className='text-left pb-4' onClick={() => { setRegionFilter("america") }} value="america">America</button></li>
              <li><button className='text-left pb-4' onClick={() => { setRegionFilter("asia") }} value="asia">Asia</button></li>
              <li><button className='text-left pb-4' onClick={() => { setRegionFilter("europe") }} value="europe">Europe</button></li>
              <li><button className='text-left' onClick={() => { setRegionFilter("oceania") }} value="oceania">Oceania</button></li>
            </ul>
          }
        </div>

      </div>

      {countries.isLoading && "Carregando países..."}

      {filteredItems &&
        <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {filteredItems.map((item, index) => (
            <Country
              key={index}
              flag={item.flags.svg}
              altFlag={item.flags.alt}
              name={item.name.common}
              population={item.population}
              region={item.region}
              capital={item.capital}
              cca={item.cca3}
            />
          ))}
        </ul>
      }
    </div>
  )
}