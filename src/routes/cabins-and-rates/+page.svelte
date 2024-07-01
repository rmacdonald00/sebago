<script lang="ts">
	import CabinDisplay from "$lib/components/CabinDisplay.svelte";
	import { CabinInfo } from "$lib/data/WebsiteContent";

    const cabinDescriptions = CabinInfo.sort((a,b) => {return a.number - b.number});
</script>
<h1>Cabins & Rates</h1>
<ol>
{#each cabinDescriptions as cabin }
<CabinDisplay cabin={cabin}/>
{/each}
</ol>