<script lang="ts">
	import Folder from '$lib/Folder.svelte';
	import Button from '$lib/Button.svelte';
	import Link from '$lib/Link.svelte';
	import AppViewer from '$lib/AppViewer.svelte';
	import About from '$lib/About.svelte';
	import Actions from '$lib/Actions.svelte';

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

<main class="page-container">
	<!-- Section 1 -->
	<section class="section-1 showcase">
		<div class="s1-left">
			<div class="s1-content">
				<h2>Hi there!</h2>
				<p>You just found my website! I'm Bruno (or shefer) and I do web design and .NET development (so far).</p>	
				<p>I currently have 4 public apps, which you can check out using the folder, and even more repos on the GitHub page below.</p>
				<p>Scroll down to see more and find quick links.</p>
			</div>
			<div class="s1-centered-text">
				<p>designed and built by shefer · last updated on august 18th, 2026</p>
			</div>
		</div>
		<div class="s1-right">
			<Folder tabs={folderTabs} />
		</div>
	</section>

	<!-- Section 2 -->
	<section class="section-2">
		<div class="s2-content">
			<div class="s2-left">
				<p>I'm always looking for new app testers! Sign up to share feedback.</p>
			</div>
			<div class="s2-right">
				<Link link="https://share.formgrid.com/A0avJP0iQQAgr5fK" text="sign-up form" showArrow={false}/>
			</div>
		</div>
	</section>

	<!-- Section 3 -->
	<section class="section-3 showcase">
		<Actions />
	</section>
</main>

<style>
	:global(body) {
		margin: 0;
		padding: 0;
	}

	.page-container {
		display: flex;
		flex-direction: column;
		gap: 2rem;
		padding-top: 4rem;
		padding-bottom: 4rem;
	}

	.showcase {
		max-width: 1500px;
		width: 100%;
		margin: 0 auto;
		padding: 0 2rem;
		box-sizing: border-box;
	}

	.section-1 {
		display: flex;
		flex-direction: row;
		gap: 2rem;
		align-items: stretch;
		animation: fade-in-up 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
	}

	.s1-left {
		flex: 1.5;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.s1-content h2 {
		font-size: 2.5rem;
		font-weight: 700;
		margin-top: 0;
		margin-bottom: 1.5rem;
	}

	.s1-content p {
		font-size: 1.35rem;
		color: var(--text-secondary, #4b5563);
		line-height: 1.6;
		margin-bottom: 1.25rem;
	}

	.s1-centered-text {
		margin-top: 2rem;
		text-align: center;
		font-weight: 400;
		font-size: 1rem;
		color: var(--text-primary, #111827);
		opacity: 0.7;
	}

	.s1-right {
		flex: 1;
		display: flex;
		justify-content: stretch;
		align-items: flex-start;
	}

	.section-2 {
		width: 100%;
		background: linear-gradient(135deg, white 0%, #CEEAF7 150%);
		padding: 1.5rem 0;
		border-radius: 0;
	}

	.s2-content {
		max-width: 1500px;
		width: 100%;
		margin: 0 auto;
		padding: 0 2rem;
		box-sizing: border-box;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	.s2-left {
		flex: 1;
		text-align: left;
	}

	.s2-left p {
		font-size: 1.1rem;
		margin: 0;
		font-weight: 400;
	}

	.s2-right {
		flex-shrink: 0;
	}

	.section-3 {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 2rem;
	}

	@keyframes fade-in-up {
		from {
			opacity: 0;
			transform: translateY(30px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	@media (min-width: 921px) and (max-width: 1600px) {
		.s1-left {
			flex: 1;
		}

		.s1-right {
			margin-right: 3rem;
		}

		.s1-content h2 {
			font-size: 2rem;
		}

		.s1-content p {
			font-size: 1.15rem;
		}
	}

	@media (max-width: 920px) {
		.section-1 {
			flex-direction: column;
		}

		.s1-left {
			margin-right: 3rem;
		}

		.s1-right {
			width: 100%;
			justify-content: center;
			margin-top: 2rem;
		}

		.s2-content {
			flex-direction: column;
			gap: 1rem;
			text-align: center;
		}
		
		.s2-left {
			text-align: center;
		}
	}
</style>
