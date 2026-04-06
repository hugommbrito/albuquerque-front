'use client';

import HomeContact from '@/components/home/HomeContact';
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
import SeuSonhoFinancingCta from '@/components/seu-sonho/FinancingCta';
import LoadingAbq from '@/components/zGeneral/LoadingAbq';
import { PageContentProvider } from '@/providers/api/api.providers';
import * as PhosporIcons from '@phosphor-icons/react';
import { use, useEffect, useState } from 'react';

// const project = JSON.parse(importedProject) as ProjectInfo;

// const project: ProjectInfo = {
// 	slug: 'parque-reseda',
// 	name: 'Parque Resedá',
// 	subtitle: 'Seu sonho se tornou o nosso.',
// 	heroImage: '/home-page/mock/Rectangle 19.svg',
// 	heroHighlights: [
// 		{ label: 'Localização', info: 'Miramar' },
// 		{ label: 'Quartos', info: '3-4' },
// 		{ label: 'Entrega', info: '2025' },
// 	],
// 	breadcrumb: [
// 		{ label: 'Empreendimentos', href: '/nossas-obras' },
// 		{ label: 'Parque Resedá', href: '#' },
// 	],
// 	location: 'Miramar',
// 	status: 'Em construção',
// 	lastUnits: true,
// 	amenities: [
// 		{ label: 'SwimmingPool', value: 'Piscina', span: 1 },
// 		{ label: 'Oven', value: 'Área Gourmet', span: 1 },
// 		{ label: 'Car', value: '3 Vagas de garagem', span: 2 },
// 	],
// 	floorPlans: [
// 		{
// 			id: 'apt-1',
// 			name: 'Apt 1 Quarto',
// 			descriptionList: [
// 				'Área - 67m²',
// 				'1 Suíte Master',
// 				'Sala de estar + jantar',
// 				'Cozinha americana',
// 				'1 vaga de garagem',
// 			],
// 			images: [
// 				{
// 					is_highlight: false,
// 					url: '/nossas-obras/mock/resedaPlanta-2.png',
// 					unit: 'Apt 1 Quarto',
// 				},
// 				{
// 					is_highlight: false,
// 					url: '/nossas-obras/mock/resedaInterno-1.png',
// 					unit: 'Apt 1 Quarto',
// 				},
// 				{
// 					is_highlight: false,
// 					url: '/nossas-obras/mock/resedaInterno-2.png',
// 					unit: 'Apt 1 Quarto',
// 				},
// 				{
// 					is_highlight: false,
// 					url: '/nossas-obras/mock/resedaInterno-3.png',
// 					unit: 'Apt 1 Quarto',
// 				},
// 				{
// 					is_highlight: false,
// 					url: '/nossas-obras/mock/resedaInterno-4.png',
// 					unit: 'Apt 1 Quarto',
// 				},
// 				{
// 					is_highlight: false,
// 					url: '/nossas-obras/mock/resedaInterno-5.png',
// 					unit: 'Apt 1 Quarto',
// 				},
// 			],
// 		},
// 		{
// 			id: 'apt-2',
// 			name: 'Apt 2 Quartos',
// 			descriptionList: [
// 				'Área - 91m²',
// 				'2 Suítes',
// 				'Varanda gourmet',
// 				'Living integrado',
// 				'2 vagas de garagem',
// 			],
// 			images: [
// 				{
// 					is_highlight: false,
// 					url: '/nossas-obras/mock/resedaPlanta-1.png',
// 					unit: 'Apt 2 Quartos',
// 				},
// 				{
// 					is_highlight: false,
// 					url: '/nossas-obras/mock/resedaInterno-1 copy.png',
// 					unit: 'Apt 2 Quartos',
// 				},
// 				{
// 					is_highlight: false,
// 					url: '/nossas-obras/mock/resedaInterno-2 copy.png',
// 					unit: 'Apt 2 Quartos',
// 				},
// 				{
// 					is_highlight: false,
// 					url: '/nossas-obras/mock/resedaInterno-3 copy.png',
// 					unit: 'Apt 2 Quartos',
// 				},
// 				{
// 					is_highlight: false,
// 					url: '/nossas-obras/mock/resedaInterno-4 copy.png',
// 					unit: 'Apt 2 Quartos',
// 				},
// 				{
// 					is_highlight: false,
// 					url: '/nossas-obras/mock/resedaInterno-5 copy.png',
// 					unit: 'Apt 2 Quartos',
// 				},
// 			],
// 		},
// 	],
// 	areas: ['Academia', 'Salão de festas', 'Piscina'],
// 	galeries: {
// 		highlighted: [
// 			{ is_highlight: true, url: '/nossas-obras/mock/resedaInterno-5.png' },
// 			{ is_highlight: false, url: '/nossas-obras/mock/resedaInterno-1.png' },
// 			{ is_highlight: false, url: '/nossas-obras/mock/resedaComum-9.jpg' },
// 		],
// 		units: [
// 			{
// 				id: 'apt-1',
// 				name: 'Apt 1 Quarto',
// 				images: [
// 					{
// 						is_highlight: false,
// 						url: '/nossas-obras/mock/resedaPlanta-2.png',
// 						unit: 'Apt 1 Quarto',
// 					},
// 					{
// 						is_highlight: false,
// 						url: '/nossas-obras/mock/resedaInterno-1.png',
// 						unit: 'Apt 1 Quarto',
// 					},
// 					{
// 						is_highlight: false,
// 						url: '/nossas-obras/mock/resedaInterno-2.png',
// 						unit: 'Apt 1 Quarto',
// 					},
// 					{
// 						is_highlight: false,
// 						url: '/nossas-obras/mock/resedaInterno-3.png',
// 						unit: 'Apt 1 Quarto',
// 					},
// 					{
// 						is_highlight: false,
// 						url: '/nossas-obras/mock/resedaInterno-4.png',
// 						unit: 'Apt 1 Quarto',
// 					},
// 					{
// 						is_highlight: false,
// 						url: '/nossas-obras/mock/resedaInterno-5.png',
// 						unit: 'Apt 1 Quarto',
// 					},
// 				],
// 			},
// 			{
// 				id: 'apt-2',
// 				name: 'Apt 2 Quartos',
// 				images: [
// 					{
// 						is_highlight: false,
// 						url: '/nossas-obras/mock/resedaPlanta-1.png',
// 						unit: 'Apt 2 Quartos',
// 					},
// 					{
// 						is_highlight: false,
// 						url: '/nossas-obras/mock/resedaInterno-1 copy.png',
// 						unit: 'Apt 2 Quartos',
// 					},
// 					{
// 						is_highlight: false,
// 						url: '/nossas-obras/mock/resedaInterno-2 copy.png',
// 						unit: 'Apt 2 Quartos',
// 					},
// 					{
// 						is_highlight: false,
// 						url: '/nossas-obras/mock/resedaInterno-3 copy.png',
// 						unit: 'Apt 2 Quartos',
// 					},
// 					{
// 						is_highlight: false,
// 						url: '/nossas-obras/mock/resedaInterno-4 copy.png',
// 						unit: 'Apt 2 Quartos',
// 					},
// 					{
// 						is_highlight: false,
// 						url: '/nossas-obras/mock/resedaInterno-5 copy.png',
// 						unit: 'Apt 2 Quartos',
// 					},
// 				],
// 			},
// 		],
// 		areas: [
// 			{
// 				id: 'academia',
// 				name: 'Academia',
// 				images: [
// 					{
// 						is_highlight: false,
// 						url: '/nossas-obras/mock/resedaComum-1.jpg',
// 						area: 'Academia',
// 					},
// 					{
// 						is_highlight: false,
// 						url: '/nossas-obras/mock/resedaComum-2.jpg',
// 						area: 'Academia',
// 					},
// 					{
// 						is_highlight: false,
// 						url: '/nossas-obras/mock/resedaComum-3.jpg',
// 						area: 'Academia',
// 					},
// 					{
// 						is_highlight: false,
// 						url: '/nossas-obras/mock/resedaComum-4.jpg',
// 						area: 'Academia',
// 					},
// 					{
// 						is_highlight: false,
// 						url: '/nossas-obras/mock/resedaComum-5.jpg',
// 						area: 'Academia',
// 					},
// 					{
// 						is_highlight: false,
// 						url: '/nossas-obras/mock/resedaComum-6.jpg',
// 						area: 'Academia',
// 					},
// 					{
// 						is_highlight: false,
// 						url: '/nossas-obras/mock/resedaComum-7.jpg',
// 						area: 'Academia',
// 					},
// 					{
// 						is_highlight: false,
// 						url: '/nossas-obras/mock/resedaComum-8.jpg',
// 						area: 'Academia',
// 					},
// 				],
// 			},
// 			{
// 				id: 'salao-de-festas',
// 				name: 'Salão de festas',
// 				images: [
// 					{
// 						is_highlight: false,
// 						url: '/nossas-obras/mock/resedaComum-7.jpg',
// 						area: 'Salão de festas',
// 					},
// 					{
// 						is_highlight: false,
// 						url: '/nossas-obras/mock/resedaComum-6.jpg',
// 						area: 'Salão de festas',
// 					},
// 					{
// 						is_highlight: false,
// 						url: '/nossas-obras/mock/resedaComum-4.jpg',
// 						area: 'Salão de festas',
// 					},
// 					{
// 						is_highlight: false,
// 						url: '/nossas-obras/mock/resedaComum-8.jpg',
// 						area: 'Salão de festas',
// 					},
// 					{
// 						is_highlight: false,
// 						url: '/nossas-obras/mock/resedaComum-3.jpg',
// 						area: 'Salão de festas',
// 					},
// 					{
// 						is_highlight: false,
// 						url: '/nossas-obras/mock/resedaComum-5.jpg',
// 						area: 'Salão de festas',
// 					},
// 					{
// 						is_highlight: false,
// 						url: '/nossas-obras/mock/resedaComum-3.jpg',
// 						area: 'Salão de festas',
// 					},
// 					{
// 						is_highlight: false,
// 						url: '/nossas-obras/mock/resedaComum-1.jpg',
// 						area: 'Salão de festas',
// 					},
// 				],
// 			},
// 			{
// 				id: 'piscina',
// 				name: 'Piscina',
// 				images: [
// 					{
// 						is_highlight: false,
// 						url: '/nossas-obras/mock/resedaComum-1.jpg',
// 						area: 'Piscina',
// 					},
// 					{
// 						is_highlight: false,
// 						url: '/nossas-obras/mock/resedaComum-6.jpg',
// 						area: 'Piscina',
// 					},
// 					{
// 						is_highlight: false,
// 						url: '/nossas-obras/mock/resedaComum-8.jpg',
// 						area: 'Piscina',
// 					},
// 					{
// 						is_highlight: false,
// 						url: '/nossas-obras/mock/resedaComum-7.jpg',
// 						area: 'Piscina',
// 					},
// 					{
// 						is_highlight: false,
// 						url: '/nossas-obras/mock/resedaComum-2.jpg',
// 						area: 'Piscina',
// 					},
// 					{
// 						is_highlight: false,
// 						url: '/nossas-obras/mock/resedaComum-6.jpg',
// 						area: 'Piscina',
// 					},
// 					{
// 						is_highlight: false,
// 						url: '/nossas-obras/mock/resedaComum-8.jpg',
// 						area: 'Piscina',
// 					},
// 					{
// 						is_highlight: false,
// 						url: '/nossas-obras/mock/resedaComum-4.jpg',
// 						area: 'Piscina',
// 					},
// 				],
// 			},
// 		],
// 	},
// 	ytVideoId: 'h6123wm8RWc',
// };

// export async function generateStaticParams() {
// 	return [{ slug: project.slug }];
// }

export default function ProjectDetailPage({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = use(params);

	const [project, setProject] = useState<ProjectInfo | undefined>(undefined);
	const [isLoading, setIsLoading] = useState<boolean>(true);

	useEffect(() => {
		setIsLoading(true);
		async function fetchProject() {
			const response = await PageContentProvider.getVentureInfo(slug);

			if (response instanceof Error) {
				console.error('Error fetching project:', response);
				setIsLoading(false);
			} else {
				console.log('Fetched project:', response);
				setProject(response as ProjectInfo);
				setIsLoading(false);
			}
		}
		fetchProject();

		return () => {};
	}, [slug]);

	if (slug !== project?.slug && !isLoading) {
		return (
			<div className="py-32 text-center text-primary">
				Empreendimento não encontrado.
			</div>
		);
	}
	return (
		<>
			{isLoading && (
				<div className="h-[100vh] text-center text-80 mt-40 text-primary-invert">
					<LoadingAbq />
				</div>
			)}
			{!isLoading && project && (
				<>
					<ProjectHero project={project} />
					<ProjectGallery
						highlightsGallery={project.galeries.highlighted}
						breadcrumbs={project.breadcrumb}
					/>
					<ProjectAmenitiesCta
						amenities={project.amenities}
						status={project.status}
						isLastUnits={project.lastUnits}
						location={project.location}
						unitsCount={project.unitsCount}
					/>
					{project.floorPlans && (
						<ProjectFloorPlans plans={project.floorPlans} />
					)}
					{project.galeries.areas.length > 0 && (
						<ProjectOutdoorGallery
							areas={project.galeries.areas}
							ytVideoId={project.ytVideoId}
						/>
					)}
				</>
			)}
			<SeuSonhoFinancingCta />
			<HomeContact />
		</>
	);
}
