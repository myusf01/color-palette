module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Readex Pro', 'ui-sans-serif', 'system-ui']
    },
    extend: {
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(.46,.03,.52,.96) infinite'
      }
    }
  },
  plugins: []
}
