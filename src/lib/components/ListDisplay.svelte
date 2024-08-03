<script lang="ts">
	export let title: string;
	export let items: string[];
</script>

<h2>{title}</h2>
<ul>
	{#each items as item}
		<li>{item}</li>
	{/each}
</ul>
