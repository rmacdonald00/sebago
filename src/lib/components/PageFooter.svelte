<script lang="ts">
	import { SebagoDetails } from '$lib/data/WebsiteContent';
	import AddressDisplay from './AddressDisplay.svelte';
</script>

<div class={'footer'}>
	<div class={'sebago-info'}>
		<span class="material-symbols-outlined"> copyright </span>
		2024 by Sebago Resort. &nbsp;&nbsp;
		<AddressDisplay address={SebagoDetails.address} />
	</div>
	<div>
		<a href={SebagoDetails.instagram.externalLink}>
			<span class="material-symbols-outlined"> open_in_new </span>
			<span>@{SebagoDetails.instagram.username}</span>
		</a>
		<a href={SebagoDetails.facebook.externalLink}>
			<span class="material-symbols-outlined"> open_in_new </span>
			<span>{SebagoDetails.facebook.username}</span>
		</a>
	</div>
</div>

<style>
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
	}

	.sebago-info {
		display: flex;
		flex-direction: row;
		align-items: center;
	}
</style>
