<script lang="ts">
	import { getContext } from 'svelte';
	let isExpanded = false;

	const SetCanScrollMainContent: (value: boolean) => void = getContext('SetCanScrollMainContent'); // Get the function from context

	const toggleVerticalNav = () => {
		isExpanded = !isExpanded;
		SetCanScrollMainContent(!isExpanded);
	};
</script>

<div class={'horizontal-nav'}>
	<slot />
</div>

<div class={'vertical-nav'}>
	<button on:click={toggleVerticalNav}>
		<span class="material-symbols-outlined"> menu </span></button
	>
	{#if isExpanded}
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div class="background-overlay" on:click={toggleVerticalNav}></div>
		<div class="expanded-nav-box">
			<button on:click={toggleVerticalNav} class="close-button">
				<span class="material-symbols-outlined"> close </span></button
			>
			<slot />
		</div>
	{/if}
</div>

<style>
	button {
		background-color: transparent;
		color: var(--sebago-red);
		height: 100%;
		border: none;
	}
	.vertical-nav > button .material-symbols-outlined {
		font-size: 3rem;
		padding: 0.3rem 0.1rem;
	}
	.close-button {
		display: flex;
		justify-content: end;
		align-items: center;
		color: var(--white);
		margin-bottom: 0.5rem;
		height: 3rem;
	}

	.close-button .material-symbols-outlined {
		font-size: 2rem;
	}
	@media only screen and (max-width: 35rem) {
		.horizontal-nav {
			display: none;
		}
	}
	@media only screen and (min-width: 35rem) {
		.vertical-nav {
			display: none;
		}
	}

	.background-overlay {
		background-color: rgba(0, 0, 0, 0.43);
		z-index: 5;
		position: fixed;
		top: 0;
		right: 0;
		height: 100vh;
		width: 100vw;
	}
	.expanded-nav-box {
		background-color: var(--sebago-red);
		color: var(--white);
		position: fixed;
		top: 0;
		right: 0;
		text-align: right;
		font-size: larger;
		width: 50%;
		height: 100%;
		z-index: 10;
		display: flex;
		flex-direction: column;
	}

	.horizontal-nav {
		height: 100%;
	}
</style>
