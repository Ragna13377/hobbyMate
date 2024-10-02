export const calculateProgress = (current: number, length: number, shift: number): number =>
	(100 / length) * (current + 1) - shift;
