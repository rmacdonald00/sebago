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

	<div class={'footer'}></div>

<style>
	.slot-content {
		margin: 1.5rem 0px 3rem 0px;
        padding: 0.5rem;
	}
	.header {
		display: flex;
		flex-direction: row;
		justify-content: center;
		background-color: var(--tan);
        height: 1.5rem;;
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
        height: 3rem;;
		width: 100%;
        position: fixed;
        bottom: 0;
        left: 0;
	}
</style>
