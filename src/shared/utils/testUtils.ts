export const checkTypeComponent = () => {
	if (typeof window !== 'undefined') {
		console.log('Client Component');
	} else {
		console.log('Server Component');
	}
};
