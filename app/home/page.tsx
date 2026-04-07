export const dynamic = 'force-dynamic';

import HomeContact from '../../components/home/HomeContact';
import HomeVentures from '../../components/home/HomeVentures';
import HomeBlog from '../../components/home/HomeBlog';
import { HomePageInfo } from '@/components/home/type';
import { PageContentProvider } from '@/providers/api/api.providers';
import HomeCoverImage from '@/components/home/HomeCoverImage';
import SeuSonhoVideoTopics from '@/components/seu-sonho/VideoTopics';

export default async function Home() {
	const homePageInfo = await PageContentProvider.getHomePageInfo() as HomePageInfo | null;

	return (
		<>
			<HomeCoverImage
				desktopCoverImageUrl={homePageInfo?.desktop_cover_image_url || ''}
				mobileCoverImageUrl={homePageInfo?.mobile_cover_image_url || ''}
			/>
			<HomeVentures
				homePageVentures={homePageInfo?.home_page_ventures}
				isLoading={false}
			/>
			<SeuSonhoVideoTopics
				videoTopics={homePageInfo?.instructional_videos || []}
				ebookUrl={homePageInfo?.ebook_url || ''}
			/>
			<HomeBlog
				homePageArticles={homePageInfo?.home_page_articles}
				isLoading={false}
			/>
			<HomeContact />
		</>
	);
}
