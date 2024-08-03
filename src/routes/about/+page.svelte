<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<h1>About Us</h1>
{#each data.AboutSebagoSections as sectionText}
	<p class={'section'}>{sectionText}</p>
{/each}

<style>
	.section {
		margin: 0.5rem 0;
	}
</style>
