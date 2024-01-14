import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

type Props = {

}

export const FilterButton = () => {
  return (
    <div className="relative">
      <button className="max-w-[12rem] md:max-w-[15rem] bg-el-color dark:bg-dark-el-color py-3 px-3 sm:py-3 sm:px-3 md:px-6 md:py-4 rounded font-light text-[.875rem] shadow-md"><span className="mr-12">Filter by Region</span> <FontAwesomeIcon icon={faChevronDown} /></button>
    </div>
  )
}