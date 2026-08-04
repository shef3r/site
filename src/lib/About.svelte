<script lang="ts">
	import Arrow from '$lib/assets/Icons/Arrow.svg?raw';
</script>

<div class="about-container">
	<div class="hint">
		<div class="arrow">{@html Arrow}</div>
		<p>use the tabs to start exploring!</p>
	</div>
</div>

<style>
	.hint {
		width: 250px;
		display: flex;
		flex-direction: row;
		opacity: 0.8;
	}

	.arrow {
		width: 80px;
	}

	.arrow :global(svg) {
		width: 80px;
		height: 80px;
		display: block;
	}

	.about-container {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
		height: 100%;
		animation: fade-in 0.4s ease-out forwards;
		color: black;
	}

	@keyframes fade-in {
		from { opacity: 0; transform: translateY(10px); }
		to { opacity: 1; transform: translateY(0); }
	}

	h2 {
		margin: 0;
		font-size: 2.25rem;
		font-weight: 700;
	}

	p {
		font-size: 1.6rem;
		line-height: 1.6;
		color: rgba(0, 0, 0, 0.9);
		margin: 0;
	}
	
	.mission {
		margin-top: 2rem;
		padding: 2rem;
		background: rgba(0, 0, 0, 0.2);
		border-radius: 12px;
		border: 1px solid rgba(255, 255, 255, 0.1);
	}
	
	.mission h3 {
		margin: 0 0 1rem 0;
		font-size: 1.5rem;
		color: black;
	}
</style>
