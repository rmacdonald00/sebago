<script>
	import AddressDisplay from '$lib/components/AddressDisplay.svelte';
	import { SebagoDetails } from '$lib/data/WebsiteContent';
</script>

<div class={'header'}>
	<a href="/">Home</a>
	<a href="/cabins-and-rates">Cabins & Rates</a>
	<a href="/amenities">Amenities</a>
	<a href="/gallery">Gallery</a>
	<a href="/contact-us">Contact Us</a>
</div>
<div class={'slot-content'}>
	<slot />
</div>

<div class={'footer'}>
	<div class={'sebago-info'}>
		<AddressDisplay address={SebagoDetails.address} />
        <p>
            <span class="material-symbols-outlined"> copyright </span>2024 by Sebago Resort
        </p>
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
		flex-direction: column;
	}

	.sebago-info {
		display: grid;
		grid-template-columns: 2fr 1fr;
	}
</style>
