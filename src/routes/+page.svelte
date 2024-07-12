<script>
	import ListDisplay from '$lib/components/ListDisplay.svelte';
	import { AmenitiesList, ReasonsToStayHere, ThingsToNote } from '$lib/data/WebsiteContent';
	import '../styles/text.css';
</script>

<span>Welcome to</span>
<h1 class={'title prominent-font'}>Sebago Resort</h1>
<span>on Round Lake</span>
<br />
<img src="./store-front.webp" alt="Outside of the Candy Store." class={'image'} />
<img src="./dock.webp" alt="Outside of the Candy Store." class={'image'} />

<div>
	Sebago Resort is located in Nisswa, Minnesota on the north side of Round Lake, part of the Gull
	Lake Chain in north-central Minnesota. Built in 1926 we have sought to keep Sebago simple and
	affordable and as timeless as possible. We have 6 cottages available for weekly rentals.* Our
	motto a “time and a place” has meant a week of togetherness, fun and relaxation.
</div>
<span> * when available cabins may be rented for a 3 night minimum</span>

<ListDisplay title={'Amenities'} items={AmenitiesList} />
<ListDisplay title={'Reasons to Stay Here'} items={ReasonsToStayHere} />
<ListDisplay title={'Things to Note'} items={ThingsToNote} />

<style>
	.title {
		color: var(--sebago-red);
	}

	.image {
		width: 200px;
	}
</style>
