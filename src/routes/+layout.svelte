<script>
	import AddressDisplay from '$lib/components/AddressDisplay.svelte';
	import { SebagoDetails } from '$lib/data/WebsiteContent';
</script>

<svelte:head>
	<link
		rel="stylesheet"
		href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
	/>
</svelte:head>

<div class={'header'}>
	<a href="/">Home</a>
	<a href="/cabins-and-rates">Cabins & Rates</a>
	<a href="/gallery">Gallery</a>
	<a href="/contact-us">Contact Us</a>
</div>
<div class={'slot-content'}>
	<slot />
</div>

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
	.slot-content {
		margin: 1.5rem 0px 4rem 0px;
		padding: 0.5rem;
	}
	.header {
		display: flex;
		flex-direction: row;
		justify-content: center;
		background-color: var(--tan);
		height: 1.5rem;
		column-gap: 2vw;
		border-bottom: 2px var(--sebago-red) solid;
		width: 100%;
		position: fixed;
		top: 0;
		left: 0;
	}

	.footer {
		background-color: var(--sebago-red);
		color: var(--white);
		height: 4rem;
		width: 100%;
		position: fixed;
		bottom: 0;
		left: 0;
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
