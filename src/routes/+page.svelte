<script>
	let email = '';
</script>

<div class="grid place-items-center">
	<h1
		class="font-display text-9xl text-center bg-clip-text text-transparent bg-gradient-to-b from-black to-gray-500"
	>
		Barrier.studio
	</h1>

	<form name="contact" method="post" data-netlify>
		<div class="flex gap-x-2">
			<input
				class="border-t-black border-l-black border-2 border-b-gray-400 border-r-gray-400"
				type="email"
				name="email"
				value={email}
			/>
			<button
				type="submit"
				class="px-2 bg-gray-900 text-white font-display border-l-2 border-t-2 border-gray-500"
			>
				Submit
			</button>
		</div>
	</form>
</div>
