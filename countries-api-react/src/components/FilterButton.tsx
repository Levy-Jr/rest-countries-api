import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

type Props = {
  buttonClick: (value: string) => void
}

export const FilterButton = ({ buttonClick }: Props) => {
  const [showOptions, setShowOptions] = useState(false)

  const handleClick = () => {
    showOptions == false ? setShowOptions(true) : setShowOptions(false)
  }

  return (
    <div className="relative text-[.875rem]">
      <button onClick={handleClick} className="max-w-[12rem] flex items-center md:max-w-[15rem] bg-el-color dark:bg-dark-el-color py-3 px-3 sm:py-3 sm:px-3 md:px-6 md:py-4 rounded font-light shadow-md"><span className="mr-12">Filter by Region</span> <FontAwesomeIcon icon={faChevronDown} className='max-w-[1rem]' /></button>
      {showOptions &&
        <ul className='absolute flex flex-col w-full mt-2 rounded overflow-hidden bg-el-color dark:bg-dark-el-color py-4 pl-6'>
          <li><button className='text-left pb-4' onClick={() => buttonClick("africa")} value="africa">Africa</button></li>
          <li><button className='text-left pb-4' onClick={() => buttonClick("america")} value="america">America</button></li>
          <li><button className='text-left pb-4' onClick={() => buttonClick("asia")} value="asia">Asia</button></li>
          <li><button className='text-left pb-4' onClick={() => buttonClick("europe")} value="europe">Europe</button></li>
          <li><button className='text-left' onClick={() => buttonClick("oceania")} value="oceania">Oceania</button></li>
        </ul>
      }
    </div>
  )
}