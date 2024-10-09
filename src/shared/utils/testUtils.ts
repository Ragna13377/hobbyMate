export const checkTypeComponent = () => {
	console.log(typeof window !== 'undefined' ? 'Client Component' : 'Server Component');
};
