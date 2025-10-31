import ButtonLinkAbq from '../zGeneral/buttonLinkAbq';

export default function HomeArea2() {
	return (
		<section className="py-40 px-15">
			<div className=" px-6 grid gap-10 md:grid-cols-[1.2fr_1fr] items-start">
				<div className="space-y-6">
					<p className="text-18 uppercase tracking-wide text-primary-3">
						20 anos de experiência em gestão & construção
					</p>
					<h2 className="text-32 md:text-48 font-500 text-primary max-w-[42ch]">
						Vinte anos de história, criando soluções e obras construtivas para você desfrutar com segurança e felicidade.
					</h2>
					<ButtonLinkAbq
						href="/nossa-historia"
						text="Saiba mais"
						variant="outline"
					/>
				</div>

				<div className="grid gap-6 sm:grid-cols-2">
					<div className="h-50 rounded-3xl border border-primary/20 bg-primary p-6 flex flex-col justify-between">
						<div className="text-40 md:text-48 font-600 text-primary-invert">
							50
						</div>
						<div className="text-12 uppercase tracking-wide text-primary-invert">
							famílias transformadas
						</div>
					</div>
					<div className="rounded-3xl border border-primary/20 p-6 flex flex-col justify-between">
						<div className="text-40 md:text-48 font-600 text-primary">
							+20mil
						</div>
						<div className="text-12 uppercase tracking-wide text-primary-3">
							metros de área construída
						</div>
					</div>
					<div className="h-50 col-span-2 rounded-3xl border border-primary/20 p-6 flex flex-col justify-between">
						<div className="text-40 md:text-48 font-600 text-primary">
							+50mil
						</div>
						<div className="text-12 uppercase tracking-wide text-primary-3">
							metros quadrados entregues como consultoria
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
