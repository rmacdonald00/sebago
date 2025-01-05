<script lang="ts">
	export let orientation: 'horizontal' | 'vertical';
	export let textColor: 'dark' | 'light';

	const navigationRoutes: { href: string; title: string }[] = [
		{ href: '/', title: 'Home' },
		{ href: '/about', title: 'About' },
		{ href: '/cabins-and-rates', title: 'Cabins & Rates' },
		{ href: '/gallery', title: 'Gallery' }
	];
</script>

<div class={`nav-list ${orientation} ${textColor}`}>
	{#each navigationRoutes as route}
		<a href={route.href}>{route.title}</a>
	{/each}
</div>

<style>
	.nav-list {
		display: flex;
		gap: 2vw;
	}

	.nav-list.light a {
		color: var(--white);
	}

	.nav-list.dark a {
		color: black;
	}

	.light-text {
		color: var(--white);
	}

	.horizontal {
		flex-direction: row;
	}

	.vertical {
		flex-direction: column;
	}
</style>
