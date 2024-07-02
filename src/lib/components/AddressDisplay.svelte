<script lang="ts">
	import type { Address } from "$lib/models/SebagoInfo";

    export let address: Address;
</script>

<p>{address.street} {address.city}, {address.state} {address.zip}</p>