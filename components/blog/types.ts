export type BlogArticleInfo = {
	article: {
		id: string;
		title: string;
		slug: string;
		tag: string;
		short_description: string;
		cover_image_url: string;
		content: string;
		created_at: string;
	}
	suggested_articles?: {
		id: string;
		title: string;
		slug: string;
		short_description: string;
		cover_image_url: string;
	}[]
}

export type BlogPageInfo = {
	highlighted_articles: BlogArticleInfo['article'][];
	regular_articles: BlogArticleInfo['article'][];
};
