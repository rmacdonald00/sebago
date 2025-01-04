<script lang="ts">
	import ImageAndContentRow from '$lib/components/helpers/ImageAndContentRow.svelte';
	import { WebsiteImagesConfig } from '$lib/data/WebsiteImages';
	import type { PageData } from './$types';
	export let data: PageData;
	const mailtoLink = encodeURI(
		`mailto:${data.SebagoDetails.email}?subject=${data.SebagoDetails.emailContentDefaults?.subject ?? ''}&body=${data.SebagoDetails.emailContentDefaults?.body ?? ''}`
	);
</script>

<h1>Contact Us</h1>
<ImageAndContentRow image={WebsiteImagesConfig.ContactUs} imageSide={'right'}>
	<div>
		Call us at {data.SebagoDetails.phoneNumber} or
		<a href={mailtoLink} class={'mailto-button'}>Email us at {data.SebagoDetails.email}</a>
	</div>
</ImageAndContentRow>

<style>
	.mailto-button {
		background-color: var(--dark-tan);
		color: black;
		padding: 2rem;
		display: inline-block;
	}
</style>
