<script lang="ts">
	import type { Address } from '$lib/models/WebsiteContentModel';
	import { onDestroy, onMount } from 'svelte';
	import 'leaflet/dist/leaflet.css';

	export let address: Address;
	export let locationName: string;
	let mapElement: HTMLElement;
	let map: any;

	onMount(async () => {
		// Warning - do not import `leaflet` outside of an `onMount`. It will error, hence the map: any
		const Leaflet = (await import('leaflet')).default;
		map = Leaflet.map(mapElement).setView(address.latitudeAndLongitude, 13);

		Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
			attribution:
				'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
		}).addTo(map);

		Leaflet.marker(address.latitudeAndLongitude).addTo(map).bindPopup(locationName).openPopup();
	});

	onDestroy(async () => {
		if (map) map.remove();
	});
</script>

<span class="address">
	<span>{address.street}</span>
	<span>{address.city}, {address.state} {address.zip}</span>
</span>
<div class="map" bind:this={mapElement} />

<style>
	.map {
		height: 180px;
		z-index: 5;
	}

	.address {
		display: flex;
		flex-direction: column;
	}
</style>
