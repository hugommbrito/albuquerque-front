import ProjectAmenitiesCta from '@/components/nossas-obras/detail/ProjectAmenitiesCta';
import ProjectContactForm from '@/components/nossas-obras/detail/ProjectContactForm';
import ProjectFinancing from '@/components/nossas-obras/detail/ProjectFinancing';
import ProjectFloorPlans from '@/components/nossas-obras/detail/ProjectFloorPlans';
import ProjectGallery from '@/components/nossas-obras/detail/ProjectGallery';
import ProjectHero from '@/components/nossas-obras/detail/ProjectHero';
import ProjectOutdoorGallery from '@/components/nossas-obras/detail/ProjectOutdoorGallery';
import {
	ProjectFloorPlan,
	ProjectGalleryData,
	ProjectInfo,
} from '@/components/nossas-obras/detail/types';

const project: ProjectInfo = {
	slug: 'parque-reseda',
	name: 'Parque Resedá',
	subtitle: 'Seu sonho se tornou o nosso.',
	heroImage: '/home-page/mock/Rectangle 19.svg',
	breadcrumb: [
		{ label: 'Empreendimentos', href: '/nossas-obras' },
		{ label: 'Parque Resedá', href: '#' },
	],
	location: 'Miramar',
	status: 'Em construção',
	deliveryYear: '2025',
	typologies: ['1 quarto', '2 quartos', 'Coberturas garden'],
	amenities: [
		{ label: 'Localização', value: 'Miramar' },
		{ label: 'Em construção', value: 'Status' },
		{ label: '28', value: 'Unidades' },
		{ label: 'Piscina', value: 'Lazer' },
		{ label: '3 vagas', value: 'Vagas de garagem' },
	],
};

export async function generateStaticParams() {
	return [{ slug: project.slug }];
}

const gallery: ProjectGalleryData = {
	highlight: '/home-page/mock/Rectangle 19.svg',
	secondary: [
		'/nossas-obras/mock/resedaInterno-1.jpg',
		'/nossas-obras/mock/resedaInterno-2.jpg',
		'/nossas-obras/mock/resedaInterno-3.jpg',
	],
};

const floorPlans: ProjectFloorPlan[] = [
	{
		id: 'apt-1',
		label: 'Apt 1 Quarto',
		description: [
			'Área - 67m²',
			'1 Suíte Master',
			'Sala de estar + jantar',
			'Cozinha americana',
			'1 vaga de garagem',
		],
		image: '/home-page/visual-id/planta-1.jpg',
	},
	{
		id: 'apt-2',
		label: 'Apt 2 Quartos',
		description: [
			'Área - 91m²',
			'2 Suítes',
			'Varanda gourmet',
			'Living integrado',
			'2 vagas de garagem',
		],
		image: '/home-page/visual-id/planta-2.jpg',
	},
];

const outdoorGallery = [
	'/home-page/visual-id/reseda-area-1.jpg',
	'/home-page/visual-id/reseda-area-2.jpg',
	'/home-page/visual-id/reseda-area-3.jpg',
	'/home-page/visual-id/reseda-area-4.jpg',
	'/home-page/visual-id/reseda-area-5.jpg',
	'/home-page/visual-id/reseda-area-6.jpg',
];

const financingPartners = [
	'Minha Casa Minha Vida',
	'Caixa',
	'FGTS',
	'Use seu FGTS',
];

export default function ProjectDetailPage({
	params,
}: {
	params: { slug: string };
}) {
	if (params.slug !== project.slug) {
		return (
			<div className="py-32 text-center text-primary">
				Empreendimento não encontrado.
			</div>
		);
	}

	return (
		<>
			<ProjectHero project={project} />
			<ProjectGallery gallery={gallery} />
			<ProjectAmenitiesCta amenities={project.amenities} />
			<ProjectFloorPlans plans={floorPlans} />
			<ProjectOutdoorGallery images={outdoorGallery} />
			<ProjectFinancing partners={financingPartners} />
			<ProjectContactForm headerImage="/home-page/visual-id/contact.jpg" />
		</>
	);
}
