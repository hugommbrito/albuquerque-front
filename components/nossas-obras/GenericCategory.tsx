import { useMemo } from 'react';
import ButtonLinkAbq from '../zGeneral/buttonLinkAbq';
import Card from '../zGeneral/Card';
import { CategoriesPageInfo, VentureCategoryInfo } from './types';

type GenericCategoryProps = {
	category: VentureCategoryInfo;
	colorInvert?: boolean;
};

export default function GenericCategory({
	category,
	colorInvert,
}: GenericCategoryProps) {
	const collors = useMemo(() => ({
		background: colorInvert ? 'bg-primary-invert' : 'bg-primary',
		titleBackground: colorInvert ? 'bg-primary-5' : 'bg-primary-4',
		titleChipBg: colorInvert ? 'bg-primary border-primary' : ' bg-primary-3 border-primary-3',
		titleText: 'text-primary-invert',
	}), [colorInvert]);
	return (
		<section className={`px-4 md:px-15 py-25 ${collors.background}`}>
			<div className={`flex justify-between rounded-full ${collors.titleBackground} p-4 my-6`}>
				<span
					className={`
        rounded-full border
        ${collors.titleChipBg}
        ${collors.titleText} text-20 font-500
        px-6 h-12 flex items-center justify-center`}
				>
					{category.name}
				</span>
			</div>
			<div className="grid gap-6 grid-cols-1 md:grid-cols-2">
				{category.ventures.map((residence, index) => {
					return (
						<Card
							key={residence.id}
							title={residence.name}
							subtitle={residence.short_description}
							image={residence.hero_image_url}
							className=""
							href={`/nossas-obras/${residence.slug}`}
							location={residence.location}
							status={residence.status}
							units={residence.total_units}
							width={category.ventures.length % 2 === 1 && index === category.ventures.length - 1 ? 'full' : 'single'}
						/>
					);
				})}
			</div>
		</section>
	);
}
