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
		const stackElement = document.getElementById('vertical-content-list');
		if (stackElement) {
			stackElement.style.overflowY = value ? 'auto' : 'hidden';
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
<div class="container" id="vertical-content-list">
	<div class={'vertical-stack'}>
		<div class={'page-header'}>
			<span class="header-title">SEBAGO</span>
		</div>
		<div class={'slot-content'}>
			<slot />
		</div>
		<Copyright SebagoDetails={data.SebagoDetails} />
	</div>
</div>
<div class="sidebar">
	<OpenableSidebar>
		<span class={'nav-list'}> <NavigationList orientation={'vertical'} /></span>
		<SebagoInfoDisplay SebagoDetails={data.SebagoDetails} />
		<span class="copyright">
			<Copyright SebagoDetails={data.SebagoDetails} />
		</span>
	</OpenableSidebar>
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
		position: sticky;
		top: 0;
		z-index: 5;
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
	}

	.sidebar {
		position: fixed;
		top: 0;
		right: 0;
		z-index: 20;
	}
</style>
