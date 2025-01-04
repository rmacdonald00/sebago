<script lang="ts">
	import ImageGallery from '$lib/components/image-display/ImageGallery.svelte';
	import { WebsiteImagesConfig } from '$lib/data/WebsiteImages';
</script>

<h1>Gallery</h1>
<ImageGallery images={WebsiteImagesConfig.GalleryImages} />
