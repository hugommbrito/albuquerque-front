import { ProjectInfo } from './types';

type ProjectHeroProps = {
	project: ProjectInfo;
};

export default function ProjectHero({ project }: ProjectHeroProps) {
	return (
		<section className="relative">
			<div className="relative h-[520px] md:h-[600px]">
				<img
					src={project.heroImage}
					alt={`Fachada do empreendimento ${project.name}`}
					className="absolute inset-0 h-full w-full object-cover"
				/>
				<div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/70 to-primary/10" />
				<div className="relative flex h-full max-w-6xl flex-col justify-end gap-6 px-15 pb-30 text-primary-invert">
					<div className="flex flex-wrap items-center gap-2 text-12 uppercase tracking-wide text-primary-invert/80">
						{project.breadcrumb.map((item, index) => (
							<span key={item.label} className="flex items-center gap-2">
								{index > 0 && <span className="text-primary-invert/40">/</span>}
								{item.href === '#' ? (
									item.label
								) : (
									<a href={item.href}>{item.label}</a>
								)}
							</span>
						))}
					</div>
					<div className="space-y-3">
						<h1 className="text-40 md:text-56 font-500 leading-tight">
							{project.name}
						</h1>
						<p className="text-16 text-primary-invert/80">{project.subtitle}</p>
					</div>
					<div className="flex flex-wrap items-center gap-3 text-12">
						<span className="rounded-full bg-primary-invert/10 px-4 py-2">{`Localização: ${project.location}`}</span>
						<span className="rounded-full bg-primary-invert/10 px-4 py-2">
							{project.typologies.join(' • ')}
						</span>
						<span className="rounded-full bg-primary-invert/10 px-4 py-2">{`Entrega: ${project.deliveryYear}`}</span>
					</div>
					<div className="pt-4 text-12 uppercase tracking-widest text-primary-invert/60">
						Scroll ↓
					</div>
				</div>
			</div>
		</section>
	);
}
