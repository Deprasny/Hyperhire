import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        'blue-gray-80': '#343741',
        'blue-gray-60': '#5E626F',
        'point-blue': '#4A77FF',
        'blue-gray-90': '#24252F',
        'blue-gray-40': '#C1C5CF',
        'trabuddy-alt': '#00C696',
        'nephritis-05': '#E9F7EF',
        'yellow-40': '#FFE76B',
      },
    },
  },
  plugins: [],
};
export default config;
