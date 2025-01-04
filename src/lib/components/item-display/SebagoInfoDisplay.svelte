<script lang="ts">
	import type { SebagoInfo } from '$lib/models/WebsiteContentModel';
	export let SebagoDetails: SebagoInfo;
	import AddressDisplay from '../item-display/AddressDisplay.svelte';
	import Copyright from '../structure/Copyright.svelte';
</script>

<div class="content-box">
	<AddressDisplay address={SebagoDetails.address} />
	<div>
		<a href={SebagoDetails.instagram.externalLink} target="_blank">
			<span class="material-symbols-outlined"> open_in_new </span>
			<span>@{SebagoDetails.instagram.username}</span>
		</a>
		<a href={SebagoDetails.facebook.externalLink} target="_blank">
			<span class="material-symbols-outlined"> open_in_new </span>
			<span>{SebagoDetails.facebook.username}</span>
		</a>
	</div>
	<span class="copyright">
		<Copyright {SebagoDetails} />
	</span>
</div>

<style>
	.content-box {
		height: 100%;
		width: 100%;
		background-color: var(--sebago-red);
	}

	/* Small Screen */
	@media only screen and (max-width: 35rem) {
		.copyright,
		.map {
			display: none;
		}
	}
</style>
