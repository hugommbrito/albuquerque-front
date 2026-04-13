export const dynamic = 'force-dynamic';

import BlogRegularArticlesList from '../../components/blog/ArticleList';
import BlogHighlightedArticle from '../../components/blog/HighlightedArticle';
import BlogHero from '../../components/blog/Hero';
import { BlogPageInfo } from '@/components/blog/types';
import { PageContentProvider } from '@/providers/api/api.providers';
import UnderConstruction from '@/components/zGeneral/underConstruction';

export default async function BlogPage() {
	const ArticlesInfo = await PageContentProvider.getBlogArticles() as BlogPageInfo | null;

	if (ArticlesInfo?.highlighted_articles.length === 0 && ArticlesInfo?.regular_articles.length === 0) {
		return <UnderConstruction />;
	}

	return (
		<div className="text-primary">
			<BlogHero
				desktopCoverImageUrl={ArticlesInfo?.desktop_cover_image_url ?? ''}
				mobileCoverImageUrl={ArticlesInfo?.mobile_cover_image_url ?? ''}
			/>
			<main className="px-4 py-8 md:p-18 mx-auto space-y-16">
				{ArticlesInfo?.highlighted_articles.map((currentHighlight, index) => {
					let currentRegularIndex = 0;
					let lastRegularIndex = 0;

					if (index + 1 == ArticlesInfo.highlighted_articles.length) {
						currentRegularIndex = index * 4;
						lastRegularIndex = ArticlesInfo.regular_articles.length - 1;
					} else if (index * 4 + 3 > ArticlesInfo.regular_articles.length) {
						currentRegularIndex = index * 4;
						lastRegularIndex = ArticlesInfo.regular_articles.length - 1;
					} else if (index * 4 > ArticlesInfo.regular_articles.length) {
						lastRegularIndex = -1;
					} else {
						currentRegularIndex = index * 4;
						lastRegularIndex = currentRegularIndex + 3;
					}

					const selectedRegularArticlesList = [];
					while (currentRegularIndex <= lastRegularIndex) {
						selectedRegularArticlesList.push(
							ArticlesInfo.regular_articles[currentRegularIndex]
						);
						currentRegularIndex += 1;
					}

					return (
						<div key={index}>
							<BlogHighlightedArticle
								featuredArticle={currentHighlight}
								key={currentHighlight.id}
							/>
							<BlogRegularArticlesList
								articles={selectedRegularArticlesList}
								key={`regular-articles-list-${index}`}
							/>
						</div>
					);
				})}
			</main>
		</div>
	);
}
