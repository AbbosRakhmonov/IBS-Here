

module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                'main-green': '#31A357',
                'color-logo': '#083C04',
                'text-inactive': '#6c6c6c',
                'text-active': '#000000',
                'button-green': '#47BF6F',
                'color-line': '#EDEDED',
                'color-black': '#181818',
                'footer-bg': '#032203',
                'white-80': 'rgba(255, 255, 255, 0.95)',
                'light-green': '#B3EE4A',
                'white-20': 'rgba(255, 255, 255, 0.2)',
            },
            fontSize: {
                'text-sm': '0.875rem',
                'text-base': '1rem',
                'text-lg': '1.125rem',
                'text-xl': '1.25rem',
                'text-2xl': '1.5rem',
                'text-3xl': '1.875rem',
                'text-4xl': '2.25rem',
                'text-5xl': '3rem'
            }
        }
    },
    plugins: []
}