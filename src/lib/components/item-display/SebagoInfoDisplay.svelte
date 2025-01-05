<script lang="ts">
	import type { SebagoInfo } from '$lib/models/WebsiteContentModel';
	export let SebagoDetails: SebagoInfo;
	import AddressDisplay from '../item-display/AddressDisplay.svelte';
	import Copyright from '../structure/Copyright.svelte';

	const mailtoLink = encodeURI(
		`mailto:${SebagoDetails.email}?subject=${SebagoDetails.emailContentDefaults?.subject ?? ''}&body=${SebagoDetails.emailContentDefaults?.body ?? ''}`
	);
</script>

<div class="content-box">
	<div class="details">
		<h1>Contact Us</h1>
		<div>
			Call us at {SebagoDetails.phoneNumber} or
			<a href={mailtoLink} class={'mailto-button'}>Email us at {SebagoDetails.email}</a>
		</div>

		<AddressDisplay address={SebagoDetails.address} />
		<div>
			<a href={SebagoDetails.instagram.externalLink} target="_blank">
				<span class="material-symbols-outlined"> open_in_new </span>
				<span>@{SebagoDetails.instagram.username}</span>
			</a>
			<a href={SebagoDetails.facebook.externalLink} target="_blank">
				<span class="material-symbols-outlined"> open_in_new </span>
				<span>{SebagoDetails.facebook.username}</span>
			</a>
		</div>
	</div>
</div>

<style>
	.content-box {
		height: 100%;
		width: 100%;
		background-color: var(--sebago-red);
		padding: 1rem;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	.details {
		background-color: var(--tan);
	}

	.mailto-button {
		background-color: var(--dark-tan);
		color: black;
		display: block;
		font-size: large;
	}
</style>
