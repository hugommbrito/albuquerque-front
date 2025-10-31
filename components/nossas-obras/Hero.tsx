export default function NossasObrasHero() {
	return (
		<section className="h-180 relative  text-primary-invert">
			<div className="mx-15 grid grid-cols-2 items-center h-full">
				<div className="space-y-6">
					<h1 className="text-48 font-400">
						Mais do que construir lares, construímos sorrisos.
					</h1>
					<h2 className="text-24 font-400">
						Nós fazemos o melhor por você!
					</h2>

					<div className="pt-45">
						<span className="inline-flex items-center gap-2 text-12  tracking-wide">
							Empreendimentos <span className="translate-y-[-1px]">↓</span>
						</span>
					</div>
				</div>
				<img
					src="/nossas-obras/backDrop1.svg"
					alt="Ilustração de empreendimentos"
					className="absolute inset-0 -z-10 w-full h-full object-cover"
				/>
			</div>
		</section>
	);
}
