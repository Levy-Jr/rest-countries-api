import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        'bg': 'var(--bg)',
        'dark-bg': 'var(--dark-bg)',
        'el-color': 'var(--element-color)',
        'dark-el-color': 'var(--dark-element-color)',
        'input-color': 'var(--input-color)'
      },
      colors: {
        'color': 'var(--color-text)',
        'dark-color': 'var(--dark-color-text)'
      }
    },
  },
  plugins: [],
  darkMode: 'class'
}
export default config
