<script lang="ts">
	import { CabinInfo } from "$lib/data/CabinDetails";

    const cabinDescriptions = CabinInfo.sort((a,b) => {return a.number - b.number});
</script>
<h1>Cabins & Rates</h1>
<ol>
{#each cabinDescriptions as cabin }
    <h2>Cabin {cabin.number}</h2>
    <p>Sleeps {cabin.sleepsCount}</p>
{/each}
</ol>