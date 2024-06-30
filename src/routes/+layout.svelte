<div class={'header'}>
<a  href="/">Home</a>
<a  href="/cabins-and-rates">Cabins & Rates</a>
<a  href="/amenities">Amenities</a>
<a  href="/gallery">Gallery</a>
<a  href="/contact-us">Contact Us</a>
</div>
<slot/>

<style>
    .header {
        display: flex;
        flex-direction: row;
        justify-content: center;
        column-gap: 2vw;
        border-bottom: 2px var(--sebago-red) solid;
    }
</style>