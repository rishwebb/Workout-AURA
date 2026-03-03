/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                void: '#0B0E14',
                surface: '#1A1D24',
                'surface-hover': '#252830',
                electric: '#00E5FF',
                volt: '#39FF14',
                blaze: '#FF5100',
            },
            fontFamily: {
                heading: ['Outfit', 'sans-serif'],
                body: ['Inter', 'sans-serif'],
                mono: ['Space Grotesk', 'monospace'],
            },
        },
    },
    plugins: [],
}
