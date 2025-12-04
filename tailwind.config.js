/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './lib/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0C365A',
        primary: '#01D167',
        azure: '#3D56D6',
        frost: '#F5F9FF',
        border: '#E5EDFB',
        slate: '#64748B',
        muted: '#94A3B8'
      },
      boxShadow: {
        card: '0 14px 30px rgba(12, 54, 90, 0.08)',
        inset: 'inset 0 1px 0 rgba(255,255,255,0.1)'
      },
      borderRadius: {
        xl: '1rem'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
};
