export const capitalize = (text: string): string => text.charAt(0).toUpperCase() + text.slice(1);

export const toTitleCase = (text: string): string =>
	text
		.replace(/([A-Z])/g, ' $1')
		.replace(/[_-]/g, ' ')
		.trim()
		.replace(/^./, (match) => match.toUpperCase());
