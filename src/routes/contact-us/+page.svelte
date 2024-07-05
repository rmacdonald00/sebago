<script lang="ts">
	import { SebagoDetails } from '$lib/data/WebsiteContent';
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
<form on:submit={submitContactForm}>
	<div class={'form-inputs'}>
		<div class={'left-col'}>
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
		</div>
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

<style>
	.form-inputs {
		display: grid;
		width: 100%;
		grid-template-columns: 3fr 3fr 1fr;
	}

	.left-col {
		display: flex;
		flex-direction: column;
	}

	.message-input {
		resize: none;
	}
</style>
