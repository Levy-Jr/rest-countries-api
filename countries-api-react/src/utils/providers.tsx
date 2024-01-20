"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ReactNode, createContext, useContext, useEffect, useState } from 'react'

type ContextType = {
  theme: boolean;
  setTheme: (n: boolean) => void
}

const STORAGE_KEY = 'darkMode'

export const ThemeContext = createContext<ContextType | null>(null)

export const Providers = ({ children }: { children: ReactNode }) => {
  const [darkMode, setDarkMode] = useState(
    typeof localStorage !== 'undefined' ? JSON.parse(localStorage.getItem(STORAGE_KEY) as string) : ""
      || true)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(darkMode))
  }, [darkMode])

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity
      }
    }
  })

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeContext.Provider value={{ theme: darkMode, setTheme: setDarkMode }}>
        {children}
      </ThemeContext.Provider>
      <ReactQueryDevtools
        initialIsOpen={false}
        buttonPosition="bottom-right"
      />
    </QueryClientProvider>
  )
}

export const useTheme = () => useContext(ThemeContext)