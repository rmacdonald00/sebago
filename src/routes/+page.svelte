<script lang="ts">
	import ImageAndContentRow from '$lib/components/ImageAndContentRow.svelte';
	import ListDisplay from '$lib/components/ListDisplay.svelte';
	import { WebsiteImagesConfig } from '$lib/data/WebsiteImages';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<h1>Welcome!</h1>
<ImageAndContentRow image={WebsiteImagesConfig.Welcome} imageSide={'right'}>
	<span>{data.WelcomeParagraph}</span>
</ImageAndContentRow>

{#each data.HomePageRows as row, index}
	<br />
	<ImageAndContentRow
		image={WebsiteImagesConfig.HomePageRow[index % WebsiteImagesConfig.HomePageRow.length]}
		imageSide={index % 2 === 0 ? 'left' : 'right'}
	>
		<ListDisplay title={row.title} items={row.items} />
	</ImageAndContentRow>
{/each}
