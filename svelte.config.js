import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Preprocessing voor Svelte bestanden
	preprocess: vitePreprocess(),

	kit: {
		alias: {
			$components: 'src/components',
			$lib: 'src/lib'
		},
		// Gebruik adapter-static voor statische site hosting via FTP
		adapter: adapter({
			pages: 'build', // Output map
			assets: 'build', // Assets output map
			fallback: 'index.html' // Voor SPA-routing (optioneel)
		}),
		paths: {
			base: "" // Laat leeg voor root hosting
		}
	}
};

export default config;
