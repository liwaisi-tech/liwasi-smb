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
        'text-primary': '#333333',
        'text-detail': '#CCCCCC',
        'text-accent-blue': '#008080',
        'text-accent-yellow': '#FFD700',
        'text-accent-red': '#8B0000',
        'bg-alternative': '#333333',
        'link-dark': '#0099FF'
      }
    },
  },
  plugins: [],
}
export default config
