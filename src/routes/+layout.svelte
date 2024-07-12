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
	<img class={'image'} src="./sign.jpeg" alt="SEBAGO" />
	<div class={'nav-bar'}>
		<a href="/">Home</a>
		<a href="/cabins-and-rates">Cabins & Rates</a>
		<a href="/gallery">Gallery</a>
		<a href="/contact-us">Contact Us</a>
	</div>
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
	@media only screen and (max-width: 60rem) {
	}
	@media only screen and (min-width: 60rem) {
	}
	.image {
		width: 30vw;
		min-width: 200px;
		max-height: inherit;
		object-fit: contain;
	}
	.slot-content {
		margin: 5rem 0px 4rem 0px;
		padding: 0.5rem;
	}
	.nav-bar {
		display: flex;
		flex-direction: row;
		justify-content: center;
		column-gap: 2vw;
	}
	.header {
		background-color: var(--tan);
		display: flex;
		flex-wrap: wrap;
		max-height: 5rem;
		min-height: 5rem;
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
