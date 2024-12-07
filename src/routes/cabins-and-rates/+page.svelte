<script lang="ts">
	import CabinDisplay from '$lib/components/CabinDisplay.svelte';
	import type { PageData } from './$types';
	export let data: PageData;

	const cabinDescriptions = data.CabinInfo.sort((a, b) => {
		return a.number - b.number;
	});
</script>

<h1>Cabins & Rates</h1>

<span>{data.RentalTerms.bookingTermsDescription} </span>
<p>Check-In Time: {data.RentalTerms.checkInTime}</p>
<p>Check-Out Time: {data.RentalTerms.checkOutTime}</p>
<ol>
	{#each cabinDescriptions as cabin}
		<CabinDisplay {cabin} SebagoDetails={data.SebagoDetails} />
	{/each}
</ol>

<style>
	ol {
		padding: 0;
	}
</style>
