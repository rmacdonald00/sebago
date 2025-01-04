<script lang="ts">
	import type { ImageInfo } from '$lib/models/ImageInfo';
	import { getContext } from 'svelte';
	import ImageArrayDisplay from './ImageArrayDisplay.svelte';
	import ImageDisplay from './ImageDisplay.svelte';

	export let images: ImageInfo[];
	let lightboxOpen: boolean = false;
	let zoomedImageIndex: number = 0;
	const SetCanScrollMainContent: (value: boolean) => void = getContext('SetCanScrollMainContent'); // Get the function from context

	const openLightBox = (index: number) => {
		zoomedImageIndex = index;
		SetCanScrollMainContent(false);
		lightboxOpen = true;
	};

	const closeLightbox = () => {
		lightboxOpen = false;
		SetCanScrollMainContent(true);
	};

	const closeIfEscPressed = (keyEvent: KeyboardEvent) => {
		if (keyEvent.key === 'Escape') closeLightbox();
	};
</script>

<svelte:window on:keyup={closeIfEscPressed} />
<div class={'gallery'}>
	{#each images as image, index}
		<ImageDisplay aspectRatio={'square'} imageInfo={image} onClick={() => openLightBox(index)} />
	{/each}
</div>

{#if lightboxOpen}
	<div class={'lightbox'}>
		<button class={'close-button'} on:click={closeLightbox}>Close</button>
		<ImageArrayDisplay
			{images}
			focusedImageIndex={zoomedImageIndex}
			size={'full-screen'}
			theme="light"
		/>
	</div>{/if}

<style>
	.lightbox {
		background-color: rgba(0, 0, 0, 0.8);
		color: white;
		position: fixed;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		z-index: 10;
		display: grid;
		grid-template-rows: max(2rem, 5%) auto;
	}

	.close-button {
		background-color: transparent;
		border: none;
		padding: 0;
		color: var(--white);
		font-family: 'Text-Font';
	}

	.close-button:hover {
		background-color: rgba(255, 255, 255, 0.2);
	}

	.gallery {
		display: grid;
		column-gap: 1rem;
		row-gap: 2rem;
		grid-template-columns: repeat(auto-fit, minmax(20rem, auto));
		grid-template-rows: repeat(auto-fit, minmax(20rem, auto));
	}
</style>
