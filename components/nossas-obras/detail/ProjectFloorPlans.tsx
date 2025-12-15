'use client'
import { useState } from 'react';
import { ProjectFloorPlan } from './types';

type ProjectFloorPlansProps = {
	plans: ProjectFloorPlan[];
};

export default function ProjectFloorPlans({ plans }: ProjectFloorPlansProps) {
	const primaryPlan = plans[0] 

	const [selectedFloorPlan, setSelectedFloorPlan] = useState(plans[0]);
	const [selectedPlanImage, setSelectedPlanImage] = useState(
		selectedFloorPlan?.images[0]?.url
	);

	console.log(selectedFloorPlan);
	console.log(selectedFloorPlan.descriptionList);

	return (
		<section className="py-20 px-4 md:px-15 bg-primary-invert">
			<div className="flex gap-4 items-center bg-primary-5 p-4 rounded-full ">
				{plans.map((plan, index) => (
					<button
						key={plan.id}
						type="button"
						onClick={() => (setSelectedFloorPlan(plan), setSelectedPlanImage(plan.images[0].url))}
						className={`rounded-full border px-5 py-2 text-12 transition ${
							plan.id === selectedFloorPlan.id
								? 'border-primary bg-primary text-primary-invert'
								: 'border-primary/40 text-primary hover:border-primary'
						}`}
					>
						{plan.name}
					</button>
				))}
			</div>

			<div className="md:grid md:grid-cols-3 gap-6">
				<div className="overflow-hidden py-8">
					{selectedFloorPlan?.descriptionList.map((item, index) => (
						<p key={index} className="text-24 text-primary mx-10 mb-6">
							• {item}
						</p>
					))}
				</div>
				<div className="max-h-150 col-span-2 py-8 md:flex md:justify-between space-y-3">
					<div className="md:w-9/10  rounded-3xl bg-primary-5 p-6 md:mr-7">
						<img
							src={selectedPlanImage}
							alt={`Planta do tipo ${selectedFloorPlan.name}`}
							className="h-full w-full object-contain rounded-2xl"
						/>
					</div>

					<div className="md:w-1/10 grid grid-cols-6 md:grid-rows-6 md:grid-cols-1 gap-1 md:gap-3">
						{selectedFloorPlan.images.map((image, index) => (
							<div
								key={index}
								className="rounded-2xl overflow-hidden border border-primary/10 hover:transform hover:scale-125 cursor-pointer transition"
								onClick={() => setSelectedPlanImage(image.url)}
							>
								<img
										src={image.url}
										alt={`Miniatura da imagem ${index}`}
										className="h-full w-full object-cover"
									/>
							</div>
						))}
					</div>
				</div>
			</div>

		</section>
	);
}
