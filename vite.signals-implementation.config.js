import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    root: 'workspace-entries/signals-implementation',
    publicDir: 'public',
    build: {
        outDir: '../../dist/signals-implementation'
    },
    server: {
        port: 5274
    }
})

