<script lang="ts">
	import type { ImageInfo } from '$lib/models/ImageInfo';

	export let imageInfo: ImageInfo;
	export let aspectRatio: 'square' | 'original' = 'original';
	export let onClick: () => void;
</script>

<div class={'vertical-stack'}>
	<button class={'image-display'} on:click={onClick}>
		<img
			class={'image'}
			class:square={aspectRatio === 'square'}
			src={imageInfo.pathToImage}
			alt={imageInfo.altText}
		/>
	</button>
	<div class="title"><span>{imageInfo.title}</span></div>
</div>

<style>
	.image-display {
		background-color: transparent;
		border: none;
		padding: 0;
		position: relative;
		cursor: pointer;
	}

	.square {
		aspect-ratio: 1;
		object-fit: cover;
	}

	.image {
		width: 100%;
		height: 100%;
	}

	.title {
		font-size: 1.5rem;
		text-align: center;
	}
</style>
