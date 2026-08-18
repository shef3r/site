<script lang="ts">
	import Button from '$lib/Button.svelte';
	import Arrow from '$lib/assets/Icons/Arrow.svg?raw';
	
	let {
		link = '',
		icon = '',
		text = '',
		showArrow = true,
		// Forward any button styling props (e.g., bgGradient, etc.)
		...rest
	} = $props<{
		link?: string;
		icon?: string;
		text?: string;
		showArrow?: boolean;
		[key: string]: any;
	}>();

	let isCopied = $state(false);

	function isUrl(str: string) {
		// Matches basic HTTP/HTTPS, mailto:, tel:, or paths starting with /
		return /^(https?:\/\/|mailto:|tel:|\/)/i.test(str);
	}

	function handleClick(e: MouseEvent) {
		if (isUrl(link)) {
			// It's a link, so redirect
			const target = link.startsWith('/') ? '_self' : '_blank';
			window.open(link, target);
		} else {
			// It's not a link, copy the link string (or text if link is empty) to clipboard
			navigator.clipboard.writeText(link || text).then(() => {
				isCopied = true;
				setTimeout(() => {
					isCopied = false;
				}, 3000);
			});
		}
	}
</script>

<Button onclick={handleClick} {...rest}>
	<div class="link-content" class:center-content={!icon && !showArrow}>
		{#if icon}
			<div class="left-col">
				<span class="icon">
					{@html icon}
				</span>
				<span class="text">
					{#if isCopied}
						Copied!
					{:else}
						{text}
					{/if}
				</span>
			</div>
		{:else}
			{#if showArrow}
				<!-- Invisible spacer to perfectly center the text against the arrow -->
				<span class="spacer" style="width: 36px;"></span>
			{/if}
			<span class="text">
				{#if isCopied}
					Copied!
				{:else}
					{text}
				{/if}
			</span>
		{/if}
		
		{#if showArrow}
			<span class="arrow">
				{@html Arrow}
			</span>
		{/if}
	</div>
</Button>

{#if !showArrow}
	<style>
		.link-content {
			min-width: 0 !important;
		}
	</style>
{/if}

<style>

	.link-content {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		/* Stretch the button out so the icon and arrow have room to be pushed to the edges */
		min-width: 14rem;
		gap: 1rem;
		/* Pull the content slightly into the button's thick padding to get closer to the border */
		margin-left: -0.5rem;
		margin-right: -0.5rem;
	}

	.link-content.center-content {
		justify-content: center;
	}
	
	.left-col {
		display: flex;
		align-items: center;
		/* More space between the icon and the text */
		gap: 1.25rem;
	}
	
	.icon {
		display: flex;
		align-items: center;
		justify-content: center;
	}
	
	.icon :global(svg) {
		width: 24px;
		height: 24px;
	}

	.spacer {
		display: block;
		flex-shrink: 0;
	}

	.arrow {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
	}

	.arrow :global(svg) {
		/* Scaled up 2x from original 18px */
		width: 36px;
		height: 36px;
		transform: rotate(135deg);
		fill: currentColor;
	}
	
	.text {
		transition: opacity 0.2s;
		white-space: nowrap;
	}
</style>
