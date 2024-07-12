<script lang="ts">
	import type { ImageInfo } from '$lib/models/ImageInfo';
	import ImageArrayDisplay from './ImageArrayDisplay.svelte';
	import ImageDisplay from './ImageDisplay.svelte';

	export let images: ImageInfo[];
	let lightboxOpen: boolean = false;
	let zoomedImageIndex: number = 0;

	const openLightBox = (index: number) => {
		zoomedImageIndex = index;
		document.documentElement.style.overflow = 'hidden';
		lightboxOpen = true;
	};

	const closeLightbox = () => {
		document.documentElement.style.overflow = 'scroll';
		lightboxOpen = false;
	};

	const closeIfEscPressed = (keyEvent: KeyboardEvent) => {
		if (keyEvent.key === 'Escape') closeLightbox();
	};
</script>

<svelte:window on:keyup={closeIfEscPressed} />
<div class={'gallery'}>
	{#each images as image, index}
		<ImageDisplay imageInfo={image} onClick={() => openLightBox(index)} />
	{/each}
</div>

{#if lightboxOpen}
	<div class={'lightbox'}>
		<ImageArrayDisplay {images} focusedImageIndex={zoomedImageIndex} />
		<button class={'close-button'} on:click={closeLightbox}>Close</button>
	</div>{/if}

<style>
	.lightbox {
		background-color: rgba(0, 0, 0, 0.8);
		position: fixed;
		padding-top: 1rem;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		z-index: 10;
		overflow-y: scroll;
		overflow-x: hidden;
		display: grid;
		grid-template-rows: auto max(3rem, 10%);
		row-gap: 1rem;
	}

	.close-button {
		background-color: transparent;
		border: 2px white solid;
		padding: 0;
		color: var(--white);
	}

	.gallery {
		display: grid;
		gap: 1rem;
		grid-template-columns: repeat(auto-fit, minmax(20rem, auto));
	}
</style>
