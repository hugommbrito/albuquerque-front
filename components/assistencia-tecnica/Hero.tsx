type AssistenciaTecnicaHeroProps = {
	desktopCoverImageUrl: string;
	mobileCoverImageUrl: string;
};

export default function AssistenciaTecnicaHero({
	desktopCoverImageUrl,
	mobileCoverImageUrl,
}: AssistenciaTecnicaHeroProps) {
	return (
		<section className="relative h-svh md:h-155 bg-primary -z-20 text-primary-invert">
			<img
				src={desktopCoverImageUrl}
				alt="Assistência técnica"
				className="absolute inset-0 -z-10 w-full h-full object-cover hidden md:block"
			/>
			<img
				src={mobileCoverImageUrl}
				alt="Assistência técnica"
				className="absolute inset-0 -z-10 w-full h-full object-cover md:hidden"
			/>
			<div className="absolute inset-0 -z-10 bg-primary/50" />
			<div className="h-full flex flex-col justify-end px-4 md:px-15 pb-16 md:pb-20 space-y-4">
				<span className="inline-flex items-center w-fit py-3 px-5 rounded-full text-14 font-500 text-primary-invert/60 bg-primary/60 backdrop-blur-sm">
					Assistência técnica
				</span>
				<h1 className="text-44 md:text-80 font-400 leading-tight md:max-w-3/4">
					Estamos aqui para resolver o seu problema.
				</h1>
				<span className="inline-flex w-fit text-12 uppercase tracking-widest text-primary-invert/60 bg-primary/60 backdrop-blur-sm py-3 px-5 rounded-full">
					Preencha o formulário abaixo ↓
				</span>
			</div>
		</section>
	);
}
