<script lang="ts">
</script>

<div class={'header'}>
	<span class="header-title">SEBAGO</span>
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

	.header-title {
		color: var(--sebago-red);
		font-size: 4.5rem;
		font-family: 'Impact';
	}

	.nav-bar {
		display: flex;
		flex-direction: row;
		white-space: nowrap;
		flex: 2;
		justify-content: center;
		font-size: larger;
		column-gap: 2vw;
	}
	a {
		color: black;
	}
	.header {
		background-color: var(--tan);
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		border-bottom: 2px var(--sebago-red) solid;
		width: 100%;
		padding: 0 1rem;
		box-sizing: border-box;
	}
</style>
