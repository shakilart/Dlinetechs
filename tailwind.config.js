/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'color': {
          'azure-34': '#1D5290',
          'azure-14': '#244C7C',
          'azure-23': '#3A5F8F',
          'orange-53': '#F89D14',
          'white-solid': '#FFFFFF',
          'green-59': '#52C41A',
          'grey-92': '#EEEEEE',
          'grey-94': '#F5F5F5',
          'grey-98': '#FAFAFA',
        }
      },
    },
  },
  plugins: [],
}
