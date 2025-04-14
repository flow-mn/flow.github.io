import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      colors: {
        primary: '#f2c0ff',
        secondary: '#050505',
        onSecondary: '#f5f6fa',
        rose: '#ff4040',
        text: '#f5f6fa',
        background: '#141414'
      },
      boxShadow: {
        footer: '0 -1px 6px 0px rgba(255, 255, 255, 0.1)'
      },
      keyframes: {
        moveAroundA: {
          '0%': { transform: 'translate(0%,0%)' },
          '100%': { transform: 'translate(-110%,60%)' }
        },
        moveAroundB: {
          '0%': { transform: 'translate(0%,0%)' },
          '100%': { transform: 'translate(-60%,40%)' }
        },
        moveAroundC: {
          '0%': { transform: 'translate(0%,0%)' },
          '100%': { transform: 'translate(90%,-120%)' }
        }
      },
      animation: {
        moveAroundA: 'moveAroundA 10s alternate infinite',
        moveAroundB: 'moveAroundB 10s alternate infinite',
        moveAroundC: 'moveAroundC 10s alternate infinite'
      }
    }
  },

  plugins: [typography]
} satisfies Config;
