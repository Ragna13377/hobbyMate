export type privacyContentType = (string | string[] | privacyData)[];
export type privacyData = {
	title: string;
	content: privacyContentType;
};
