<script lang="ts">
	import CabinDisplay from '$lib/components/CabinDisplay.svelte';
	import { CabinInfo, RentalTerms, SebagoDetails } from '$lib/data/WebsiteContent';

	const cabinDescriptions = CabinInfo.sort((a, b) => {
		return a.number - b.number;
	});
</script>

<h1>Cabins & Rates</h1>

<span
	>{RentalTerms.bookingTermsDescription}
</span>
<p>Check-In Time: {RentalTerms.checkInTime}</p>
<p>Check-Out Time: {RentalTerms.checkOutTime}</p>
<ol>
	{#each cabinDescriptions as cabin}
		<CabinDisplay {cabin} />
	{/each}
</ol>
