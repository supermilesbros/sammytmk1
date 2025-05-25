import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.{vue,js}',
    './pages/**/*.{vue,js}',
    './app.vue'
  ],
  theme: {
    extend: {
      fontFamily: {
        creepster: ['Creepster', 'cursive'], // use class: font-creepster
      },
    },
  },
  plugins: [],
}
export default config
