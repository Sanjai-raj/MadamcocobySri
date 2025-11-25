/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#A0522D',
                secondary: '#D2B48C',
                accent: '#6B8E23',
                'text-dark': '#333',
                'text-light': '#f4f4f4',
                'background-light': '#fdfaf7',
                'background-dark': '#2c2c2c',
            },
            fontFamily: {
                serif: ['"Playfair Display"', 'serif'],
                sans: ['"Montserrat"', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
