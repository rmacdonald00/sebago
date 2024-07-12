<script lang="ts">
	import PageFooter from '$lib/components/PageFooter.svelte';
	import PageHeader from '$lib/components/PageHeader.svelte';
	import '../styles/display.css';
	import '../styles/text.css';
</script>

<svelte:head>
	<link
		rel="stylesheet"
		href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
	/>
</svelte:head>

<div class={'vertical-stack'}>
	<PageHeader />
	<div class={'slot-content'}>
		<slot />
	</div>
	<PageFooter />
</div>

<style>
	.slot-content {
		padding: 0.5rem 1rem;
	}
</style>
