import ButtonLinkAbq from '../../components/zGeneral/buttonLinkAbq';
import Card from '../../components/zGeneral/Card';

export default function NossasObras() {
	return (
		<>
			{/* Hero escuro */}
			<section className="bg-primary text-primary-invert">
				<div className="mx-auto max-w-6xl px-6 py-16 md:py-24 grid gap-10 md:grid-cols-[1.1fr_1fr] items-center">
					<div className="space-y-6">
						<h1 className="text-32 md:text-48 font-500 max-w-[18ch]">
							Mais do que construir lares, construímos sorrisos.
						</h1>
						<p className="text-16 text-primary-invert/80 max-w-[30ch]">
							Nós fazemos o melhor por você!
						</p>
						<div className="pt-6">
							<span className="inline-flex items-center gap-2 text-12 uppercase tracking-wide">
								Empreendimentos <span className="translate-y-[-1px]">↓</span>
							</span>
						</div>
					</div>
					<div className="relative">
						<div className="relative mx-auto w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden">
							<img
								src="/home-page/visual-id/hero-woman.jpg"
								alt=""
								className="w-full h-full object-cover"
							/>
						</div>
					</div>
				</div>
			</section>

			{/* Headline centro */}
			<section className="py-12 md:py-16">
				<div className="mx-auto max-w-4xl px-6 text-center space-y-4">
					<h2 className="text-24 md:text-32 font-500 text-primary">
						Nossos empreendimentos unem soluções inteligentes e práticas
						pensadas para abrigar você, sua família e seus sonhos.
					</h2>
				</div>
			</section>

			{/* Linha Premium com card largo */}
			<section className="pb-16">
				<div className="mx-auto max-w-6xl px-6 space-y-6">
					<div className="flex items-center justify-between">
						<span className="inline-block rounded-full bg-primary-5 px-4 py-2 text-12 text-primary border border-primary/20">
							Linha Premium
						</span>
						<ButtonLinkAbq
							href="/nossas-obras"
							text="Ver todos"
							variant="outline"
						/>
					</div>
					<Card
						title="Parque Resedá"
						subtitle="Seu sonho se tornou o nosso."
						image="/home-page/visual-id/reseda.jpg"
						className="h-72 md:h-96"
					/>
				</div>
			</section>

			{/* Linha de Residenciais Compactos */}
			<section className="pb-20">
				<div className="mx-auto max-w-6xl px-6 space-y-6">
					<div className="flex items-center justify-between">
						<span className="inline-block rounded-full bg-primary-5 px-4 py-2 text-12 text-primary border border-primary/20">
							Linha de Residenciais Compactos
						</span>
					</div>
					<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
						<Card
							title="Colibris"
							subtitle="Seu sonho se tornou o nosso."
							image="/home-page/visual-id/colibris.jpg"
							className="h-64"
						/>
						<Card
							title="Jabuticaba"
							subtitle="Seu sonho se tornou o nosso."
							image="/home-page/visual-id/jabuticaba.jpg"
							className="h-64"
						/>
						<Card
							title="Limoeiro"
							subtitle="Seu sonho se tornou o nosso."
							image="/home-page/visual-id/limoeiro.jpg"
							className="h-64"
						/>
						<Card
							title="Laranja Lima"
							subtitle="Seu sonho se tornou o nosso."
							image="/home-page/visual-id/laranja-lima.jpg"
							className="h-64"
						/>
					</div>
				</div>
			</section>

			{/* CTA escuro final */}
			<section className="py-20 bg-primary text-primary-invert">
				<div className="mx-auto max-w-6xl px-6 grid gap-10 md:grid-cols-[1.1fr_1fr] items-center">
					<div className="space-y-6">
						<h2 className="text-32 md:text-40 font-500 max-w-[16ch]">
							Opções para todos os sonhos.
						</h2>
						<p className="text-primary-invert/80 max-w-[40ch]">
							Escolha a opção que mais se encaixa no seu perfil e venha realizar
							o sonho do seu novo imóvel.
						</p>
						<ButtonLinkAbq
							href="/seu-sonho"
							text="Conquistar meu imóvel"
							variant="outline"
						/>
					</div>
					<div className="rounded-3xl overflow-hidden bg-primary-2">
						<img
							src="/home-page/visual-id/smile.jpg"
							alt=""
							className="w-full h-full object-cover"
						/>
					</div>
				</div>
			</section>
		</>
	);
}
