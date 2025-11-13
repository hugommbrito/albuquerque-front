type ProjectOutdoorGalleryProps = {
	images: string[];
};

export default function ProjectOutdoorGallery({
	images,
}: ProjectOutdoorGalleryProps) {
	return (
		<section className="py-20">
			<div className="mx-auto max-w-6xl px-6 space-y-6">
				<h3 className="text-24 md:text-32 font-500 text-primary">
					Área comum e lazer para toda a família
				</h3>
				<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{images.map((image) => (
						<div key={image} className="rounded-3xl overflow-hidden">
							<img
								src={image}
								alt="Área comum do empreendimento"
								className="h-full w-full object-cover"
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
