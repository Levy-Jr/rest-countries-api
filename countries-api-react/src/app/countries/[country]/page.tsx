"use client"

import { useCountry } from "@/apis/queries";

type Props = {
  params: {
    country: string;
  }
}

const Page = ({ params }: Props) => {
  const country = useCountry(params.country)
  const dataCountry = country.data

  return (
    <div className="mx-auto w-[min(69.375rem,100%-2rem)]" >
      {country.isLoading &&
        <p>Carregando</p>
      }
      {country.data && dataCountry &&
        <div className="flex space-between items-center gap-16">

          <div className="flex-1">
            <a href="http://localhost:3000">Back</a>
            <img src={dataCountry.flags.svg} alt={`Bandeira do país ${dataCountry.name.common}`} />
          </div>

          <div className="flex-1">
            <h1>{dataCountry.name.common}</h1>
            <p>Native Name: { }</p>
            <p>Population: {dataCountry.population}</p>
            <p>Region: {dataCountry.region}</p>
          </div>
        </div>
      }
      {!country &&
        <p>Página não encontrada!</p>
      }
    </div >
  )
}

export default Page