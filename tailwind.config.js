/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      height: {
        '112': '28rem',
        '128': '32rem',   
        '144': '36rem',   
        '160': '40rem',
        '168': '42rem',
        '176': '44rem',  
        '184': '46rem',  
        '192': '48rem', 
          
      },
      width : {
        '152' :'38rem',
        '160': '40rem',
        '168': '42rem',
        '176': '44rem',  
        '184': '46rem',  
        '192': '48rem', 
        '208': '52rem'
      }
    },
  },
  plugins: [],
}

