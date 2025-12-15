'use client';

import { CaretLeftIcon } from '@phosphor-icons/react';
import { ProjectGalleryData, ProjectInfo } from './types';

type ProjectGalleryProps = {
	highlightsGallery: ProjectGalleryData[];
	breadcrumbs: ProjectInfo['breadcrumb'];
};

export default function ProjectGallery({
	highlightsGallery,
	breadcrumbs,
}: ProjectGalleryProps) {
	return (
		<section className="px-4 md:px-16 py-12 bg-primary-invert">
			<div className="my-12 flex flex-wrap items-center gap-2 text-12 uppercase tracking-wide text-primary">
				{breadcrumbs.map((item, index) => (
					<span key={item.label} className="flex items-center gap-2">
						{index > 0 ? (
							<span className="text-primary">|</span>
						) : (
							<CaretLeftIcon />
						)}
						{item.url === '#' ? (
							item.label
						) : (
							<a href={item.url}>{item.label}</a>
						)}
					</span>
				))}
			</div>
			<div className="space-y-6">
				{/* <div className="grid gap-4 grid-cols-3"> */}
				<div className="grid gap-1 md:gap-4 grid-cols-2 md:grid-cols-3">
					{highlightsGallery.map((image, index) => {
						const doubledIndexes = [1, 4, 5, 8, 9, 12, 13];
						const tripleIndex = 0;
						let span =
							index === tripleIndex
								? 'col-span-2 md:col-span-3'
								: doubledIndexes.includes(index)
								? 'col-span-2 md:col-span-2'
								: 'col-span-1';

						return (
							<div
								key={image.url}
								className={`h-48 md:h-145 overflow-hidden rounded-md md:rounded-3xl ${span}`}
							>
								<img
									src={image.url}
									alt="Ambiente do empreendimento"
									className="h-full w-full object-cover"
								/>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
