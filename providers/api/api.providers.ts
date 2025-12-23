import { apiController } from './api.controller';

export class PageContentProvider {
	static async getVentureInfo(slug: string | undefined = undefined) {
		const requestUrl = slug ? `/venture/${slug}` : '/venture';

		const response = await apiController
			.get(requestUrl)
			.then((res) => res)
			.catch((err) => {
				console.error('Error fetching venture info:', err);
				return err;
			});

		return response;
	}

	static async getBlogArticles(slug: string | undefined = undefined) {
		const requestUrl = slug ? `/blog/${slug}` : '/blog';

		const response = await apiController
			.get(requestUrl)
			.then((res) => res)
			.catch((err) => {
				console.error('Error fetching blog articles:', err);
				return err;
			});

		return response;
	}


}
