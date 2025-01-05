<script lang="ts">
	import type { SebagoInfo } from '$lib/models/WebsiteContentModel';
	export let SebagoDetails: SebagoInfo;
	import AddressDisplay from '../item-display/AddressDisplay.svelte';
	import IconRow from './IconRow.svelte';

	const mailtoLink = encodeURI(
		`mailto:${SebagoDetails.email}?subject=${SebagoDetails.emailContentDefaults?.subject ?? ''}&body=${SebagoDetails.emailContentDefaults?.body ?? ''}`
	);

	const telLink = `tel:+1${SebagoDetails.phoneNumber.replaceAll('-', '')}`;
</script>

<div class="content-box">
	<div class="details">
		<span>
			<h3>Contact us at</h3>
			<div class="contact-info">
				<IconRow iconName={'phone'}>
					<a href={telLink} class={'contact-link-button'}>{SebagoDetails.phoneNumber}</a>
				</IconRow>
				OR
				<IconRow iconName={'email'}>
					<a href={mailtoLink} class={'contact-link-button'}>{SebagoDetails.email}</a>
				</IconRow>
			</div>
		</span>
		<span>
			<h3>Location</h3>
			<AddressDisplay address={SebagoDetails.address} locationName={SebagoDetails.name} />
		</span>
		<span>
			<h3>Find us on Social Media:</h3>
			<div>
				{#each SebagoDetails.socialMediaAccounts as account}
					<div>
						{account.platform}:
						<a href={account.externalLink} target="_blank">
							<span>{account.username}</span>
						</a>
					</div>
				{/each}
			</div>
		</span>
	</div>
</div>

<style>
	.content-box {
		width: 100%;
		height: 100%;
	}

	.contact-info {
		margin: 1rem;
		line-height: 150%;
		text-align: center;
	}

	.details {
		background-color: var(--tan);
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		padding: 0.5rem 0.25rem;
		box-sizing: border-box;
		height: 100%;
	}

	.contact-link-button {
		background-color: var(--dark-tan);
		color: black;
		display: block;
		font-size: large;
		text-align: center;
		padding: 0.35rem;
	}

	/* Small Screen */
	@media only screen and (max-width: 50rem) {
		.contact-link-button {
			padding: 0;
		}
		.contact-info {
			margin: 0.3rem;
			line-height: 100%;
		}
	}
</style>
