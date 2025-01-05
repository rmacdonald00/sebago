import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
    input: 'src/app.html', // Your entry file
    output: {
        file: 'dist/bundle.js',
        format: 'esm', // Output format: esm, cjs, iife, etc.
    },
    plugins: [
        resolve(), // Resolves dependencies in node_modules
        commonjs() // Converts CommonJS to ESM for compatibility
    ],
    external: id => {
        // Include your specific dependency and exclude others
        return !id.startsWith('leaflet');
    }
};
