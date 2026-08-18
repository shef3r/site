<script lang="ts">
	import Link from '$lib/Link.svelte';

	import iconTwitter from '$lib/assets/Icons/Twitter.svg?raw';
	import iconGitHub from '$lib/assets/Icons/GitHub.svg?raw';
	import iconEmail from '$lib/assets/Icons/Email.svg?raw';
</script>

<div class="actions">
	<Link icon={iconTwitter} text="Twitter" link="https://twitter.com/sheferdev" />
	<Link icon={iconGitHub} text="GitHub" link="https://github.com/shfrlabs" />
	<Link icon={iconEmail} text="E-mail" link="hey@shefer.rocks" />
</div>

<style>
	.actions {
		width: 100%;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: 1rem;
		margin-top: 1rem;
		justify-content: center;
	}
</style>
