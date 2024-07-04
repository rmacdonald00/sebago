<script lang="ts">
	import ImageGallery from '$lib/components/ImageGallery.svelte';
	import { GalleryImages } from '$lib/data/WebsiteContent';
</script>

<h1>Gallery</h1>
<ImageGallery images={GalleryImages} />
