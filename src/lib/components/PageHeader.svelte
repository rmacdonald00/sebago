<script lang="ts">
	import NavigationBar from './NavigationBar.svelte';
</script>

<div class={'header'}>
	<span class="header-title">SEBAGO</span>
	<NavigationBar />
</div>

<style>
	.header-title {
		color: var(--sebago-red);
		font-size: 4.5rem;
		font-family: 'Impact';
		margin-left: 1rem;
	}

	.header {
		background-color: var(--tan);
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		border-bottom: 2px var(--sebago-red) solid;
		width: 100%;
		box-sizing: border-box;
	}
</style>
