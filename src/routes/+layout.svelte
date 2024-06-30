<nav>
	<a href="/">Home</a>
	<a href="/shop" data-sveltekit-prefetch>Shop</a>
	<a href="/users" data-sveltekit-prefetch>Users</a>
	<!-- <a href="/movies" data-sveltekit-prefetch>Movies</a> -->
</nav>

<slot />

<style>
	nav {
		display: flex;
	}
	nav a {
		color: blue;
		margin-right: 1rem;
		padding-left: 2ch;
		padding-right: 5ch;
		text-decoration: none;
	}

	nav a:hover {
		background-color: lightgray;
	}
</style>
