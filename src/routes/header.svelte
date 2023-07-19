<script lang="ts">
	import { page } from '$app/stores';
	import * as config from '$lib/config';
	import { signIn, signOut } from '@auth/sveltekit/client';
	import 'iconify-icon';
</script>

<header>
	<nav>
		<a href="/" class="title">{config.title}</a>

		<ul class="links">
			{#if $page.data.session}
				<li>
					<button on:click={() => signOut()} class="button logged-in">Sign out</button>
				</li>
			{:else}
				<li>
					<button on:click={() => signIn('facebook')} class="button logged-out">
						<iconify-icon icon="ri:facebook-fill" /> Sign In with Facebook</button
					>
				</li>
			{/if}
		</ul>
	</nav>
</header>

<style lang="scss">
	@import 'open-props/gray-hsl';
	@import 'open-props/colors-hsl';

	header {
		position: fixed;
		top: 0;
		width: 100%;
		z-index: 10;
		background-color: hsl(var(--gray-9-hsl) / 90%);

		.title {
			color: white;
			font-size: var(--size-5);
			text-decoration: none;
			font-weight: var(--font-weight-3);

			@media (max-width: 767px) {
				font-size: var(--size--3);
			}
		}

		nav {
			padding-block: var(--size-7);
			padding-inline: var(--size-7);
			display: flex;
			align-items: center;
			justify-content: space-between;
			gap: var(--size-5);

			ul {
				list-style: none;
				padding: 0;
				margin: 0;
			}

			button {
				background-color: var(--yellow-5);
				border: 2px solid white;
				border-radius: var(--radius-2);
				text-shadow: none;
				color: #fff;
				font-size: var(--font-size-1);

				&.logged-out {
					background-color: #4267b2;
					border: 0;
				}
			}
		}
	}
</style>
