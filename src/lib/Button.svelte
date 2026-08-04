<script lang="ts">
	let {
		children,
		variant = 'primary',
		onclick,
		class: className = ''
	} = $props<{
		children?: any;
		variant?: 'primary' | 'secondary' | 'outline' | 'danger';
		onclick?: (event: MouseEvent) => void;
		class?: string;
	}>();
</script>

<button
	class="custom-button {variant} {className}"
	{onclick}
>
	{#if children}
		{@render children()}
	{/if}
</button>

<style>
	.custom-button {
		position: relative;
		overflow: hidden;
		padding: 0.75rem 1.75rem;
		border-radius: 9999px;
		font-family: 'Michroma', sans-serif;
		font-weight: 600;
		font-size: 1rem;
		cursor: pointer;
		transition: all 0.3s cubic-bezier(0.25, 1, 0.5, 1);
		outline: none;
		border: none;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
	}

	.custom-button:hover {
		transform: translateY(-2px) scale(1.02);
	}

	.custom-button:active {
		transform: translateY(1px) scale(0.98);
	}

	.primary {
		background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
		color: white;
	}

	.primary::after {
		content: '';
		position: absolute;
		top: 0; left: 0; right: 0; bottom: 0;
		background: linear-gradient(135deg, #a855f7 0%, #ec4899 100%);
		opacity: 0;
		transition: opacity 0.3s ease;
		border-radius: inherit;
		z-index: -1;
	}

	.primary:hover::after {
		opacity: 1;
	}
	
	.primary { z-index: 1; }

	.secondary {
		background: rgba(255, 255, 255, 0.1);
		backdrop-filter: blur(10px);
		color: white;
		border: 1px solid rgba(255, 255, 255, 0.2);
	}

	.secondary:hover {
		background: rgba(255, 255, 255, 0.2);
		border-color: rgba(255, 255, 255, 0.3);
	}

	.outline {
		background: transparent;
		color: #a855f7;
		border: 2px solid #a855f7;
	}

	.outline:hover {
		background: rgba(168, 85, 247, 0.1);
	}
</style>
