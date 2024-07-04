<script lang="ts">
	import type { ImageInfo } from '$lib/models/ImageInfo';
	import ImageDisplay from './ImageDisplay.svelte';

	export let images: ImageInfo[];
	let lightboxOpen: boolean = false;
	let zoomedImageIndex: number = 0;

	const openLightBox = (index: number) => {
		console.log(index);
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

{#each images as image, index}
	<ImageDisplay imageInfo={image} onClick={() => openLightBox(index)} />
{/each}

{#if lightboxOpen}
	<div class={'lightbox'}>
		<button on:click={closeLightbox}>Close</button>
		<div>
			<button
				disabled={zoomedImageIndex <= 0}
				on:click={() => {
					zoomedImageIndex--;
				}}>Back</button
			>
			<img
				class={'image'}
				src={images[zoomedImageIndex].pathToImage}
				alt={images[zoomedImageIndex].altText}
			/>
			<button
				disabled={zoomedImageIndex >= images.length - 1}
				on:click={() => {
					zoomedImageIndex++;
				}}>Next</button
			>
		</div>
		<span>{images[zoomedImageIndex].title}</span>
	</div>{/if}

<style>
	.lightbox {
		background-color: rgba(0, 0, 0, 0.5);
		position: fixed;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		z-index: 10;
		overflow-y: scroll;
		overflow-x: hidden;
	}
</style>
