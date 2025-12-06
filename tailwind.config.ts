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
        // CSS Variables
        background: 'var(--background)',
        foreground: 'var(--foreground)',

        // Brand Colors
        primary: '#4A77FF', // Main brand blue
        'primary-light': '#8BC4FF', // Light blue accent
        success: '#00C696', // Green for success/money
        warning: '#FFE76B', // Yellow for highlights

        // Gradient Colors
        'gradient-start': '#26C2B9', // Teal
        'gradient-end': '#288BE7', // Blue

        // Text Colors
        'text-primary': '#1D1D25', // Headings
        'text-secondary': '#343741', // Body text
        'text-tertiary': '#5E626F', // Muted text
        'text-dark': '#344054', // Dropdown text (slightly different shade)

        // Background Colors
        'bg-light': '#FBFBFB', // Light backgrounds (footer)
        'bg-muted': '#EFF1F6', // Icon/card backgrounds
        'bg-success': '#E9F7EF', // Success state backgrounds

        // Border/Divider Colors
        'border-light': '#F2F4F7', // Light borders
        'border-medium': '#E9EAED', // Dividers
        'border-dark': '#C1C5CF', // Dark borders

        // Badge Colors
        'badge-bg': '#8BC4FF', // Badge background (mobile)
        'badge-text': '#40E2E8', // Badge text color (desktop)

        // Salary Tooltip Colors
        'salary-bg': '#E9F7EF', // Salary tooltip background
        'salary-text': '#00C696', // Salary tooltip text

        // Card Colors
        'card-text': '#1D1D25', // Card heading text
        'card-role': '#4A77FF', // Role text in cards
        'card-skill-border': '#C1C5CF', // Skill badge border
        'card-skill-text': '#5E626F', // Skill badge text
      },
      spacing: {
        'card-sm': '240px',
        'card-lg': '292px',
      },
      boxShadow: {
        card: '0px 15px 24px rgba(0,0,0,0.12)',
      },
    },
  },
  plugins: [],
};

export default config;
