import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

export const FilterButton = () => {
  const [showOptions, setShowOptions] = useState(false)

  const handleClick = () => {
    showOptions == false ? setShowOptions(true) : setShowOptions(false)
  }

  return (
    <div className="relative text-[.875rem]">
      <button onClick={handleClick} className="max-w-[12rem] flex items-center md:max-w-[15rem] bg-el-color dark:bg-dark-el-color py-3 px-3 sm:py-3 sm:px-3 md:px-6 md:py-4 rounded font-light shadow-md"><span className="mr-12">Filter by Region</span> <FontAwesomeIcon icon={faChevronDown} className='max-w-[1rem]' /></button>
      {showOptions &&
        <div className='absolute flex flex-col w-full mt-2 rounded overflow-hidden'>
          <button className='bg-el-color dark:bg-dark-el-color py-2 pl-6 text-left'>Africa</button>
          <button className='bg-el-color dark:bg-dark-el-color py-2 pl-6 text-left'>America</button>
          <button className='bg-el-color dark:bg-dark-el-color py-2 pl-6 text-left'>Asia</button>
          <button className='bg-el-color dark:bg-dark-el-color py-2 pl-6 text-left'>Europe</button>
          <button className='bg-el-color dark:bg-dark-el-color py-2 pl-6 text-left'>Oceania</button>
        </div>
      }
    </div>
  )
}