<script lang="ts">
	import type { Address } from '$lib/models/WebsiteContentModel';
	import { onDestroy, onMount } from 'svelte';

	export let address: Address;
	export let locationName: string;
	let mapElement: HTMLElement;

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	let map: any;

	const createMap = () => {
		if (!map) {
			const Leaflet = window.L;
			if (!Leaflet) return;

			map = Leaflet.map(mapElement).setView(address.latitudeAndLongitude, 13);
			Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
				attribution:
					'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
			}).addTo(map);
			Leaflet.marker(address.latitudeAndLongitude).addTo(map).bindPopup(locationName).openPopup();
		}
	};

	onMount(() => {
		createMap();
	});

	onDestroy(async () => {
		if (map) map.remove();
	});
</script>

<svelte:head>
	<link
		rel="stylesheet"
		href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
		integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
		crossorigin=""
	/>
	<script
		src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
		integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
		crossorigin=""
	></script>
</svelte:head>

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
