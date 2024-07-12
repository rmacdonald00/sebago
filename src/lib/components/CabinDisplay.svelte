<script lang="ts">
	import { BedType, type CabinDetails } from '$lib/models/CabinDetails';
	import CallToBook from './CallToBook.svelte';
	import ImageArrayDisplay from './ImageArrayDisplay.svelte';

	export let cabin: CabinDetails;

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

	const getDescription = () => {
		//TODO: all the info can just go in a paragraph
		return `${cabin.description} ${generateBedDescription()}`;
	};
</script>

<h2>Cabin {cabin.number}</h2>
<p>{getDescription()}</p>
<div class="container">
	<div class={'images'}>
		<ImageArrayDisplay images={cabin.images} />
	</div>
	<div class={'booking-info'}>
		<p>Weekly Rate: ${cabin.weeklyRate.toFixed(2)}</p>
		<p>Daily Rate: ${cabin.dailyBaseRate.toFixed(2)}</p>
		<CallToBook />
	</div>
</div>

<style>
	.container {
		display: flex;
		flex-wrap: wrap;
	}
	.images {
		height: 30rem;
	}
	.booking-info {
		justify-content: center;
		align-items: center;
	}
	@media only screen and (min-width: 60rem) {
		.images {
			width: 70vw;
		}
		.booking-info {
			display: flex;
			flex-direction: column;
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
	}
</style>
