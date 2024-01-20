"use client"

import { ThemeContext } from "@/utils/providers"
import { faMoon } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useContext } from "react"

const Header = () => {
  const darkModeCtx = useContext(ThemeContext)

  const handleClick = () => darkModeCtx?.theme ? darkModeCtx?.setTheme(false) : darkModeCtx?.setTheme(true)

  return (
    <header className='el-color dark:bg-dark-el-color py-6 shadow-md'>
      <div className='flex justify-between w-[min(69.375rem,100%-2rem)] mx-auto'>
        <h1 className='font-extrabold'>Where in the world?</h1>
        <button onClick={handleClick} className='flex items-center gap-2 font-semibold'><FontAwesomeIcon icon={faMoon} width={14} />Dark Mode</button>
      </div>
    </header>
  )
}

export default Header