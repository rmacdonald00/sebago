<script lang="ts">
	import { BedType, type CabinDetails } from "$lib/models/CabinDetails";
	import AmenityIcon from "./AmenityIcon.svelte";

export let cabin: CabinDetails;
</script>

<div class='container'>
<img src={cabin.imagePath} alt={`Cabin ${cabin.number}`}/>
<div>

    <h2>Cabin {cabin.number}</h2>
    <p>{cabin.description}</p>
    <p>Beds:</p>
    <ul>
        
        {#each cabin.beds as bed}
        <li>{bed.count} {bed.bedType}{bed.count > 1 ? (bed.bedType == BedType.SleeperCouch ? 'es' : 's') : ''}</li>
        {/each}
        </ul>
        <p>Sleeps {cabin.sleepsCount}</p>
        
        <p>Weekly Rate: ${cabin.weeklyRate.toFixed(2)}</p>
        <p>Daily Rate: ${cabin.dailyBaseRate.toFixed(2)}</p>
        
        <span>Amenities:</span>
        {#each cabin.amenities as amenity}
            <AmenityIcon {amenity}/>
        {/each}
</div>
</div>

<style>
    .container {
        display: grid;
        grid-template-columns: 1fr 3fr;
        column-gap: 1rem;
    }
</style>