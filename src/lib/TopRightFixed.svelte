<script lang="ts">
	// This component stays at the top right of the viewport
</script>

<div class="fixed-top-right">
	<span>Always Here</span>
</div>

<style>
	.fixed-top-right {
		position: absolute;
		top: 0;
		right: 0;
		margin: 0 !important;
		padding: 1rem 1.5rem;
		background: linear-gradient(135deg, #f59e0b 0%, #ef4444 100%);
		color: white;
		font-weight: 700;
		z-index: 9999;
		border-bottom-left-radius: 12px;
		backdrop-filter: blur(8px);
	}
</style>
