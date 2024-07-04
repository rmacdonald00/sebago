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
		<div class="zoomed-display">
			<div class={'image-column'}>
				<span class={'image-title'}>{images[zoomedImageIndex].title}</span>
				<img
					class={'image'}
					src={images[zoomedImageIndex].pathToImage}
					alt={images[zoomedImageIndex].altText}
				/>
			</div>
			<div class={'navigation'}>
				<button
					class={'navigation-button'}
					disabled={zoomedImageIndex <= 0}
					on:click={() => {
						zoomedImageIndex--;
					}}>Back</button
				>
				<button
					class={'navigation-button'}
					disabled={zoomedImageIndex >= images.length - 1}
					on:click={() => {
						zoomedImageIndex++;
					}}>Next</button
				>
			</div>
		</div>
		<button class={'close-button'} on:click={closeLightbox}>Close</button>
	</div>{/if}

<style>
	.image-title {
		color: var(--white);
		font-size: 3rem;
	}
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

	.navigation-button {
		background-color: transparent;
		border: none;
		padding: 0;
		height: 100%;
		width: 100%;
		color: var(--white);
	}

	.zoomed-display {
		width: 100%;
		position: relative;
	}

	.navigation {
		position: absolute;
		bottom: 0;
		height: 100%;
		width: 100%;
		display: grid;
		grid-template-columns: 1fr 1fr;
	}

	.zoomed-display .image {
		max-width: 100%;
		max-height: 100%;
		object-fit: contain;
		flex: 1;
	}

	.image-column {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100%;
	}
</style>
