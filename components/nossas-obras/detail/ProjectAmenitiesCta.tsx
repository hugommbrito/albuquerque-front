import ButtonLinkAbq from '../../zGeneral/buttonLinkAbq';
import { ProjectAmenity } from './types';

type ProjectAmenitiesCtaProps = {
	amenities: ProjectAmenity[];
};

export default function ProjectAmenitiesCta({
	amenities,
}: ProjectAmenitiesCtaProps) {
	return (
		<section className="pb-20">
			<div className="mx-auto max-w-6xl px-6 grid gap-10 md:grid-cols-[0.9fr_1.1fr] items-start">
				<div className="space-y-6">
					<h2 className="text-32 md:text-40 font-500 text-primary">
						Onde morar é desfrutar.
					</h2>
					<p className="text-16 text-primary-3 max-w-[40ch]">
						Cada metro quadrado foi pensado para acolher momentos de descanso,
						encontros e novas memórias. Ambientes iluminados, integração
						inteligente e paisagismo convidativo transformam o cotidiano em
						bem-estar.
					</p>
					<div className="flex flex-wrap gap-4">
						<ButtonLinkAbq
							href="/nossas-obras"
							text="Últimas unidades"
							variant="filled"
						/>
						<ButtonLinkAbq
							href="/contato"
							text="Fale conosco"
							variant="outline"
						/>
					</div>
				</div>
				<div className="grid gap-4 md:grid-cols-2">
					{amenities.map((item) => (
						<div
							key={item.label}
							className="rounded-3xl border border-primary/10 bg-white px-4 py-5"
						>
							<div className="text-12 uppercase tracking-wide text-primary-3">
								{item.label}
							</div>
							<div className="text-20 font-500 text-primary mt-2">
								{item.value}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
