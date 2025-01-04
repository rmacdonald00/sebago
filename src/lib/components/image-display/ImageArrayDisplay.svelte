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
	/* Info Bar for Full Screen vs Inline Sizes */
	.info-bar.full-screen {
		font-size: 2rem;
	}

	.info-bar.inline {
		font-size: 1rem;
	}

	/* General Button Styles */
	.navigation-button {
		background-color: transparent;
		border: none;
		/* padding: 1rem; Ensuring buttons are large enough to click/touch */
		height: 100%;
		width: 100%;
		opacity: 55%;
		display: flex;
		align-items: center;
		justify-content: center;
		/* font-size: 2rem; */
		cursor: pointer;
	}

	.light .navigation *,
	.light .image-column * {
		color: var(--white);
	}

	.dark .navigation *,
	.dark .image-column * {
		color: var(--dark-tan);
	}

	/* Material icons */
	.material-symbols-outlined {
		font-size: 3rem; /* Adjust size for better accessibility */
	}

	/* Info bar layout */
	.info-bar {
		display: flex;
		justify-content: space-between;
		width: 100%;
		margin-bottom: 0.5rem;
		/* padding: 1rem; */
		background: rgba(0, 0, 0, 0.5); /* Slight dark background to make text stand out */
	}

	/* Navigation buttons on hover */
	.navigation-button:hover {
		opacity: 100%;
	}

	/* Disabled navigation buttons */
	.navigation-button:disabled {
		opacity: 0%;
	}

	/* Container holding the image */
	.zoomed-display {
		width: 100%;
		position: relative;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		overflow: hidden; /* Prevents image from overflowing */
	}

	/* Navigation at the bottom */
	.navigation {
		position: absolute;
		bottom: 0;
		display: grid;
		grid-template-columns: 1fr 1fr;
		width: 100%;
		/* height: 5rem; */
	}

	/* Image styling to prevent overflow */
	.zoomed-display .image {
		max-width: 90%; /* Ensures image width stays within the container */
		max-height: 90%; /* Ensures image height stays within the container */
		object-fit: contain; /* Ensures the image is scaled to fit within the container without distortion */
		object-position: center; /* Centers the image inside the container */
		margin: 0.3rem;
	} /* Image column and layout */
	.image-column {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		row-gap: 0.2rem;
	}

	/* Make sure the gallery doesn't break on small screens */
	@media (max-width: 600px) {
		.material-symbols-outlined {
			font-size: 2.5rem; /* Reduce icon size for smaller screens */
		}
	}
</style>
