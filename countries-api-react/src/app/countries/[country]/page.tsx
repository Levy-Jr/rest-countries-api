"use client"

import { useCountry } from "@/apis/queries";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
  params: {
    country: string;
  }
}

const Page = ({ params }: Props) => {
  const country = useCountry(params.country)
  const dataCountry = country.data
  console.log(dataCountry)

  return (
    <div className="mx-auto w-[min(69.375rem,100%-2rem)]" >

      {country.isLoading &&
        <p>Carregando...</p>
      }

      {!country.isLoading && !dataCountry &&
        <p>Página não encontrada!</p>
      }

      {dataCountry &&
        <div className="mt-12">

          <a className="mb-12 inline-block bg-el-color dark:bg-dark-el-color px-8 py-2 rounded shadow-md" href="http://localhost:3000"><FontAwesomeIcon icon={faArrowLeftLong} className="mr-3" /> Back</a>
          <div className="flex justify-between items-center gap-20 ">
            <div className="flex-1">
              <img src={dataCountry.flags.svg} alt={`Bandeira do país ${dataCountry.name.common}`} />
            </div>
            <div className="flex-1">
              <h1 className="font-bold text-5xl">{dataCountry.name.common}</h1>
              <div>
                <p><span className="font-semibold">Native Name: </span><span className="opacity-90">{ }</span></p>
                <p><span className="font-semibold">Population: </span><span className="opacity-90">{new Intl.NumberFormat("en-US").format(dataCountry.population)}</span></p>
                <p><span className="font-semibold">Region: </span><span className="opacity-90">{dataCountry.region}</span></p>
                <p><span className="font-semibold">Sub Region: </span><span className="opacity-90">{dataCountry.region}</span></p>
                <p><span className="font-semibold">Capital: </span><span className="opacity-90">{dataCountry.capital}</span></p>
                <p><span className="font-semibold">Top Level Domain: </span><span className="opacity-90">{dataCountry.capital}</span></p>
                <p><span className="font-semibold">Currencies: </span><span className="opacity-90">{dataCountry.capital}</span></p>
                <p><span className="font-semibold">Languages: </span><span className="opacity-90">{ }</span></p>
              </div>
              <ul className="flex flex-wrap gap-2 items-center">
                <span className="font-semibold">Border Countries:</span>
                {dataCountry.borders?.map((item, index) => (
                  <li key={index}><a className="text-[.875rem] inline-block bg-el-color dark:bg-dark-el-color px-8 py-1 rounded shadow-md" href={`/countries/code/${item}`}>{item}</a></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default Page