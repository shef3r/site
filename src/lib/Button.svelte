<script lang="ts">
	let {
		children,
		onclick,
		class: className = '',
		textColor = '#000000',
		borderColor = '#89A0AB',
		insetBorderColor = 'rgba(255, 255, 255, 0.7)',
		bgGradient = 'linear-gradient(to bottom, #F5FBFD, #DBF0F9, #CEEAF7)',
		blurRectColor = 'rgba(200, 189, 229, 0.3215)'
	} = $props<{
		children?: any;
		onclick?: (event: MouseEvent) => void;
		class?: string;
		textColor?: string;
		borderColor?: string;
		insetBorderColor?: string;
		bgGradient?: string;
		blurRectColor?: string;
	}>();
</script>

<button
	class="custom-button {className}"
	{onclick}
	style="
		--text-color: {textColor};
		--border-color: {borderColor};
		--inset-border-color: {insetBorderColor};
		--bg-gradient: {bgGradient};
		--blur-rect-color: {blurRectColor};
	"
>
	<span class="content">
		{#if children}
			{@render children()}
		{/if}
	</span>
</button>

<style>
	.custom-button {
		position: relative;
		padding: 0.75rem 1.75rem;
		border-radius: 16px;
		font-family: 'Michroma', sans-serif;
		font-weight: 600;
		font-size: 1rem;
		cursor: pointer;
		outline: none;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		color: var(--text-color);
		
		border: 2px solid var(--border-color);
		
		box-shadow: inset 0 0 0 2px var(--inset-border-color);
		
		background-image: var(--bg-gradient);
		background-origin: padding-box, border-box;
		background-clip: padding-box, border-box;
		
		background-size: 100% 150%, 100% 150%;
		background-position: 0 0, 0 0;
		
		transition: all 0.3s cubic-bezier(0.25, 1, 0.5, 1);
	}

	.custom-button::before {
		content: '';
		position: absolute;
		/* Extend over the 2px border */
		left: -2px;
		right: -2px;
		bottom: -2px;
		height: 33.33%;
		border-bottom-left-radius: 16px;
		border-bottom-right-radius: 16px;
		background-color: var(--blur-rect-color);
		filter: blur(4px);
		pointer-events: none;
	}

	.content {
		position: relative;
		z-index: 1;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
	}

	.custom-button:hover {
		background-position: 0 100%, 0 100%;
	}

	.custom-button:active {
		transform: scale(0.92);
	}
</style>
