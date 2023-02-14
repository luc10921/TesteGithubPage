import adapter from 'svelte-adapter-github';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			fallback: '200.html'
		}),
		paths:{
			base: '/TesteGithubPage'
		}
	}
};

export default config;
