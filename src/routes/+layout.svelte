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
		const mobileScrollableContent = document.getElementById('vertical-content-list');
		if (mobileScrollableContent) {
			mobileScrollableContent.style.overflowY = value ? 'auto' : 'hidden';
		}

		const desktopScrollableContent = document.getElementById('scrollable-slot-content');
		if (desktopScrollableContent) {
			desktopScrollableContent.style.overflowY = value ? 'auto' : 'hidden';
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

<!-- Mobile Layout -->
<div class="mobile-layout">
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
			<NavigationList orientation={'vertical'} />
			<SebagoInfoDisplay SebagoDetails={data.SebagoDetails} />
		</OpenableSidebar>
	</div>
</div>

<!-- Desktop Layout -->
<div class="desktop-layout">
	<div class="container">
		<div class={'vertical-stack'}>
			<div class={'page-header'}>
				<span class="header-title">SEBAGO</span>
				<NavigationList orientation={'horizontal'} />
			</div>
			<div class={'slot-content'} id="scrollable-slot-content">
				<slot />
			</div>
		</div>
		<div class="sidebar">
			<SebagoInfoDisplay SebagoDetails={data.SebagoDetails} />
			<Copyright SebagoDetails={data.SebagoDetails} />
		</div>
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

	/* Small Screen */
	@media only screen and (max-width: 35rem) {
		.desktop-layout,
		.desktop-layout * {
			display: none;
		}
		.sidebar {
			position: fixed;
			top: 0;
			right: 0;
			z-index: 20;
		}
	}

	/* Big Screen */
	@media only screen and (min-width: 35rem) {
		.mobile-layout,
		.mobile-layout * {
			display: none;
		}

		.container {
			display: flex;
			overflow: hidden; /* Prevent scrolling of the container */
		}

		.sidebar {
			width: max(250px, 30%); /* Fixed width for the sidebar */
			flex-shrink: 0; /* Prevent shrinking */
			overflow: hidden; /* Prevent scrolling inside */
			height: 100%;
			background-color: var(--sebago-red);
			padding: 1rem;
			box-sizing: border-box;
			display: flex;
			flex-direction: column;
			gap: 2rem;
			justify-content: space-between;
		}
	}
</style>
