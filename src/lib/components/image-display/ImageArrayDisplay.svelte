<script lang="ts">
	import type { ImageInfo } from '$lib/models/ImageInfo';

	export let images: ImageInfo[];
	export let focusedImageIndex: number = 0;
	export let size: 'full-screen' | 'inline' = 'inline';
	export let theme: 'light' | 'dark' = 'light';
</script>

<div class="zoomed-display" class:light={theme === 'light'} class:dark={theme === 'dark'}>
	<div class={'image-column'}>
		<img
			class={'image'}
			src={images[focusedImageIndex].pathToImage}
			alt={images[focusedImageIndex].altText}
		/>
		<div class={`info-bar ${size}`}>
			<span>{focusedImageIndex + 1} of {images.length}</span>
			<span>{images[focusedImageIndex].title}</span>
		</div>
	</div>
	<div class={'navigation'}>
		<button
			class={'navigation-button left-align'}
			disabled={focusedImageIndex <= 0}
			on:click={() => {
				focusedImageIndex--;
			}}><span class="material-symbols-outlined"> chevron_backward </span></button
		>
		<button
			class={'navigation-button right-align'}
			disabled={focusedImageIndex >= images.length - 1}
			on:click={() => {
				focusedImageIndex++;
			}}><span class="material-symbols-outlined"> chevron_forward </span></button
		>
	</div>
</div>

<style>
	.info-bar.full-screen {
		font-size: 2rem;
	}

	.info-bar.inline {
		font-size: 1rem;
	}

	.navigation-button {
		background-color: transparent;
		border: none;
		padding: 0;
		height: 100%;
		width: 100%;
		opacity: 55%;
	}

	.light .navigation *,
	.light .image-column * {
		color: var(--white);
	}

	.dark .navigation * {
		color: var(--dark-tan);
	}
	.material-symbols-outlined {
		font-size: 5rem;
	}

	.info-bar {
		display: flex;
		width: 100%;
		justify-content: space-around;
		margin-bottom: 0.5rem;
	}

	.navigation-button:hover {
		opacity: 100%;
	}

	.navigation-button:disabled {
		opacity: 0%;
	}

	.zoomed-display {
		width: 100%;
		position: relative;
		height: 100%;
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
		margin: 0.3rem;
		object-fit: contain;
		flex: 1;
	}

	.image-column {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100%;
		row-gap: 0.2rem;
	}
</style>
