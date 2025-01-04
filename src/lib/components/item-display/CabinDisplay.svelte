<script lang="ts">
	import { BedType, type CabinDetails } from '$lib/models/CabinDetails';
	import type { SebagoInfo } from '$lib/models/WebsiteContentModel';
	import ImageArrayDisplay from '../image-display/ImageArrayDisplay.svelte';
	import CallToBook from './CallToBook.svelte';

	export let cabin: CabinDetails;
	export let SebagoDetails: SebagoInfo;

	let showPanorama = false;
	let panoramaHasShown = false;

	const generateBedDescription = () => {
		const bedStrings = cabin.beds.map((bed) => {
			return `${bed.count == 1 ? 'a' : bed.count} ${bed.bedType.toLowerCase()}${bed.count > 1 ? (bed.bedType == BedType.SleeperCouch ? 'es' : 's') : ''}`;
		});

		let bedString: string;
		if (bedStrings.length == 1) {
			bedString = bedStrings[0];
		} else if (bedStrings.length == 2) {
			bedString = `${bedStrings[0]} and ${bedStrings[1]}`;
		} else {
			const last2 = `${bedStrings[bedStrings.length - 2]} and ${bedStrings[bedStrings.length - 1]}`;
			const firstBeds = bedStrings.slice(0, -2);
			bedString = [...firstBeds, last2].join(', ');
		}

		return `This cabin sleeps ${cabin.sleepsCount}. It has ${bedString}.`;
	};

	const toggleVisualType = () => {
		showPanorama = !showPanorama;
		//because it starts false; indicates if iframe should stay on page so it doesn't need to reload
		panoramaHasShown = true;
	};

	const getDescription = () => {
		//TODO: all the info can just go in a paragraph
		return `${cabin.description} ${generateBedDescription()}`;
	};
</script>

<h2>Cabin {cabin.number}</h2>
<p>{getDescription()}</p>
<div class="container">
	<div class={'images'}>
		{#if !showPanorama}
			<ImageArrayDisplay images={cabin.images} theme={'dark'} />
		{/if}
		{#if panoramaHasShown}
			<iframe
				class:isVisible={showPanorama}
				title="amphitheater panorama"
				style="border-style:none;"
				src={cabin.insidePanoramaSource}
				allow={`accelerometer ${cabin.insidePanoramaHost}; gyroscope ${cabin.insidePanoramaHost}`}
			></iframe>
		{/if}
		<div class="visual-selector">
			<button on:click={toggleVisualType}>
				{showPanorama ? 'See Images' : 'See Inside'}
				<span class="material-symbols-outlined"> visibility </span>
			</button>
		</div>
	</div>
	<div class={'divider'} />
	<div class={'booking-info'}>
		<p>Weekly Rate: ${cabin.weeklyRate.toFixed(2)}</p>
		<p>Daily Rate: ${cabin.dailyBaseRate.toFixed(2)}</p>
		<CallToBook {SebagoDetails} />
	</div>
</div>

<style>
	iframe {
		height: 100%;
		display: none;
		width: 100%;
	}

	iframe.isVisible {
		display: block;
	}

	.visual-selector {
		display: flex;
		justify-content: right;
	}

	.visual-selector button {
		background-color: var(--dark-tan);
		border: none;
		padding: 0.3rem 0.5rem;
		display: flex;
		align-items: center;
		column-gap: 0.5rem;
		font-family: 'Text-Font';
		font-size: large;
		color: black;
	}

	.container {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
	}
	.images {
		height: 30rem;
		display: grid;
		grid-template-rows: auto 2.5rem;
		row-gap: 0.3rem;
	}
	.booking-info {
		justify-content: center;
		align-items: center;
		flex: 2;
	}
	@media only screen and (min-width: 60rem) {
		.images {
			width: 70vw;
		}
		.booking-info {
			display: flex;
			flex-direction: column;
		}
		.divider {
			border-right: 0.3rem var(--dark-tan) dotted;
		}
	}

	@media only screen and (max-width: 60rem) {
		.images {
			width: 100%;
		}
		.booking-info {
			display: flex;
			flex-direction: row;
			width: 100%;
			justify-content: space-around;
		}

		.divider {
			width: 100%;
			border-bottom: 0.3rem var(--dark-tan) dotted;
		}
	}
</style>
