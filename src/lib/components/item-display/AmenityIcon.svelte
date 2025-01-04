<script lang="ts">
	import { Amenity } from '$lib/models/CabinDetails';
	import TooltipWrapper from '../helpers/TooltipWrapper.svelte';

	export let amenity: Amenity;
	let iconName: string;
	switch (amenity) {
		case Amenity.Wifi:
			iconName = 'wifi';
			break;
		case Amenity.Shower:
			iconName = 'shower';
			break;
		case Amenity.Kitchen:
			iconName = 'restaurant';
			break;
	}
</script>

<TooltipWrapper tooltipText={amenity}>
	<span class="material-symbols-outlined">
		{iconName}
	</span>
</TooltipWrapper>

<style></style>
