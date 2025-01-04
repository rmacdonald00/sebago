<script lang="ts">
	import SebagoInfoDisplay from '$lib/components/item-display/SebagoInfoDisplay.svelte';
	import Copyright from '$lib/components/structure/Copyright.svelte';
	import PageFooter from '$lib/components/structure/Copyright.svelte';
	import PageHeader from '$lib/components/structure/PageHeader.svelte';
	import '../styles/display.css';
	import '../styles/text.css';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<link
		rel="stylesheet"
		href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
	/>
</svelte:head>
<div class="container">
	<div class={'vertical-stack content'}>
		<PageHeader />
		<div class={'slot-content'}>
			<slot />
		</div>
		<span class="copyright">
			<Copyright SebagoDetails={data.SebagoDetails} />
		</span>
	</div>
	<div class="sidebar">
		<SebagoInfoDisplay SebagoDetails={data.SebagoDetails} />
	</div>
</div>

<style>
	.slot-content {
		padding: 1rem;
		flex: 2;
		box-sizing: border-box;
	}
	.container {
		display: flex;
		height: 100vh; /* Full viewport height */
		overflow: hidden; /* Prevent scrolling of the container */
	}

	.sidebar {
		width: 250px; /* Fixed width for the sidebar */
		flex-shrink: 0; /* Prevent shrinking */
		overflow: hidden; /* Prevent scrolling inside */
	}

	.content {
		flex: 1; /* Take the remaining space */
		overflow-y: auto; /* Scrollable content */
		background-color: var(--tan);
	}

	/* Big Screen */
	@media only screen and (min-width: 35rem) {
		.copyright {
			display: none;
		}
	}

	/* Small Screen */
	@media only screen and (max-width: 35rem) {
		.sidebar {
			display: none;
		}
	}
</style>
