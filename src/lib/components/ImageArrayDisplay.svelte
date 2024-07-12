<script lang="ts">
	import type { ImageInfo } from '$lib/models/ImageInfo';

	export let images: ImageInfo[];
	export let focusedImageIndex: number = 0;
	export let size: 'full-screen' | 'inline' = 'inline';
</script>

<div class="zoomed-display">
	<div class={'image-column'}>
		<span class={`image-title ${size}`}>{images[focusedImageIndex].title}</span>
		<img
			class={'image'}
			src={images[focusedImageIndex].pathToImage}
			alt={images[focusedImageIndex].altText}
		/>
	</div>
	<div class={'navigation'}>
		<button
			class={'navigation-button'}
			disabled={focusedImageIndex <= 0}
			on:click={() => {
				focusedImageIndex--;
			}}>Back</button
		>
		<button
			class={'navigation-button'}
			disabled={focusedImageIndex >= images.length - 1}
			on:click={() => {
				focusedImageIndex++;
			}}>Next</button
		>
	</div>
</div>

<style>
	.image-title {
		color: var(--white);
	}

	.image-title.full-screen {
		font-size: 3rem;
	}

	.image-title.inline {
		font-size: 1rem;
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
