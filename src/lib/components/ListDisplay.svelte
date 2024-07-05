<script lang="ts">
	export let title: string;
	export let items: string[];
</script>

<h1>{title}</h1>
<ul>
	{#each items as item}
		<li>{item}</li>
	{/each}
</ul>
