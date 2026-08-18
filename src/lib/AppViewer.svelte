<script lang="ts">
	let {
		icon,
		appName,
		description,
		screenshot,
		githubLink,
		microsoftStoreLink
	} = $props<{
		icon: string;
		appName: string;
		description: string;
		screenshot: string;
		githubLink: string;
		microsoftStoreLink: string;
	}>();
</script>

<div class="app-viewer">
	<div class="header">
		<div class="app-icon">
			{@html icon}
		</div>
		<div class="header-text">
			<h2>{appName}</h2>
		</div>
	</div>
	
	<p class="description">{description}</p>
	
	<div class="screenshot-container">
		<img src={screenshot} alt="{appName} screenshot" class="screenshot" />
	</div>

	<div class="links">
		{#if githubLink}
			<a href={githubLink} target="_blank" rel="noopener noreferrer">check out on github</a>
		{/if}
		{#if microsoftStoreLink}
			<a href={microsoftStoreLink} target="_blank" rel="noopener noreferrer">download from microsoft store</a>
		{/if}
	</div>
</div>

<style>
	.app-viewer {
		display: flex;
		flex-direction: column;
		gap: 2rem;
		height: 100%;
		animation: fade-in 0.4s ease-out forwards;
		color: black;
	}

	@keyframes fade-in {
		from { opacity: 0; transform: translateY(10px); }
		to { opacity: 1; transform: translateY(0); }
	}

	.header {
		display: flex;
		align-items: center;
		gap: 1.5rem;
	}

	.app-icon {
		height: 100px;
		width: 100px;
		min-width: 100px;
		flex-shrink: 0;
		border-radius: 16px;
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;
	}
	
	.app-icon :global(svg) {
		width: 100%;
		height: 100%;
	}

	.header-text {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		min-width: 0;
	}

	h2 {
		margin: 0;
		font-size: clamp(1.2rem, 6cqi, 2.75rem);
		font-weight: 700;
		overflow-wrap: break-word;
	}

	.links {
		margin-top: -10px;
		display: flex;
		flex-direction: column;
		justify-content: right;
		gap: 0.5rem;
	}

	.links a {
		color: black;
		text-align: end;
		font-size: 0.85rem;
		font-weight: 600;
	}

	.description {
		margin: 0;
		color: rgba(0, 0, 0, 0.9);
		line-height: 1.6;
		font-size: 1.15rem;
	}

	.screenshot-container {
		margin-top: auto;
		background: rgba(0, 0, 0, 0.25);
		border-radius: 12px;
		transform: rotate(-7deg);
		overflow: hidden;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.screenshot {
		width: 100%;
		height: auto;
		max-height: 350px;
		object-fit: cover;
		opacity: 0.95;
		display: block;
	}

	@container (max-width: 479px) {
		.screenshot-container {
			display: none;
		}
	}
</style>
