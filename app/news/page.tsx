import { generateMetaTitle } from '@shared/utils/metaUtils';
import { NewsFeedPage } from '@pages/news/components/feed';
import { fetchNewsFeed } from '@pages/news/actions';

export const metadata = generateMetaTitle('News');

const NewsFeed = async () => {
	const news = await fetchNewsFeed();
	return <NewsFeedPage news={news || []} />;
};

export default NewsFeed;
