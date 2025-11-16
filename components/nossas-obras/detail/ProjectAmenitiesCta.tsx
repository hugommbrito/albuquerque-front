'use client'

import { ArrowUpRightIcon, FireIcon, MapPinIcon } from '@phosphor-icons/react';
import ButtonLinkAbq from '../../zGeneral/buttonLinkAbq';
import { ProjectAmenity } from './types';

type ProjectAmenitiesCtaProps = {
	amenities: ProjectAmenity[];
	isLastUnits: boolean
	status: string
};

export default function ProjectAmenitiesCta({
	amenities,
	status,
	isLastUnits,
}: ProjectAmenitiesCtaProps) {
	return (
		<section className="px-15 py-20 bg-primary-invert">
			<div className="grid gap-10 grid-cols-2 items-center">
				<div className="space-y-6">
					<h2 className="text-100 leading-30 text-primary">
						Onde <br /> morar é <br /> desfrutar.
					</h2>
				</div>
				<div className="grid gap-6 grid-cols-4">
					<div className="h-30 flex flex-col justify-between rounded-3xl border border-primary/10 bg-primary-5 px-4 py-5">
						<MapPinIcon />
						<p className="text-20 font-500 text-primary mt-2">Miramar</p>
					</div>
					<div className="h-30 flex flex-col justify-between  col-span-2 rounded-3xl border border-primary/10 bg-white px-4 py-5">
						<p className="text-12 uppercase tracking-wide text-primary-3">
							Status
						</p>
						<p className="text-20 font-500 text-primary mt-2">{status}</p>
					</div>
					<div className="h-30 flex flex-col justify-between  rounded-3xl border border-primary/10 bg-white px-4 py-5">
						<p className="text-12 uppercase tracking-wide text-primary-3">
							Unidades
						</p>
						<p className="text-52 font-500 text-primary mt-2">28</p>
					</div>
					{amenities.map((item) => (
						<div
							key={item.value}
							className={`min-h-30 col-span-${item.span} flex flex-col justify-between rounded-3xl border border-primary/10 bg-primary-5 px-4 py-5`}
						>
							{item.label}
							<p className="text-20 font-500 text-primary mt-2">{item.value}</p>
						</div>
					))}
						<div
							className={`min-h-30 col-span-4 flex justify-between items-center rounded-3xl bg-primary p-8`}
						>
							<div>
								{
									isLastUnits && 
									<div className='flex gap-3'>
										<FireIcon size={24} className="text-white mb-2" />
										<p className="text-20 font-500 text-white">
											Últimas unidades
										</p>
									</div>
								}
							</div>
							<ButtonLinkAbq
								href="/contato"
								text="Fale conosco"
								variant="filled"
								icon={<ArrowUpRightIcon />}
								backgroundColor='bg-primary-invert border-primary-invert'
								className='h-12 '
								textColor='text-primary'
							/>

						</div>
				</div>
			</div>
		</section>
	);
}
