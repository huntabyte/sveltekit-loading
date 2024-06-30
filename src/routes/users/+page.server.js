/** @type {import('./$types').PageServerLoad} */

export async function load ({ fetch }) {
	const fetchUsers = async () => {
		const res = await fetch('https://jsonplaceholder.typicode.com/users');
		const data = await res.json();
		return data;
	}

	return {
		users: await fetchUsers()
	};
}