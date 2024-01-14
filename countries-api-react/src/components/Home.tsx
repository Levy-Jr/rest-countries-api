import { useCountries } from "@/apis/queries"
import { Country } from "./Country"

export const Home = () => {

  const countries = useCountries()

  const handleClick = () => {

  }

  return (
    <div className="mx-auto w-[min(69.375rem,100%-2rem)]">
      <div className="flex flex-col sm:flex-row gap-8 sm:gap-0 justify-between my-8">
        <input className="el-color dark:bg-dark-el-color text-color dark:text-dark-color py-2 pl-6 w-[min(100%,20rem)] rounded outline-0" type="text" placeholder="Search for a country..." />
        <button className="max-w-[10rem] bg-el-color dark:bg-dark-el-color py-2 px-4 rounded font-light">Filter by Region</button>
      </div>
      {countries.data &&
        <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-12">
          {countries.data.map((item, index) => (
            <Country
              key={index}
              flag={item.flags.png}
              name={item.name.common}
              population={item.population.toString()}
              region={item.region}
              capital={item.capital}
            />
          ))}
        </ul>
      }
    </div>
  )
}