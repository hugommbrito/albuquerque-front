export type ProjectBreadcrumb = {
	label: string;
	href: string;
};

export type ProjectAmenity = {
	label: string;
	value: string;
};

export type ProjectInfo = {
	slug: string;
	name: string;
	subtitle: string;
	heroImage: string;
	breadcrumb: ProjectBreadcrumb[];
	location: string;
	status: string;
	deliveryYear: string;
	typologies: string[];
	amenities: ProjectAmenity[];
};

export type ProjectGalleryData = {
	highlight: string;
	secondary: string[];
};

export type ProjectFloorPlan = {
	id: string;
	label: string;
	description: string[];
	image: string;
};
