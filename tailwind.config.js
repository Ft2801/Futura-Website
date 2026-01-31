/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './index.html',
        './**/*.{ts,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                display: ['Plus Jakarta Sans', 'sans-serif'],
            },
            colors: {
                background: '#030014',
            },
            animation: {
                'blob': 'blob 20s infinite alternate',
                'blob-delay': 'blob 25s animation-delay-5000 infinite alternate-reverse',
                'blob-slow': 'blob 30s infinite linear',
                'float': 'float 10s infinite ease-in-out',
            },
            keyframes: {
                blob: {
                    '0%': { transform: 'translate(0px, 0px) scale(1)' },
                    '25%': { transform: 'translate(100px, -100px) scale(1.1)' },
                    '50%': { transform: 'translate(-50px, 50px) scale(0.9)' },
                    '75%': { transform: 'translate(-80px, -20px) scale(1.05)' },
                    '100%': { transform: 'translate(0px, 0px) scale(1)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px) translateX(0px)' },
                    '50%': { transform: 'translateY(-20px) translateX(10px)' },
                }
            }
        },
    },
    plugins: [],
}
