<script lang="ts">
	import { AboutSebagoSections } from '$lib/data/WebsiteContent';
</script>

<h1>About Us</h1>
{#each AboutSebagoSections as sectionText}
	<p class={'section'}>{sectionText}</p>
{/each}

<style>
	.section {
		margin: 0.5rem 0;
	}
</style>
