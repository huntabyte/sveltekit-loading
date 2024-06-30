<script>
	/** @type {import('./$types').PageData} */
	export let data;
	const { products } = data;
</script>

<h1>Shop [Products: {products.length}]</h1>
{#each products as product}
	<h2>{product.title}</h2>
	<p>{product.description}</p>
{/each}
