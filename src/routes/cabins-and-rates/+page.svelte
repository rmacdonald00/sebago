<script lang="ts">
	import CabinDisplay from '$lib/components/CabinDisplay.svelte';
	import { CabinInfo, SebagoDetails } from '$lib/data/WebsiteContent';

	const cabinDescriptions = CabinInfo.sort((a, b) => {
		return a.number - b.number;
	});
</script>

<h1>Cabins & Rates</h1>

<span
	>We do not book on-line. You may email us or call us to check our availability. We
	will only finalize bookings by phone. Please note that we prefer weekly rentals, Saturday to
	Saturday but will rent per day with a 3 day minimum when available. Prices do not include the
	6.875% MN tax. Please call {SebagoDetails.phoneNumber} for more information.
</span>
<ol>
	{#each cabinDescriptions as cabin}
		<CabinDisplay {cabin} />
	{/each}
</ol>
