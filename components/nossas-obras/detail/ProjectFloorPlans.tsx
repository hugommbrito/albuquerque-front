import { ProjectFloorPlan } from './types';

type ProjectFloorPlansProps = {
	plans: ProjectFloorPlan[];
};

export default function ProjectFloorPlans({ plans }: ProjectFloorPlansProps) {
	const primaryPlan = plans[0];

	return (
		<section className="py-20 bg-primary-5">
			<div className="mx-auto max-w-6xl px-6 space-y-8">
				<div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
					<h3 className="text-24 md:text-32 font-500 text-primary">
						Plantas humanizadas para todos os perfis
					</h3>
					<div className="flex gap-3">
						{plans.map((plan, index) => (
							<button
								key={plan.id}
								type="button"
								className={`rounded-full border px-5 py-2 text-12 transition ${
									index === 0
										? 'border-primary bg-primary text-primary-invert'
										: 'border-primary/40 text-primary hover:border-primary'
								}`}
							>
								{plan.label}
							</button>
						))}
					</div>
				</div>

				<div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
					<div className="rounded-[32px] overflow-hidden bg-white p-4">
						{primaryPlan && (
							<img
								src={primaryPlan.image}
								alt="Planta humanizada"
								className="w-full object-contain"
							/>
						)}
					</div>
					<div className="space-y-6">
						{primaryPlan && (
							<div className="rounded-3xl bg-white p-6">
								<h4 className="text-18 font-500 text-primary mb-4">
									Destaques do apartamento
								</h4>
								<ul className="space-y-2 text-14 text-primary-3">
									{primaryPlan.description.map((item) => (
										<li key={item}>• {item}</li>
									))}
								</ul>
							</div>
						)}
						<div className="grid grid-cols-4 gap-3">
							{plans.map((plan) => (
								<div
									key={plan.id}
									className="rounded-2xl overflow-hidden border border-primary/10"
								>
									<img
										src={plan.image}
										alt={`Miniatura planta ${plan.label}`}
										className="h-full w-full object-cover"
									/>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
