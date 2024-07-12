<script lang="ts">
	import type { ImageInfo } from '$lib/models/ImageInfo';

	export let image: ImageInfo;
	export let imageSide: 'left' | 'right' = 'left';
</script>

<div class={'container'} class:reverse={imageSide === 'right'}>
	<img src={image.pathToImage} alt={image.altText} class={'image'} />
	<div class={'slot-content'}>
		<slot />
	</div>
</div>

<style>
	@media only screen and (min-width: 30rem) {
		.container {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
		}

		.image {
			width: 35%;
			object-fit: contain;
			margin: 0px 1rem;
		}
		.reverse {
			flex-direction: row-reverse;
		}

		.slot-content {
			flex: 2;
		}
	}

	@media only screen and (max-width: 30rem) {
		.container {
			display: flex;
			flex-direction: column;
		}

		.image {
			height: 35%;
			object-fit: contain;
			margin: 0px 1rem;
		}
	}
</style>
