<script lang="ts">
	import type { SebagoInfo } from '$lib/models/WebsiteContentModel';

	export let SebagoDetails: SebagoInfo;
</script>

<div class={'container'}>
	<p>Call to Book!</p>
	<p>{SebagoDetails.phoneNumber}</p>
</div>

<style>
	.container {
		background-color: var(--sebago-red);
		height: 4rem;
		min-width: 10rem;
		display: grid;
		grid-template-rows: 3fr 2fr;
		row-gap: 0px;
	}
	p {
		margin: 0;
		text-align: center;
		color: var(--white);
	}
</style>
