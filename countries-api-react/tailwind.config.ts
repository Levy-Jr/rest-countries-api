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
        'bg': 'var(--bg)'
      },
      colors: {
        'color-primary': 'var(--color-text-primary)'
      }
    },
  },
  plugins: [],
}
export default config
