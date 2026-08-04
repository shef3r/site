<script lang="ts">
	import type { Component } from 'svelte';
	
	export type TabItem = {
		id: string;
		label: string;
		color1: string;
		color2: string;
		borderColor1: string;
		borderColor2: string;
		component: Component<any>;
		props: any;
	};

	let { tabs } = $props<{ tabs: TabItem[] }>();
	
	let activeIndex = $state(0);
	
	let activeTab = $derived(tabs[activeIndex]);
</script>

<div class="folder-container">
	<div class="tabs-column">
		{#each tabs as tab, index}
			<button 
				class="tab {activeIndex === index ? 'active' : ''}"
				style="--tab-color1: {tab.color1}; --tab-color2: {tab.color2}; --tab-border-color1: {tab.borderColor1}; --tab-border-color2: {tab.borderColor2};"
				onclick={() => activeIndex = index}
				aria-selected={activeIndex === index}
			>
				<span class="tab-label">{tab.label}</span>
			</button>
		{/each}
	</div>
	
	<div class="content-area" style="--active-color1: {activeTab.color1}; --active-color2: {activeTab.color2}; --active-border1: {activeTab.borderColor1}; --active-border2: {activeTab.borderColor2};">
		<div class="content-wrapper">
			{#if activeTab}
				{#key activeTab.id}
					{@const ActiveComponent = activeTab.component}
					<ActiveComponent {...activeTab.props} />
				{/key}
			{/if}
		</div>
	</div>
</div>

<style>
	.folder-container {
		display: flex;
		width: 700px;
		margin: 0 auto;
	}

	.tabs-column {
		display: flex;
		flex-direction: column;
		z-index: 2;
		margin-bottom: 100px;
	}

	.tab {
		padding: 1.5rem 0;
		width: 48px;
		background: linear-gradient(90deg, var(--tab-color1) 0%, var(--tab-color2) 200%) padding-box, linear-gradient(30deg, var(--tab-border-color1) 0%, var(--tab-border-color2) 100%) border-box;
		border: 1.5px solid transparent;
		border-right: none;
		border-radius: 12px 0 0 12px;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
		overflow: hidden;
	}

	.tab-label {
		writing-mode: vertical-lr;
		transform: rotate(180deg);
		color: black;
		font-weight: 500;
		font-size: 1.5rem;
		font-family: "Michroma", sans-serif;
	}

	.content-area {
		flex: 1;
		background: linear-gradient(65deg, var(--active-color1) 0%, var(--active-color2) 135%) padding-box, linear-gradient(235deg, var(--active-border1), var(--active-border2)) border-box;
		border: 1.5px solid transparent;
		border-radius: 0 16px 16px 16px;
		backdrop-filter: blur(20px);
		position: relative;
		overflow: hidden;
	}

	.content-wrapper {
		padding: 3rem;
		height: 100%;
		display: flex;
		flex-direction: column;
	}
</style>
