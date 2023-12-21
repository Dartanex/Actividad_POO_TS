//vite.config.js
import {resolve} from 'path';
import {defineConfig} from 'vite'
export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                ejercicioUno: resolve(__dirname, 'ejercicio_uno/index.html'),
                ejerciciodos: resolve(__dirname, 'ejercicio_dos/index.html'),
                ejercicioTres: resolve(__dirname, 'ejercicio_tres/index.html'),
                ejercicioCuatro: resolve(__dirname, 'ejercicio_cuatro/index.html'),
                ejercicioCinco: resolve(__dirname, 'ejercicio_cinco/index.html'),
            }
        }
    }
})