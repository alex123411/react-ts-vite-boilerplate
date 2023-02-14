import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import path from 'node:path'

export default defineConfig({
  resolve: {
    alias: {
      // '@public': path.resolve(__dirname, './public'),
      // '@assets': path.resolve(__dirname, './src/assets'),
      // '@services': path.relative(__dirname, './src/services'),
      // '@models': path.relative(__dirname, './src/models')
    }
  },

  plugins: [react()],

  server: {
    port: 8080,
    cors: true
  },
  
  css: {
    modules: {
      scopeBehaviour: 'local',
      localsConvention: 'camelCase'
    },
    preprocessorOptions: {
      scss: {
        // additionalData: `@import "./src/scss/colors.scss";`
      }
    }
  }
})
