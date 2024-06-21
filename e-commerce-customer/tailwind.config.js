/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                'red-1': '#DB4444',
                'gray-1': '#F5F5F5',
            },
            backgroundColor: {
                'blue-1': '#CBE4E8',
            },
        },
    },
    plugins: [],
};
