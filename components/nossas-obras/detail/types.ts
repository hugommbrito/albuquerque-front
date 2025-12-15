export type PhosphorIconName = keyof typeof import('@phosphor-icons/react');

export type ProjectHeroHighlights = {
	label: string;
	info: string;
};

export type ProjectBreadcrumb = {
	label: string;
	url: string;
};

export type ProjectAmenity = {
	label: PhosphorIconName;
	value: string;
	span: number;
};

export type ProjectInfo = {
	slug: string;
	name: string;
	subtitle: string;
	heroImage: string;
	heroHighLights: ProjectHeroHighlights[];
	breadcrumb: ProjectBreadcrumb[];
	location: string;
	status: string;
	lastUnits: boolean;
	amenities: ProjectAmenity[];
	floorPlans: ProjectFloorPlan[];
	areas: string[];
	ytVideoId: string | null;
	galeries: {
		highlighted: ProjectGalleryData[];
		units: SpecificGallery[];
		areas: SpecificGallery[];
	};
};

export type ProjectGalleryData = {
	is_highlight: boolean;
	url: string;
	unit?: string;
	area?: string;
};

export type SpecificGallery = {
	id: string;
	name: string;
	images: ProjectGalleryData[];
};

export type ProjectFloorPlan = {
	id: string;
	name: string;
	descriptionList: string[];
	images: ProjectGalleryData[];
};
