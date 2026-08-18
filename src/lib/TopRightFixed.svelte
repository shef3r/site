<script lang="ts">
	import TextLogo from '$lib/assets/Icons/TextLogo.svg?raw';
	import Logo from '$lib/assets/Icons/Logo.svg?raw';
</script>

<div class="fixed-top-right">
	<div class="logo-container">
		{@html Logo}
	</div>
	<div class="text-logo-container">
		{@html TextLogo}
	</div>
</div>

<style>
	.fixed-top-right {
		position: absolute;
		top: 0rem;
		right: 0rem;
		margin: 0 !important;
		z-index: 9999;
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		gap: 1.5rem;
	}

	.logo-container :global(svg) {
		width: 50px;
		height: auto;
		transform: scaleY(-1);
		filter: brightness(0);
		flex-shrink: 0;
	}

	.text-logo-container {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 50px;
		height: 196px;
	}

	.text-logo-container :global(svg) {
		width: 196px;
		height: 50px;
		min-width: 196px;
		min-height: 50px;
		flex-shrink: 0;
		filter: brightness(0);
		transform: rotate(-90deg);
	}
</style>
