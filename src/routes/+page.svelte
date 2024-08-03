<script lang="ts">
	import ImageAndContentRow from '$lib/components/ImageAndContentRow.svelte';
	import ListDisplay from '$lib/components/ListDisplay.svelte';
	import {
		AmenitiesList,
		ReasonsToStayHere,
		ThingsToNote,
		WebsiteImagesConfig
	} from '$lib/data/WebsiteContent';
</script>

<h1>Welcome!</h1>
<ImageAndContentRow image={WebsiteImagesConfig.Welcome} imageSide={'right'}>
	<div>
		Sebago Resort is located in Nisswa, Minnesota on the north side of Round Lake, part of the Gull
		Lake Chain in north-central Minnesota. Built in 1926 we have sought to keep Sebago simple and
		affordable and as timeless as possible. We have 6 cottages available for weekly rentals. Our
		motto a “time and a place” has meant a week of togetherness, fun and relaxation.
	</div>
</ImageAndContentRow>
<br />

<ImageAndContentRow image={WebsiteImagesConfig.Amenities} imageSide={'left'}>
	<ListDisplay title={'Amenities'} items={AmenitiesList} />
</ImageAndContentRow>
<br />

<ImageAndContentRow image={WebsiteImagesConfig.ReasonsToStay} imageSide={'right'}>
	<ListDisplay title={'Reasons to Stay Here'} items={ReasonsToStayHere} />
</ImageAndContentRow>
<br />
<ImageAndContentRow image={WebsiteImagesConfig.ThingsToNote} imageSide={'left'}>
	<ListDisplay title={'Things to Note'} items={ThingsToNote} />
</ImageAndContentRow>
