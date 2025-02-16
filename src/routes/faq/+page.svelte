<script lang="ts">
	import FlexDownloadButtons from '$lib/components/FlexDownloadButtons.svelte';
	import DocHeader from '$lib/components/DocHeader.svelte';
	import copyBankAccountNumber from '$lib/copyBankAccNo';
</script>

<svelte:head>
	<title>Frequently Asked Questions</title>
</svelte:head>

{#snippet beggingEntry()}
	<ul class="list-inside list-disc">
		<li>
			<a href="https://buymeacoffee.com/sadespresso">Buy me a coffee</a>
		</li>
		<li>Skrill: batmend@gege.mn</li>
		<li>
			Golomt Bank (of Mongolia): <button
				class="appearance-none font-bold"
				type="button"
				title="Click to copy my Golomt Bank of Mongolia account number"
				onclick={copyBankAccountNumber}
			>
				1105415662
			</button> (Batmend Ganbaatar)
		</li>
	</ul>
{/snippet}

<section class="flex flex-col items-center justify-center gap-4">
	<div class="flex max-w-screen-md flex-col">
		<h1 class="mb-8">Frequently Asked Questions</h1>

		<DocHeader id="what-is-flow">What is Flow?</DocHeader>

		<p>
			Flow is a free and open-source personal finance tracking app. As Flow is offline, you are in
			control of your data.
		</p>

		<DocHeader id="where-do-i-download-flow">Where do I download Flow?</DocHeader>

		<p>You can download Flow from:</p>
		<br />
		<FlexDownloadButtons />
		<br />

		<DocHeader id="can-i-export-all-of-my-data">Can I export all of my data?</DocHeader>

		<p>
			Yes, you can export JSON/ZIP backups which you can import it to another device, and CSV files
			for analyzing your data in spreadsheet software (i.e., Excel, Google Sheets), which is not
			recoverable like JSON/ZIP backups.
		</p>

		<DocHeader id="importing-erased-my-data-how-to-recover">
			Importing erased my data, how to recover?
		</DocHeader>

		<p>
			Flow does a precaution backup before starting to import. You can find the backup in <b
				>Profile tab &gt; Backup &gt; Backup history</b
			>.
		</p>
		<br />
		<ul class="list-inside list-disc">
			<li>Please note that the precaution isn't guaranteed to succeed</li>
			<li>
				Also iOS clears the temporary storage periodically, so you may find the backup file deleted
				if too much time has passed.
			</li>
		</ul>

		<DocHeader id="does-flow-have-online-sync">Does Flow have online sync?</DocHeader>

		<p>
			No. It's planned, and is likely to take quite some time. In the meantime, I recommend doing
			periodic backups to avoid data loss.
		</p>

		<DocHeader id="will-flow-have-online-sync">Will Flow have online sync?</DocHeader>

		<p>
			Yes, it will. It's likely to take quite some time. In the meantime, I recommend doing periodic
			backups to avoid data loss.
		</p>

		<DocHeader id="does-flow-work-offline">Does Flow work offline?</DocHeader>

		<p>
			Yes, Flow doesn't require internet except for gather exchange rates data.
			<br />
			Flow doesn't need exchange rates if you use only one currency.
		</p>

		<DocHeader id="does-flow-support-multi-currency">Does Flow support multi-currency</DocHeader>

		<p>
			Yes. Flow can generate reports, summaries involving accounts with different currency.
			<br />
			Reports are always displayed in your primary currency.
			<br />
			<span class="opacity-60">Cross-currency transfers are not available at the moment.</span>
		</p>

		<DocHeader id="can-i-make-transfers-between-different-currency-accounts">
			Can I make transfers between different currency accounts?
		</DocHeader>

		<p>
			No, at the moment, it's not possible. This feature is planned, and is expected to be out in
			the near future.
		</p>

		<DocHeader id="is-flow-free">Is Flow free?</DocHeader>

		<p>
			Yes, Flow is absolutely free. All of the features are available for free without any
			limitations. Please consider supporting if you can as I make Flow on the side, and does not
			generate money off of it ^^
		</p>
		<br />
		{@render beggingEntry()}

		<DocHeader id="how-many-accounts-can-i-have-at-max"
			>How many accounts can I have at max?</DocHeader
		>

		You can have as many accounts as you want.

		<DocHeader id="i-dont-find-x-features-will-it-be-implemented">
			I don't find X features, will it be implemented?
		</DocHeader>

		<p>
			If you have ideas to make Flow better, please submit it to our GitHub
			<a href="https://github.com/flow-mn/flow/issues" target="_blank">issue tracker</a>. As long as
			it aligns with Flow's vision, it will be implemented.
		</p>

		<DocHeader id="why-is-flow-free-and-or-open-source"
			>Why is Flow free and/or open-source?</DocHeader
		>

		<p>
			Many benefit from open source, including me. And this is my small contribution. Please
			consider supporting if you can as I make Flow on the side, and does not generate money off of
			it ^^
		</p>
		<br />
		{@render beggingEntry()}

		<DocHeader id="can-i-add-recurring-transactions">Can I add recurring transactions?</DocHeader>

		<p>No, not at the moment, but it's planned.</p>

		<DocHeader id="how-do-i-contact-the-maintainer">How do I contact the maintainer?</DocHeader>

		<p>You can contact through any of the following channels:</p>
		<br />
		<ul class="list-inside list-disc">
			<li><a href="mailto:batmend@gege.mn" target="_blank">batmend@gege.mn</a></li>
			<li><a href="mailto:flow@gege.mn" target="_blank">flow@gege.mn</a></li>
			<li><a href="https://discord.gg/Ndh9VDeZa4" target="_blank">Flow's discord channel</a></li>
			<li>
				More contact information on <a href="https://dev.gege.mn/#contact" target="_blank"
					>https://dev.gege.mn</a
				>
			</li>
		</ul>
	</div>
</section>

<style>
	p {
		@apply mt-2 max-w-prose;
	}
</style>
