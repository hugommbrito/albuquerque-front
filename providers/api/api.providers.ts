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

	static async getHomePageInfo() {
		const requestUrl = `/home-page-info`;

		const response = await apiController.get(requestUrl)
			.then((res) => res)
			.catch((err) => {
				console.error('Error fetching home page info:', err);
				return err;
			});

		return response;
	}

	static async getNossaHistoriaPageInfo() {
		const requestUrl = `/about-us`;

		const response = await apiController.get(requestUrl)
			.then((res) => res)
			.catch((err) => {
				console.error('Error fetching nossa historia page info:', err);
				return err;
			});

		return response;
	}

	static async getSeuSonhoPageInfo() {
		const requestUrl = `/your-dreams`;

		const response = await apiController.get(requestUrl)
			.then((res) => res)
			.catch((err) => {
				console.error('Error fetching seu sonho page info:', err);
				return err;
			});

		return response;
	}

	static async getAssistenciaTecnicaPageInfo() {
		const requestUrl = `/service-solicitation`;

		const response = await apiController.get(requestUrl)
			.then((res) => res)
			.catch((err) => {
				console.error('Error fetching assistencia tecnica page info:', err);
				return err;
			});

		return response;
	}

}

export class sendEmailProvider {
	static async EmailMessage(data: {
		name: string;
		phone: string;
		message: string;
	}) {
		const requestUrl = `/send-email`;

		const response = await apiController.post(requestUrl, data)
			.then((res) => res)
			.catch((err) => {
				console.error('Error sending email message:', err);
				return err;
			});

		return response;
	}

	static async AssistenciaTecnicaRequest(data: {
		venture: string;
		unit: string;
		name: string;
		document: string;
		phone: string;
		email: string;
		description: string;
		acceptedTerms: boolean;
	}) {
		const requestUrl = `send-service-solicitation`;

		const response = await apiController.post(requestUrl, data)
			.then((res) => res)
			.catch((err) => {
				console.error('Error sending assistencia tecnica request:', err);
				return err;
			});

		return response;
	}
}
