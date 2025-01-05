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
				<span class={'nav-list'}> <NavigationList orientation={'horizontal'} /></span>
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
		<span class={'openable-sidebar'}>
			<OpenableSidebar>
				<span class={'nav-list'}> <NavigationList orientation={'vertical'} /></span>
				<SebagoInfoDisplay SebagoDetails={data.SebagoDetails} />
				<span class="copyright">
					<Copyright SebagoDetails={data.SebagoDetails} />
				</span>
			</OpenableSidebar>
		</span>
		<span class={'static-sidebar'}>
			<SebagoInfoDisplay SebagoDetails={data.SebagoDetails} />
		</span>
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
		.openable-sidebar {
			display: none;
		}

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

		.sidebar .nav-list,
		.sidebar .copyright {
			display: none;
		}
	}

	/* Small Screen */
	@media only screen and (max-width: 35rem) {
		.page-header > .nav-list {
			display: none;
		}

		.sidebar {
			position: fixed;
			top: 0;
			right: 0;
			z-index: 20;
		}

		.static-sidebar {
			display: none;
		}
	}
</style>
