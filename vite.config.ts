import {defineConfig, loadEnv} from 'vite'
import vue from '@vitejs/plugin-vue'

const env = loadEnv('mode', process.cwd(), '');

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    'process.env': env
  },
  plugins: [vue()],
})


