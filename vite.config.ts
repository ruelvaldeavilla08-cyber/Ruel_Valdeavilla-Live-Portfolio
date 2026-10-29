import { defineConfig, type PluginOption } from 'vite';
import react from '@vitejs/plugin-react';
import { viteSingleFile } from 'vite-plugin-singlefile';

// SINGLE=1 inlines everything into one HTML file (handy for previews).
const plugins: PluginOption[] = [react()];
if (process.env.SINGLE === '1') plugins.push(viteSingleFile());

export default defineConfig({ plugins });
