import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue-dark': '#1E40AF',
        'black': '#121212',
        'primary': '#333333',
        'detail': '#CCCCCC',
        'accent-blue': '#008080',
        'accent-yellow': '#FFD700',
        'accent-red': '#8B0000',
        'bg-alternative': '#333333',
        'link-dark': '#0099FF'
      }
    },
  },
  plugins: [],
}
export default config
