export type VenturesPageInfo = {
	statuses: VentureStatusInfo[];
	desktop_cover_image_url: string;
	mobile_cover_image_url: string;
};

export type VentureStatusInfo = {
	id: string;
	name: string;
	ventures: [
		{
			id: string;
			name: string;
			slug: string;
			short_description: string;
			location: string;
			total_units: string;
			hero_image_url: string;
		}
	];
}
