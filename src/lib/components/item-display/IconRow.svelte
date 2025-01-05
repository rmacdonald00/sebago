<script lang="ts">
	export let iconName: string;
</script>

<div class="container">
	<span class="material-symbols-outlined">
		{iconName}
	</span>
	<span>
		<slot />
	</span>
</div>

<style>
	.container {
		width: 100%;
		display: grid;
		grid-template-columns: 1fr 6fr;
		justify-content: center;
		align-items: center;
	}
</style>
