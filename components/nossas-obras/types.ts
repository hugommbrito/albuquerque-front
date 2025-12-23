export type CategoriesPageInfo = {
	categories: VentureCategoryInfo[];
};

export type VentureCategoryInfo = {
			id: string;
			name: string;
			ventures: [
				{
					id: string;
					name: string;
					slug: string;
					short_description: string;
					location: string;
					status: string;
					total_units: string;
					hero_image_url: string;
				}
			];
		}