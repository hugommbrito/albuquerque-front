import ButtonLinkAbq from '../../zGeneral/buttonLinkAbq';

type ProjectFinancingProps = {
	partners: string[];
};

export default function ProjectFinancing({ partners }: ProjectFinancingProps) {
	return (
		<section className="py-20 bg-primary text-primary-invert">
			<div className="mx-auto max-w-6xl px-6 grid gap-10 md:grid-cols-[1.1fr_1fr] items-center">
				<div className="space-y-6">
					<h3 className="text-28 md:text-36 font-500 max-w-[18ch]">
						Condições facilitadas para comprar sua casa própria.
					</h3>
					<p className="text-primary-invert/80 max-w-[40ch]">
						Parceiros que viabilizam o melhor financiamento com parcelas
						acessíveis e documentação acompanhada pela nossa equipe
						especializada.
					</p>
					<ButtonLinkAbq
						href="/contato"
						text="Quero simular"
						variant="outline"
					/>
				</div>
				<div className="grid gap-4 sm:grid-cols-2">
					{partners.map((partner) => (
						<div
							key={partner}
							className="rounded-3xl bg-primary-invert text-primary px-6 py-5 text-center text-14 font-500"
						>
							{partner}
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
