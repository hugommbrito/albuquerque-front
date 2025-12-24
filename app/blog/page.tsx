'use client';

import Link from 'next/link';
import BlogAdditionalArticles from '../../components/blog/AdditionalArticles';
import BlogRegularArticlesList from '../../components/blog/ArticleList';
import BlogHighlightedArticle from '../../components/blog/HighlightedArticle';
import BlogHero from '../../components/blog/Hero';
import BlogHighlightBanner from '../../components/blog/HighlightBanner';
import { BlogPageInfo } from '@/components/blog/types';
import { useEffect, useState } from 'react';
import { PageContentProvider } from '@/providers/api/api.providers';
import LoadingAbq from '@/components/zGeneral/LoadingAbq';

export default function BlogPage() {
	const [ArticlesInfo, setArticlesInfo] = useState<BlogPageInfo | undefined>(
		undefined
	);
	const [isLoading, setIsLoading] = useState<boolean>(true);

	useEffect(() => {
		setIsLoading(true);
		async function fetchArticlesInfo() {
			const response = await PageContentProvider.getBlogArticles();

			if (response instanceof Error) {
				console.error('Error fetching blog articles: ', response);
				setIsLoading(false);
			} else {
				setArticlesInfo(response as BlogPageInfo);
				setIsLoading(false);
			}
		}
		fetchArticlesInfo();

		return () => {};
	}, []);

	return (
		<div className="text-primary">
			<BlogHero />
			<main className="px-4 py-8 md:p-18 mx-auto space-y-16">
				{isLoading ? (
					<LoadingAbq />
				) : (
					ArticlesInfo?.highlighted_articles.map((currentHighlight, index) => {
						let currentRegularIndex = 0;
						let lastRegularIndex = 0;

						if (index + 1 == ArticlesInfo.highlighted_articles.length) {
							// último highlighted article
							currentRegularIndex = index * 4;
							lastRegularIndex = ArticlesInfo.regular_articles.length - 1;
						} else if (index * 4 + 3 > ArticlesInfo.regular_articles.length) {
							// tem menos que 4 regular articles restantes
							currentRegularIndex = index * 4;
							lastRegularIndex = ArticlesInfo.regular_articles.length - 1;
						} else if (index * 4 > ArticlesInfo.regular_articles.length) {
							// não tem mais regular articles restantes
							lastRegularIndex = -1;
						} else {
							// tem 4 ou mais regular articles restantes
							currentRegularIndex = index * 4;
							lastRegularIndex = currentRegularIndex + 3;
						}

						let selectedRegularArticlesList = [];
						while (currentRegularIndex <= lastRegularIndex) {
							selectedRegularArticlesList.push(
								ArticlesInfo.regular_articles[currentRegularIndex]
							);
							currentRegularIndex += 1;
						}

						let sugestedArticles = [];
						const allArticles = [
							...ArticlesInfo.highlighted_articles,
							...ArticlesInfo.regular_articles,
						];
						for (let i = 0; i < 3; i++) {
							sugestedArticles.push(
								allArticles[(Math.random() * allArticles.length) | 0]
							);
						}

						return (
							<>
								<BlogHighlightedArticle featuredArticle={currentHighlight} />
								<BlogRegularArticlesList
									articles={selectedRegularArticlesList}
								/>
							</>
						);
					})
				)}

				{/* <BlogHighlightedArticle />
				<BlogRegularArticlesList sessionTitle='Mais artigos'/> */}
				{/* <BlogHighlightBanner /> */}
				{/* <BlogAdditionalArticles /> */}
			</main>
		</div>
	);
}
