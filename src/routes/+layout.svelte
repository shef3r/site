<script>
	import '../app.css';
	import TopRightFixed from '$lib/TopRightFixed.svelte';
	let { children } = $props();
</script>

<TopRightFixed />
<div id="app">
	{@render children()}
</div>
