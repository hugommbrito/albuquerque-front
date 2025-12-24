'use client';

import { ArrowUpRightIcon } from '@phosphor-icons/react';
import ButtonLinkAbq from '../zGeneral/buttonLinkAbq';
import Card from '../zGeneral/Card';
import { HomePageInfo } from './type';
import LoadingAbq from '../zGeneral/LoadingAbq';

type HomeArea4Props = {
	homePageVentures?: HomePageInfo['home_page_ventures'],
	isLoading: Boolean
}

export default function HomeArea4({homePageVentures, isLoading}: HomeArea4Props) {
	return (
		<section className="py-20 px-4 md:px-15">
			<h2 className="text-32 md:text-48 font-400 text-center">
				A natureza arquiteta as melhores soluções.
			</h2>
			<h2 className="text-32 md:text-48 font-500 text-center">Nós também.</h2>

			<div className="flex justify-between rounded-full bg-primary-5 p-4 my-6">
				<span
					className="
				rounded-full border
				bg-primary border-primary
				text-primary-invert text-16 md:text-20 font-500
				px-6 h-12 flex items-center justify-center "
				>
					Empreendimentos
				</span>
				<ButtonLinkAbq
					href="/nossas-obras"
					text="Ver todos"
					variant="outline"
					backgroundColor="bg-primary-invert"
					borderColor="border-primary-invert"
					hoverBackgroundColor="hover:bg-primary-5"
					hoverBorderColor="hover:border-primary-invert"
					className="text-16 h-12"
					icon={<ArrowUpRightIcon color="black" />}
				/>
			</div>

			<div className="grid gap-6 md:grid-cols-2">
				{isLoading ? <LoadingAbq className='col-span-2' /> : (
					homePageVentures?.map((venture, index) => {
						let cardWidth: 'single' | 'full' = 'single';
						if (
							index === 0 || 
							index % 3 === 0 || 
							(homePageVentures.length % 3 === 1 && index === homePageVentures.length - 1	)
						){
							cardWidth = 'full';
						}
						return (
							<Card
								title={venture.name}
								subtitle={venture.short_description}
								image={venture.hero_image_url}
								className=""
								href={`/nossas-obras/${venture.slug}`}
								width={cardWidth}
								location={venture.location}
								status={venture.status}
								units={venture.total_units}
							/>
						)
					})
				)}
			</div>
		</section>
	);
}
