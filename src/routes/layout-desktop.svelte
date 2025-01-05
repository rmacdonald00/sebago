<script lang="ts">
	import SebagoInfoDisplay from '$lib/components/item-display/SebagoInfoDisplay.svelte';
	import Copyright from '$lib/components/structure/Copyright.svelte';
	import { setContext } from 'svelte';
	import '../styles/display.css';
	import '../styles/text.css';
	import type { PageData } from './$types';
	import OpenableSidebar from '$lib/components/structure/OpenableSidebar.svelte';
	import NavigationList from '$lib/components/structure/NavigationList.svelte';

	export let data: PageData;

	const setCanScrollMainContent = (value: boolean) => {
		// Maybe this can be cleaned up somehow
		const contentElement = document.getElementById('scrollable-content');
		if (contentElement) {
			contentElement.style.overflowY = value ? 'auto' : 'hidden';
		}
	};

	setContext('SetCanScrollMainContent', setCanScrollMainContent);
</script>

<svelte:head>
	<link
		rel="stylesheet"
		href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
	/>
</svelte:head>
<div class="container">
	<div class={'vertical-stack'}>
		<div class={'page-header'}>
			<span class="header-title">SEBAGO</span>
			<NavigationList orientation={'horizontal'} />
		</div>
		<div class={'slot-content'} id="scrollable-content">
			<slot />
		</div>
	</div>
	<div class="sidebar">
		<SebagoInfoDisplay SebagoDetails={data.SebagoDetails} />
		<Copyright SebagoDetails={data.SebagoDetails} />
	</div>
</div>

<style>
	.header-title {
		color: var(--sebago-red);
		font-size: 4.5rem;
		font-family: 'Impact';
		margin-left: 1rem;
	}

	.page-header {
		background-color: var(--tan);
		display: flex;
		flex-wrap: wrap;
		justify-content: space-evenly;
		align-items: center;
		border-bottom: 2px var(--sebago-red) solid;
		width: 100%;
		box-sizing: border-box;
	}
	.slot-content {
		padding: 1rem;
		flex: 2;
		box-sizing: border-box;
		overflow-y: auto; /* Scrollable content */
		background-color: var(--tan);
	}

	.container {
		height: 100vh; /* Full viewport height */
		display: flex;
		overflow: hidden; /* Prevent scrolling of the container */
	}

	.sidebar {
		width: 250px; /* Fixed width for the sidebar */
		flex-shrink: 0; /* Prevent shrinking */
		overflow: hidden; /* Prevent scrolling inside */
		height: 100%;
		background-color: var(--sebago-red);
		padding: 1rem;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}
</style>
