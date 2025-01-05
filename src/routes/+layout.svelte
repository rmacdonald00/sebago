<script lang="ts">
	import SebagoInfoDisplay from '$lib/components/item-display/SebagoInfoDisplay.svelte';
	import Copyright from '$lib/components/structure/Copyright.svelte';
	import PageHeader from '$lib/components/structure/PageHeader.svelte';
	import { setContext } from 'svelte';
	import '../styles/display.css';
	import '../styles/text.css';
	import type { PageData } from './$types';
	import NavigationBar from '$lib/components/structure/NavigationBar.svelte';

	export let data: PageData;

	const setCanScrollMainContent = (value: boolean) => {
		// Maybe this can be cleaned up somehow
		const contentElement = document.getElementById('scrollable-content');
		if (contentElement) {
			contentElement.style.overflowY = value ? 'auto' : 'hidden';
		}
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
		<span class={'header'}>
			<div class={'page-header'}>
				<span class="header-title">SEBAGO</span>
				<NavigationBar SebagoDetails={data.SebagoDetails} />
			</div>
		</span>
		<div class="content" id="scrollable-content">
			<div class={'slot-content'}>
				<slot />
			</div>
			<span class="copyright">
				<Copyright SebagoDetails={data.SebagoDetails} />
			</span>
		</div>
	</div>
	<div class="sidebar">
		<SebagoInfoDisplay SebagoDetails={data.SebagoDetails} />
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
		justify-content: center;
		align-items: center;
		border-bottom: 2px var(--sebago-red) solid;
		width: 100%;
		box-sizing: border-box;
	}
	.slot-content {
		padding: 1rem;
		flex: 2;
		box-sizing: border-box;
	}

	.content {
		flex: 1; /* Take the remaining space */
		overflow-y: auto; /* Scrollable content */
		background-color: var(--tan);
	}

	.header {
		position: sticky;
		top: 0;
		z-index: 5;
	}
	.container {
		height: 100vh; /* Full viewport height */
	}

	/* Big Screen */
	@media only screen and (min-width: 35rem) {
		.copyright {
			display: none;
		}

		.container {
			display: flex;
			overflow: hidden; /* Prevent scrolling of the container */
		}

		.sidebar {
			width: 250px; /* Fixed width for the sidebar */
			flex-shrink: 0; /* Prevent shrinking */
			overflow: hidden; /* Prevent scrolling inside */
		}
	}

	/* Small Screen */
	@media only screen and (max-width: 35rem) {
		.sidebar {
			display: none;
		}
	}
</style>
