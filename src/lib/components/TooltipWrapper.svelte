<script lang="ts">
	export let tooltipText: string;
</script>

<div class={'tooltip'}>
	<span class="tooltiptext">{tooltipText}</span>
	<slot />
</div>

<style>
	/* Taken from: https://www.w3schools.com/howto/howto_css_tooltip.asp */
	.tooltip {
		position: relative;
		display: inline-block;
	}

	.tooltip .tooltiptext {
		visibility: hidden;
        width: 5rem;
        background-color: rgba(0, 0, 0, 0.75);
		color: var(--white);
		text-align: center;
		border-radius: 6px;
		padding: 5px 0;
		position: absolute;
		z-index: 1;
		bottom: 125%;
		left: 50%;
		margin-left: -2.5rem;
		opacity: 0;
	}

	.tooltip .tooltiptext::after {
		content: '';
		position: absolute;
		top: 100%;
		left: 50%;
		margin-left: -5px;
		border-width: 5px;
		border-style: solid;
		border-color: rgba(0, 0, 0, 0.75) transparent transparent transparent;
	}

	.tooltip:hover .tooltiptext {
		visibility: visible;
		opacity: 1;
	}
</style>
