import { useState } from 'react';
import { SpecificGallery } from './types';

type ProjectOutdoorGalleryProps = {
	areas: SpecificGallery[];
	ytVideoId?: string | null;
};

export default function ProjectOutdoorGallery({
	areas,
	ytVideoId,
}: ProjectOutdoorGalleryProps) {
	const [selectedFloorArea, setSelectedFloorArea] = useState<SpecificGallery>(
		areas[0]
	);
	return (
		<section className="px-4 md:p-15">
			<div className="flex gap-4 items-center bg-primary-5 p-4 mb-8 rounded-full ">
				{areas.map((area, index) => (
					<button
						key={area.id}
						type="button"
						onClick={() => setSelectedFloorArea(area)}
						className={`rounded-full border px-5 py-2 text-12 transition ${
							area.id === selectedFloorArea.id
								? 'border-primary bg-primary text-primary-invert'
								: 'border-primary/40 text-primary hover:border-primary'
						}`}
					>
						{area.name}
					</button>
				))}
			</div>
			<div className="grid gap-4 grid-cols-2 md:grid-cols-4">
				{selectedFloorArea.images.map((image, index) => (
					<div key={index} className="h-45 md:h-80 rounded-3xl overflow-hidden">
						<img
							src={image.url}
							alt="Área comum do empreendimento"
							className="h-full w-full object-cover"
						/>
					</div>
				))}
			</div>
			{ytVideoId && (
				<div className="mt-16 w-full h-70 md:h-160 bg-primary-5 rounded-3xl overflow-hidden">
					<iframe
						width="100%"
						height="100%"
						src={`https://www.youtube.com/embed/${ytVideoId}`}
						title="YouTube video player"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						referrerPolicy="strict-origin-when-cross-origin"
						allowFullScreen
					></iframe>
				</div>
			)}
		</section>
	);
}
