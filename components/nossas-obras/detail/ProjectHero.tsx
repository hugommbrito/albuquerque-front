import { ProjectInfo } from './types';

type ProjectHeroProps = {
	project: ProjectInfo;
};

export default function ProjectHero({ project }: ProjectHeroProps) {
	console.log(project.heroHighLights)
	return (
		<section className="relative">
			<div className="relative h-[800px]">
				<img
					src={project.heroImage}
					alt={`Fachada do empreendimento ${project.name}`}
					className="absolute inset-0 h-full w-full object-cover"
				/>
				<div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/70 to-primary/10" />
				<div className="relative flex h-full max-w-6xl flex-col justify-end gap-15 px-4 md:px-15 pb-20 md:pb-30 text-primary-invert">
					<div className="space-y-3">
						<h1 className="text-48 md:text-96">{project.name}</h1>
						<p className="text-24 md:text-32 text-primary-invert/80">{project.subtitle}</p>
					</div>
					<div className="flex flex-wrap items-center gap-12 md:gap-22 text-12">
						{project.heroHighLights.map((highlight) => (
							<div>
							  <p key={highlight.label} className="text-14">
  								{highlight.label}
  							</p>
  							<p key={highlight.info} className="text-24 font-500">
  								{highlight.info}
  							</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
