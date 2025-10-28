import ButtonLinkAbq from '../../components/zGeneral/buttonLinkAbq';

const videoTopics = [
	{
		title: 'Data de entrega',
		image: '/home-page/visual-id/video-topic-1.jpg',
	},
	{
		title: 'Entrada no financiamento',
		image: '/home-page/visual-id/video-topic-2.jpg',
	},
	{
		title: 'Simulando financiamento',
		image: '/home-page/visual-id/video-topic-3.jpg',
	},
	{
		title: 'Análise de crédito',
		image: '/home-page/visual-id/video-topic-4.jpg',
	},
	{
		title: 'Cronograma de obra',
		image: '/home-page/visual-id/video-topic-5.jpg',
	},
];

const financingBadges = [
	'Minha casa minha vida',
	'Financiamento caixa',
	'Use o FGTS',
	'Linha especial de crédito',
];

export default function SeuSonho() {
	return (
		<>
			{/* Hero */}
			<section className="bg-primary-5">
				<div className="mx-auto max-w-6xl px-6 py-16 md:py-24 grid gap-10 md:grid-cols-[1.1fr_1fr] items-center">
					<div className="space-y-8">
						<div className="space-y-3">
							<h1 className="text-36 md:text-56 font-500 text-primary leading-tight max-w-[18ch]">
								Que tal começar a idealizar sua conquista? Faça uma simulação:
							</h1>
						</div>
						<form className="space-y-4 max-w-md">
							<input
								className="w-full rounded-full border border-primary/15 bg-white px-6 py-3 text-14 text-primary outline-none focus:border-primary"
								placeholder="Qual é sua renda familiar mensal?"
							/>
							<input
								className="w-full rounded-full border border-primary/15 bg-white px-6 py-3 text-14 text-primary outline-none focus:border-primary"
								placeholder="Qual o valor de entrada? (Opcional)"
							/>
							<ButtonLinkAbq
								href="/contato"
								text="Iniciar simulação"
								variant="filled"
								fullWidth
							/>
						</form>
					</div>
					<div className="rounded-[48px] overflow-hidden shadow-lg">
						<img
							src="/home-page/visual-id/seu-sonho-hero.jpg"
							alt="Casal celebrando nova casa"
							className="w-full h-full object-cover"
						/>
					</div>
				</div>
			</section>

			{/* Video topics */}
			<section className="py-20">
				<div className="mx-auto max-w-6xl px-6 space-y-8">
					<div className="space-y-3">
						<h2 className="text-28 md:text-36 font-500 text-primary">
							Sua virada se chave acaba de começar
						</h2>
						<p className="text-16 text-primary-3 max-w-[32ch]">
							Escolha o tema, dê o play e tire todas as suas dúvidas.
						</p>
					</div>
					<div className="overflow-x-auto">
						<div className="flex gap-6 min-w-full">
							{videoTopics.map((topic) => (
								<div
									key={topic.title}
									className="w-[220px] flex-shrink-0 space-y-3"
								>
									<div className="relative h-40 overflow-hidden rounded-3xl">
										<img
											src={topic.image}
											alt={topic.title}
											className="h-full w-full object-cover"
										/>
										<button
											type="button"
											className="absolute inset-0 m-auto h-12 w-12 rounded-full bg-white/90 text-primary flex items-center justify-center shadow"
										>
											▶
										</button>
									</div>
									<p className="text-14 text-primary text-center">
										{topic.title}
									</p>
								</div>
							))}
						</div>
					</div>
					<div className="rounded-full bg-primary px-6 py-4 text-center text-primary-invert text-14">
						Prefere ler? Baixe nosso ebook “Como financiar meu sonho” grátis.{' '}
						<a href="#" className="underline font-500">
							Baixar
						</a>
					</div>
				</div>
			</section>

			{/* Financing CTA */}
			<section className="py-20 bg-primary text-primary-invert">
				<div className="mx-auto max-w-6xl px-6 grid gap-10 md:grid-cols-[1fr_1fr] items-center">
					<div className="space-y-6">
						<h3 className="text-28 md:text-36 font-500 max-w-[22ch]">
							Condições facilitadas para comprar sua casa própria
						</h3>
						<p className="text-primary-invert/80 max-w-[40ch]">
							Planeje seu futuro com as melhores oportunidades comerciais do
							mercado. Você consegue parcelar a entrada, participar de programas
							de incentivo habitacional e muito mais.
						</p>
						<ButtonLinkAbq
							href="/contato"
							text="Fazer simulações"
							variant="outline"
						/>
					</div>
					<div className="grid gap-4 sm:grid-cols-2">
						{financingBadges.map((badge) => (
							<div
								key={badge}
								className="rounded-3xl bg-primary-invert p-6 text-center text-14 font-500 text-primary"
							>
								{badge}
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	);
}
