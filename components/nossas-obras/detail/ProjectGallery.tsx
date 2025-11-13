import { ProjectGalleryData } from './types';

type ProjectGalleryProps = {
	gallery: ProjectGalleryData;
};

export default function ProjectGallery({ gallery }: ProjectGalleryProps) {
	return (
		<section className="py-16">
			<div className="mx-auto max-w-6xl px-6 space-y-6">
				<div className="grid gap-4 md:grid-cols-3">
					<div className="md:col-span-3 overflow-hidden rounded-3xl">
						<img
							src={gallery.highlight}
							alt="Sala integrada"
							className="h-full w-full object-cover"
						/>
					</div>
					{gallery.secondary.map((image) => (
						<div key={image} className="overflow-hidden rounded-3xl">
							<img
								src={image}
								alt="Ambiente do empreendimento"
								className="h-full w-full object-cover"
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
