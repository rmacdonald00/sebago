<script lang="ts">
	import type { CabinDetails } from "$lib/models/CabinDetails";

export let cabin: CabinDetails;
</script>

<h2>Cabin {cabin.number}</h2>
<p>Sleeps {cabin.sleepsCount}</p>
<p>{cabin.description}</p>