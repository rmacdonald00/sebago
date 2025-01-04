<script lang="ts">
	import type { Address } from '$lib/models/WebsiteContentModel';

	export let address: Address;
</script>

<!-- TODO: if big screen, include address map -->
<span>{address.street} {address.city}, {address.state} {address.zip}</span>
