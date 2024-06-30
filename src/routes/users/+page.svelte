<script>
	/** @type {import('./$types').PageData} */
	export let data;
	const { users } = data;
</script>

<h1>Users</h1>

{#each users as user}
	<h2>{user.name}</h2>
	<p>{user.email}</p>
{/each}
