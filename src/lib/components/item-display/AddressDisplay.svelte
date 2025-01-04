<script lang="ts">
	import type { Address } from '$lib/models/WebsiteContentModel';

	export let address: Address;
</script>

<p>{address.street} {address.city}, {address.state} {address.zip}</p>
