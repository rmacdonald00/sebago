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
		<button class={'close-button'} on:click={closeLightbox}>Close</button>
		<div class="zoomed-display">
			<button
				class={'navigation-button'}
				disabled={zoomedImageIndex <= 0}
				on:click={() => {
					zoomedImageIndex--;
				}}>Back</button
			>
			<div class={'image-column'}>
				<span>{images[zoomedImageIndex].title}</span>
				<img
					class={'image'}
					src={images[zoomedImageIndex].pathToImage}
					alt={images[zoomedImageIndex].altText}
				/>
			</div>
			<button
				class={'navigation-button'}
				disabled={zoomedImageIndex >= images.length - 1}
				on:click={() => {
					zoomedImageIndex++;
				}}>Next</button
			>
		</div>
	</div>{/if}

<style>
	.lightbox {
		background-color: rgba(0, 0, 0, 0.8);
		position: fixed;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		z-index: 10;
		overflow-y: scroll;
		overflow-x: hidden;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.close-button {
		position: absolute;
		top: 0;
		right: 0;
	}

	.navigation-button {
		background-color: transparent;
		border: none;
		padding: 0;
		height: 100%;
		width: 100%;
		flex: 1;
	}

	.zoomed-display {
		width: 100%;
		height: 85%;
		display: flex;
	}

	.zoomed-display .image {
		max-width: 100%;
		max-height: 100%;
		object-fit: contain;
		flex: 3;
	}

	.image-column {
		flex: 2;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
	}
</style>
