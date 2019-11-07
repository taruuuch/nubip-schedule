function search(value) {
	const requestOptions = {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ value })
	};

	return fetch('', requestOptions)
		.then(response => response.json())
		.then(groups => {
			return groups;
		})
		.catch(error => {
			return error;
		})
};

export const searchService = {
	search
};
