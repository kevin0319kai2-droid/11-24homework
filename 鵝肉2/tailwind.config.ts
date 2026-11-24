import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: { extend: { colors: { forest: '#2D3A26', cream: '#FBF9F5', amber: '#D97706', ink: '#1F2937' } } },
  plugins: [],
};

export default config;
