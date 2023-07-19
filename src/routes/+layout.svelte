<script lang="ts">
	import Footer from './footer.svelte';
	import Header from './header.svelte';

	import 'open-props/buttons';
	import 'open-props/colors-hsl';
	import 'open-props/gray-hsl';
	import 'open-props/normalize';
	import 'open-props/style';

	import '../app.scss';
</script>

<div class="layout">
	<Header />
	<main>
		<slot />
	</main>
	<Footer />
</div>

<style global lang="scss">
	:root {
		--brand: var(--gray-3);

		--text-1: var(--text-1-light);
		--text-2: var(--text-2-light);

		--surface-1: var(--surface-1-light);
		--surface-2: var(--surface-2-light);
		--surface-3: var(--surface-3-light);
		--surface-4: var(--surface-4-light);

		@media (prefers-color-scheme: dark) {
			& {
				--brand: var(--brand-dark);

				--text-1: var(--text-1-dark);
				--text-2: var(--text-2-dark);

				--surface-1: var(--surface-1-dark);
				--surface-2: var(--surface-2-dark);
				--surface-3: var(--surface-3-dark);
				--surface-4: var(--surface-4-dark);
			}
		}
	}
</style>
