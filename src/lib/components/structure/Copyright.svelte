<script lang="ts">
	import type { SebagoInfo } from '$lib/models/WebsiteContentModel';
	export let SebagoDetails: SebagoInfo;
</script>

<div class={'copyright'}>
	<span class="material-symbols-outlined"> copyright </span>
	2024 by {SebagoDetails.name}. &nbsp;&nbsp;
</div>

<style>
	.copyright {
		padding: 2rem;
		color: var(--white);
		background-color: var(--sebago-red);
	}
</style>
