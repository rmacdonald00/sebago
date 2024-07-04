<script lang="ts">
	import type { ImageInfo } from '$lib/models/ImageInfo';

	export let imageInfo: ImageInfo;
	export let onClick: () => void;
</script>

<button class={'image-display'} on:click={onClick}>
	<div class="title"><span>{imageInfo.title}</span></div>
	<img class={'image'} src={imageInfo.pathToImage} alt={imageInfo.altText} />
</button>

<style>
	.image-display {
		background-color: transparent;
		border: none;
		padding: 0;
		position: relative;
		cursor: pointer;
	}

	.image {
		width: 100%;
		height: 100%;
	}

	.title {
		position: absolute;
		width: 100%;
		visibility: hidden;
		font-size: 2rem;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: rgba(255, 255, 255, 0.7);
	}

	.image-display:hover .title {
		visibility: visible;
	}
</style>
