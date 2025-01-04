<script lang="ts">
	import type { SebagoInfo } from '$lib/models/WebsiteContentModel';
	export let SebagoDetails: SebagoInfo;
	import AddressDisplay from '../item-display/AddressDisplay.svelte';
</script>

<div class={'footer'}>
	<div class={'sebago-info'}>
		<span class="material-symbols-outlined"> copyright </span>
		2024 by {SebagoDetails.name}. &nbsp;&nbsp;
		<AddressDisplay address={SebagoDetails.address} />
	</div>
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
</div>

<style>
	a {
		color: var(--white);
	}
	.footer {
		background-color: var(--sebago-red);
		color: var(--white);
		height: 4rem;
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		padding: 2rem;
		align-items: center;
		box-sizing: border-box;
		font-size: 1rem;
	}

	.sebago-info {
		display: flex;
		flex-direction: row;
		align-items: center;
	}
</style>
