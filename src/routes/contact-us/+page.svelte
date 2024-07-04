<script lang="ts">
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
	<input
		id="name"
		type="text"
		maxlength="255"
		bind:value={contactFormRequest.name}
		placeholder="Name"
		required
	/>
	<input
		id="email"
		type="email"
		bind:value={contactFormRequest.email}
		placeholder="Email"
		required
	/>
	<input
		id="subject"
		type="text"
		maxlength="255"
		bind:value={contactFormRequest.subject}
		placeholder="Subject"
	/>
	<textarea id="message" bind:value={contactFormRequest.message} placeholder="Message" />

	<button type="submit">Send</button>
</form>
