/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-custom': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                'gradient-dark': 'linear-gradient(135deg, #1f2937 0%, #111827 100%)',
            },
        },
    },
    plugins: [],
}
