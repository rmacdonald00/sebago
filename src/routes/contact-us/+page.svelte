<script lang="ts">
	import ImageAndContentRow from '$lib/components/ImageAndContentRow.svelte';
	import { SebagoDetails, WebsiteImagesConfig } from '$lib/data/WebsiteContent';
	import type { ContactFormRequest } from '$lib/models/ContactFormRequest';

	const contactFormRequest: ContactFormRequest = {
		name: '',
		email: '',
		subject: '',
		message: ''
	};

	const submitContactForm = () => {
		console.log(contactFormRequest);
		//TODO: actually send this somewhere
	};
</script>

<h1>Contact Us</h1>
<ImageAndContentRow image={WebsiteImagesConfig.ContactUs} imageSide={'right'}>
	<form on:submit={submitContactForm}>
		<div class={'vertical-stack contact-form'}>
			<input
				id="name"
				type="text"
				maxlength="255"
				bind:value={contactFormRequest.name}
				placeholder="Name*"
				required
			/>
			<input
				id="email"
				type="email"
				bind:value={contactFormRequest.email}
				placeholder="Email*"
				required
			/>
			<input
				id="subject"
				type="text"
				maxlength="255"
				bind:value={contactFormRequest.subject}
				placeholder="Subject"
			/>
			<textarea
				id="message"
				bind:value={contactFormRequest.message}
				placeholder="Message"
				class={'message-input'}
			/>
			<button type="submit">Send</button>
		</div>
	</form>

	<div>
		You can also call or email us directly at {SebagoDetails.phoneNumber} or {SebagoDetails.email}
	</div>
</ImageAndContentRow>

<style>
	button {
		background-color: var(--dark-tan);
		color: black;
		height: 3rem;
	}
	.contact-form {
		row-gap: 0.5rem;
	}

	.contact-form * {
		font-family: 'Text-Font';
		font-size: 1rem;
	}

	input,
	textarea {
		min-height: 1.5rem;
	}

	form:invalid button {
		opacity: 0.3;
		pointer-events: none;
	}

	input:invalid {
		color: var(--sebago-red);
	}
	.message-input {
		resize: none;
	}
</style>
