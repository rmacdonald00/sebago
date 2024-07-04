<script lang="ts">
	import { BedType, type CabinDetails } from '$lib/models/CabinDetails';
	import AmenityIcon from './AmenityIcon.svelte';
	import TooltipWrapper from './TooltipWrapper.svelte';

	export let cabin: CabinDetails;
</script>

<h2>Cabin {cabin.number}</h2>
<div class="container">
	<div>
		<img src={cabin.imagePath} alt={`Cabin ${cabin.number}`} />
	</div>
	<div>
		<p>{cabin.description}</p>
		<p>
			Beds:
			{cabin.beds
				.map((bed) => {
					return `${bed.count} ${bed.bedType}${bed.count > 1 ? (bed.bedType == BedType.SleeperCouch ? 'es' : 's') : ''}`;
				})
				.join(', ')}; Sleeps: {cabin.sleepsCount}
		</p>
		<span>Amenities:</span>
		{#each cabin.amenities as amenity}
			<AmenityIcon {amenity} />&nbsp;
		{/each}
	</div>
	<div>
		<p>Weekly Rate: ${cabin.weeklyRate.toFixed(2)}</p>
		<p>Daily Rate: ${cabin.dailyBaseRate.toFixed(2)}</p>
	</div>
</div>

<style>
	.container {
		display: grid;
		grid-template-columns: 1fr 2fr 1fr;
		column-gap: 1rem;
	}
</style>
