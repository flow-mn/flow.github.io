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
      }
    }
  },

  plugins: [typography]
} satisfies Config;
