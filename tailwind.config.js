/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: 'jit',
    purge: ['./src/**/*.{js,jsx,ts,tsx}'],
    darkMode: 'class',
    theme: {
        zIndex: {
            0: 0,
            10: 10,
            20: 20,
            30: 30,
            40: 40,
            50: 50,
            25: 25,
            50: 50,
            75: 75,
            100: 100,
            9999: 9999,
            auto: 'auto',
        },
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [require('@tailwindcss/aspect-ratio')],
};
