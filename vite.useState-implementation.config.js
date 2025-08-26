import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(
        // {
        //     babel: {
        //         plugins: ['babel-plugin-react-compiler']
        //     }
        // }
    )],
    root: 'workspace-entries/useState-implementation',
    publicDir: 'public',
    build: {
        outDir: '../../dist/useState-implementation'
    },
    server: {
        port: 5273
    }
})
