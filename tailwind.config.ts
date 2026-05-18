import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#05070D',
        surface: '#0B1020',
      },
      boxShadow: {
        glow: '0 0 60px rgba(37, 99, 235, 0.28)',
      },
    },
  },
  plugins: [],
}

export default config
