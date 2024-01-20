"use client"

import { useCountryCode } from "@/apis/queries"
import { CurrenciesType, NativeNameType } from "@/types/CountryType"
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

type Props = {
  params: {
    countryCode: string
  }
}

const Page = ({ params }: Props) => {
  const countryCode = useCountryCode(params.countryCode)
  const dataCountryCode = countryCode.data

  const renderUnknownKey = (value: NativeNameType) => {
    const desiredKey = Object.keys(value)[0]
    const desiredValue = value[desiredKey as keyof typeof dataCountryCode]
    return desiredValue.common
  }

  const renderUnknownCurrencyKey = (value: CurrenciesType) => {
    const desiredKey = Object.keys(value)[0]
    const desiredValue = value[desiredKey as keyof typeof dataCountryCode]
    return desiredValue.name
  }

  const renderUnknownLanguageKeys = (value: string[]): string => {
    const desiredValue = Object.values(value)
    return desiredValue.join(', ')
  }

  return (
    <div className="mx-auto w-[min(69.375rem,100%-2rem)] text-[.875rem]" >

      {countryCode.isLoading &&
        <p>Carregando...</p>
      }

      {!countryCode.isLoading && !dataCountryCode &&
        <p>Página não encontrada!</p>
      }

      {dataCountryCode &&
        <div className="mt-12 mb-8">

          <a className="mb-12 inline-block bg-el-color dark:bg-dark-el-color px-8 py-2 rounded shadow-md" href="/"><FontAwesomeIcon icon={faArrowLeftLong} className="mr-3" /> Back</a>
          <div className="flex flex-col md:flex-row justify-between items-center gap-14">
            <div className="flex-1">
              <img src={dataCountryCode.flags.svg} alt={`Bandeira do país ${dataCountryCode.name.common}`} />
            </div>
            <div className="flex-1">
              <h1 className="font-bold text-5xl">{dataCountryCode.name.common}</h1>
              <div className="flex flex-col md:flex-row gap-8 my-8">
                <div className="flex flex-col gap-1">
                  <p><span className="font-semibold">Native Name: </span><span className="opacity-90">{renderUnknownKey(dataCountryCode.name.nativeName)}</span></p>
                  <p><span className="font-semibold">Population: </span><span className="opacity-90">{new Intl.NumberFormat("en-US").format(dataCountryCode.population)}</span></p>
                  <p><span className="font-semibold">Region: </span><span className="opacity-90">{dataCountryCode.region}</span></p>
                  <p><span className="font-semibold">Sub Region: </span><span className="opacity-90">{dataCountryCode.subregion}</span></p>
                  <p><span className="font-semibold">Capital: </span><span className="opacity-90">{dataCountryCode.capital}</span></p>
                </div>
                <div className="flex flex-col gap-1">
                  <p><span className="font-semibold">Top Level Domain: </span><span className="opacity-90">{dataCountryCode.tld}</span></p>
                  <p><span className="font-semibold">Currencies: </span><span className="opacity-90">{renderUnknownCurrencyKey(dataCountryCode.currencies)}</span></p>
                  <p><span className="font-semibold">Languages: </span><span className="opacity-90">{renderUnknownLanguageKeys(dataCountryCode.languages)}</span></p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-2">
                <span className="font-semibold min-w-fit inline-block md:hidden">Border Countries:</span>
                {dataCountryCode.borders ?
                  <ul className="flex flex-wrap gap-2 items-center">
                    <span className="font-semibold min-w-fit hidden md:inline-block">Border Countries:</span>
                    {dataCountryCode.borders.map((item, index) => (
                      <li key={index}><a className="inline-block bg-el-color dark:bg-dark-el-color px-8 py-1 rounded shadow-md" href={`/code/${item}`}>{item}</a></li>
                    ))}</ul>
                  : "Not available or doesn't exist"}
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default Page