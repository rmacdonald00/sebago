<script lang="ts">
	const amenitiesList = [
		'Candy and ice cream store',
		'Family fun',
		'Sunbathing/swimming dock',
		'​Free Wi-Fi',
		'Fully equipped kitchen',
		'Ping-Pong',
		'Air hockey and foosball',
		'Volleyball',
		'Games and books for check out',
		'Canoe and paddle boat usage'
	];
</script>

<h1>Amenities</h1>
<ul>
    {#each amenitiesList as amenity}
    <li>{amenity}</li>
    {/each}
</ul>