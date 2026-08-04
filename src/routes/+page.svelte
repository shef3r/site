<script lang="ts">
	import Folder from '$lib/Folder.svelte';
	import Button from '$lib/Button.svelte';
	import AppViewer from '$lib/AppViewer.svelte';
	import About from '$lib/About.svelte';

	import iconTaskie from '$lib/assets/AppIcons/Taskie.svg?raw';
	import iconAnchor from '$lib/assets/AppIcons/Anchor.svg?raw';
	import iconFairmark from '$lib/assets/AppIcons/Fairmark.svg?raw';
	import iconPomodorre from '$lib/assets/AppIcons/Pomodorre.svg?raw';

	import screenshotTaskie from '$lib/assets/Screenshots/Taskie.jpeg';
	import screenshotAnchor from '$lib/assets/Screenshots/Anchor.jpeg';
	import screenshotFairmark from '$lib/assets/Screenshots/Fairmark.jpeg';
	import screenshotPomodorre from '$lib/assets/Screenshots/Pomodorre.jpeg';

	let folderTabs = [
		{
			id: 'about',
			label: 'about',
			color1: '#FFFBE2',
			color2: '#EFCC68',
			borderColor1: '#836808',
			borderColor2: '#E5C526',
			component: About,
			props: {}
		},
		{
			id: 'taskie',
			label: 'taskie',
			color1: '#F4F0F8',
			color2: '#6DF3FF',
			borderColor1: '#00AAF0',
			borderColor2: '#8FF0FB',
			component: AppViewer,
			props: {
				icon: iconTaskie,
				appName: 'Taskie',
				description: 'is an advanced, intuitive and user-friendly to-do list app, designed to prioritize your privacy and productivity. customize your lists, add subtasks, attachments or timers to tasks, and enjoy a clean, distraction-free interface that helps you focus on what matters most.',
				screenshot: screenshotTaskie,
				githubLink: 'https://github.com/shfrlabs/Taskie',
				microsoftStoreLink: 'https://apps.microsoft.com/detail/9n201wbcfj91'
			}
		},
		{
			id: 'anchor',
			label: 'anchor',
			color1: '#DFD7EE',
			color2: '#96A4D0',
			borderColor1: '#5570B5',
			borderColor2: '#7D60BB',
			component: AppViewer,
			props: {
				icon: iconAnchor,
				appName: 'Anchor',
				description: 'is an all-in-one dashboard for all my apps! pause a timer from Pomodorre, tick off a task in Taskie, or open a recent Fairmark note from one, customizable flyout that pops up from your system tray and starts with your system.',
				screenshot: screenshotAnchor,
				githubLink: 'https://github.com/shfrlabs/FocusProject',
				microsoftStoreLink: 'https://apps.microsoft.com/detail/9n0kfl71glj2'
			}
		},
		{
			id: 'fairmark',
			label: 'fairmark',
			color1: '#E6DFED',
			color2: '#896CDD',
			borderColor1: '#953AD9',
			borderColor2: '#664EB0',
			component: AppViewer,
			props: {
				icon: iconFairmark,
				appName: 'Fairmark',
				description: 'is a Markdown-powered note editor, focused on privacy and note organization with advanced tagging.',
				screenshot: screenshotFairmark,
				githubLink: 'https://github.com/shfrlabs/Fairmark',
				microsoftStoreLink: 'https://apps.microsoft.com/detail/9pdm2qk92715'
			}
		},
		{
			id: 'pomodorre',
			label: 'pomodorre',
			color1: '#E1FBF0',
			color2: '#3DE69D',
			borderColor1: '#138A6B',
			borderColor2: '#27BA7A',
			component: AppViewer,
			props: {
				icon: iconPomodorre,
				appName: 'Pomodorre',
				description: 'is an advanced pomodoro timer to help you get motivated, keep track of your sessions, and plan your deep work.',
				screenshot: screenshotPomodorre,
				githubLink: 'https://github.com/shfrlabs/Pomodorre',
				microsoftStoreLink: 'https://apps.microsoft.com/detail/9ngzm5vkh0dx'
			}
		}
	];
</script>

<main class="showcase">
	<header class="hero">
		
		<div class="actions">
			<Button variant="primary">
				button style
			</Button>ř
		</div>
	</header>

	<section class="component-section">
		
		<Folder tabs={folderTabs} />
	</section>
</main>

<style>
	.showcase {
		max-width: 1200px;
		margin: 0 auto;
		padding: 4rem 2rem;
		display: flex;
		flex-direction: column;
		gap: 6rem;
	}

	.hero {
		text-align: center;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1.5rem;
		animation: slide-down 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
		opacity: 0;
		transform: translateY(-20px);
	}

	@keyframes slide-down {
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	h1 {
		font-size: 4rem;
		font-weight: 800;
		margin: 0;
		line-height: 1.1;
		letter-spacing: -0.03em;
	}

	h1 span {
		background: linear-gradient(135deg, #a855f7 0%, #ec4899 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	.hero p {
		font-size: 1.25rem;
		color: var(--text-secondary);
		max-width: 600px;
		margin: 0;
		line-height: 1.6;
	}

	.actions {
		display: flex;
		gap: 1rem;
		margin-top: 1rem;
	}

	.component-section {
		display: flex;
		flex-direction: column;
		gap: 2.5rem;
		animation: fade-in-up 1s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards;
		opacity: 0;
		transform: translateY(30px);
	}

	@keyframes fade-in-up {
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.section-header {
		text-align: center;
	}

	.section-header h2 {
		font-size: 2.5rem;
		font-weight: 700;
		margin: 0 0 0.5rem 0;
	}

	.section-header p {
		color: var(--text-secondary);
		font-size: 1.1rem;
		margin: 0;
	}
</style>
