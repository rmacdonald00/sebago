<script lang="ts">
</script>

<div class={'header'}>
	<img class={'image'} src="./sign.jpeg" alt="SEBAGO" />
	<div class={'nav-bar'}>
		<a href="/">Home</a>
		<a href="/about">About</a>
		<a href="/cabins-and-rates">Cabins & Rates</a>
		<a href="/gallery">Gallery</a>
		<a href="/contact-us">Contact Us</a>
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
		max-height: 4.5rem;
		object-fit: contain;
	}
	.nav-bar {
		display: flex;
		flex-direction: row;
		white-space: nowrap;
		flex: 2;
		justify-content: center;
		column-gap: 2vw;
	}
	.header {
		background-color: var(--tan);
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		max-height: 5rem;
		min-height: 5rem;
		border-bottom: 2px var(--sebago-red) solid;
		width: 100%;
	}
</style>
