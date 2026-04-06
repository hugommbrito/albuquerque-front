type NossasObrasHeroProps = {
	desktopCoverImageUrl: string;
	mobileCoverImageUrl: string;
};

export default function NossasObrasHero({ desktopCoverImageUrl, mobileCoverImageUrl }: NossasObrasHeroProps) {
	return (
		<section className="h-svh md:h-180 relative  text-primary-invert bg-primary -z-20">
			<div className="mx-4 md:mx-15 grid grid-cols-1 md:grid-cols-2 items-center h-full">
				<img
					src={desktopCoverImageUrl}
					alt="Ilustração de empreendimentos"
					className="absolute inset-0 -z-10 w-full h-full object-cover hidden md:block"
				/>
				<img
					src={mobileCoverImageUrl}
					alt="Ilustração de empreendimentos"
					className="md:absolute inset-0 -z-10 w-full h-full object-cover md:hidden"
				/>
				<div className="space-y-6">
					<h1 className="text-32 mt-12 md:text-48 font-400">
						Mais do que construir lares, construímos sorrisos.
					</h1>
					<h2 className="text-24 font-400">Nós fazemos o melhor por você!</h2>
					<span className="inline-flex items-center gap-2 text-12 tracking-wide">
						Empreendimentos <span className="translate-y-[-1px]">↓</span>
					</span>
				</div>
			</div>
		</section>
	);
}
