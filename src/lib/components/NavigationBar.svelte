<script lang="ts">
	let isExpanded = false;

	const toggleVerticalNav = () => {
		isExpanded = !isExpanded;
	};

	const navigationRoutes: { href: string; title: string }[] = [
		{ href: '/', title: 'Home' },
		{ href: '/about', title: 'About' },
		{ href: '/cabins-and-rates', title: 'Cabins & Rates' },
		{ href: '/gallery', title: 'Gallery' },
		{ href: '/contact-us', title: 'Contact Us' }
	];
</script>

<div class={'nav-bar-horizontal'}>
	{#each navigationRoutes as route}
		<a href={route.href}>{route.title}</a>
	{/each}
</div>

<div class={'nav-bar-vertical'}>
	<button on:click={toggleVerticalNav}>
		<span class="material-symbols-outlined"> menu </span></button
	>
	{#if isExpanded}
		<div class="vertical-nav-bar">
			<button on:click={toggleVerticalNav}>
				<span class="material-symbols-outlined"> close </span></button
			>
			{#each navigationRoutes as route}
				<a href={route.href} on:click={toggleVerticalNav}>{route.title}</a>
			{/each}
		</div>
	{/if}
</div>

<style>
	button {
		background-color: var(--sebago-red);
		color: var(--white);
		height: 100%;
		border: none;
	}
	button .material-symbols-outlined {
		font-size: 2rem;
	}
	@media only screen and (max-width: 30rem) {
		.nav-bar-horizontal,
		.nav-bar-horizontal a {
			display: none;
		}
	}
	@media only screen and (min-width: 30rem) {
		.nav-bar-vertical {
			display: none;
		}
	}
	.vertical-nav-bar {
		background-color: var(--sebago-red);
		color: var(--white);
		position: fixed;
		top: 0;
		right: 0;
		/* height: 100%; */
		width: 50%;
		z-index: 10;
		display: grid;
	}

	.vertical-nav-bar a {
		color: var(--white);
		height: 3rem;
		align-items: center;
	}
	.nav-bar-horizontal {
		display: flex;
		flex-direction: row;
		white-space: nowrap;
		flex: 2;
		justify-content: center;
		font-size: larger;
		column-gap: 2vw;
	}
	a {
		color: black;
	}
</style>
