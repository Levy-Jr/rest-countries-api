type Props = {
  flag: string;
  name: string;
  population: string;
  region: string;
  capital: string;
}

export const Country = ({ flag, name, population, region, capital }: Props) => {
  return (
    <li className="w-[min(100%,20rem)] mx-auto bg-el-color dark:bg-dark-el-color rounded cursor-pointer">
      <img src={flag} alt={`bandeira do país ${name}`} />
      <div>
        <h2 className="font-bold">{name}</h2>
        <p>Population: {population}</p>
        <p>Region: {region}</p>
        <p>Capital: {capital}</p>
      </div>
    </li>
  )
}