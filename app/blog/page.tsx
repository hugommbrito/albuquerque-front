import Link from 'next/link';

const featuredArticle = {
	tag: 'Destaque da semana',
	title: 'Tendências em arquitetura residencial',
	excerpt:
		'A arquitetura residencial em 2025 promete ser um reflexo da nossa era: tecnológica, sustentável e focada no bem-estar.',
	image: '/home-page/mock/Rectangle 20.svg',
	href: '#',
};

const articles = [
	{
		id: '1',
		tag: 'Destaque da semana',
		title: 'Tendências em arquitetura residencial',
		excerpt:
			'A arquitetura residencial em 2025 promete ser um reflexo da nossa era: tecnológica, sustentável e focada no bem-estar.',
		image: '/home-page/mock/Rectangle 19.svg',
		href: '#',
	},
	{
		id: '2',
		tag: 'Mercado',
		title: 'Como preparar o financiamento do seu imóvel',
		excerpt:
			'Documentação organizada, simulação antecipada e análise de crédito são passos essenciais para garantir as melhores taxas.',
		image: '/home-page/mock/Rectangle 21.svg',
		href: '#',
	},
	{
		id: '3',
		tag: 'Arquitetura',
		title: 'Ambientes integrados que acolhem',
		excerpt:
			'Integração inteligente entre sala, cozinha e varanda potencializa a convivência e amplia a sensação de espaço.',
		image: '/home-page/mock/Rectangle 20.svg',
		href: '#',
	},
	{
		id: '4',
		tag: 'Decoração',
		title: 'Materiais naturais em alta',
		excerpt:
			'Madeira, pedra e fibras naturais reforçam aconchego, reduzem impactos ambientais e conectam a casa à natureza.',
		image: '/home-page/mock/Rectangle 19.svg',
		href: '#',
	},
	{
		id: '5',
		tag: 'Destaque da semana',
		title: 'Fachadas icônicas que inspiram',
		excerpt:
			'Referências internacionais de design mostram como linhas orgânicas e materiais refletem identidade contemporânea.',
		image: '/home-page/mock/Rectangle 21.svg',
		href: '#',
	},
	{
		id: '6',
		tag: 'Mercado',
		title: 'Panorama imobiliário 2025',
		excerpt:
			'Indicadores do setor apontam crescimento contínuo, impulsionado por demanda qualificada e crédito acessível.',
		image: '/home-page/mock/Rectangle 19.svg',
		href: '#',
	},
	{
		id: '7',
		tag: 'Experiência',
		title: 'Visitas guiadas que encantam famílias',
		excerpt:
			'Como transformar o primeiro contato com o empreendimento em uma jornada memorável e cheia de descobertas.',
		image: '/home-page/mock/Rectangle 20.svg',
		href: '#',
	},
];

const highlightedArticle = articles[4];

export default function BlogPage() {
	return (
		<div className="bg-primary-5/60 text-primary">
			{/* Hero */}
			<section className="bg-primary text-primary-invert">
				<div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-20 md:grid-cols-[minmax(0,1fr)_0.95fr]">
					<div className="space-y-6">
						<span className="inline-flex items-center text-12 uppercase tracking-[0.2em] text-primary-invert/60">
							Blog
						</span>
						<h1 className="text-48 md:text-64 font-500 leading-tight">
							Compartilhar, crescer, inspirar.
						</h1>
						<p className="max-w-[38ch] text-16 text-primary-invert/70">
							Conteúdos exclusivos sobre arquitetura, mercado imobiliário,
							tendências e experiências vivas nos nossos empreendimentos.
						</p>
					</div>
					<div className="relative h-[320px] w-full overflow-hidden rounded-[40px] md:h-[420px]">
						<img
							src="/home-page/backDrop2.svg"
							alt="Equipe criando conteúdo"
							className="absolute inset-0 h-full w-full object-cover"
						/>
					</div>
				</div>
			</section>

			<main className="mx-auto max-w-6xl space-y-16 px-6 py-20">
				{/* Featured article */}
				<article className="relative overflow-hidden rounded-[48px] bg-primary text-primary-invert">
					<img
						src={featuredArticle.image}
						alt={featuredArticle.title}
						className="absolute inset-0 h-full w-full object-cover"
					/>
					<div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/70 to-transparent" />
					<div className="relative grid gap-6 px-8 py-12 md:grid-cols-[0.6fr_0.4fr] md:px-16 md:py-20">
						<div className="space-y-6">
							<span className="inline-block text-12 uppercase tracking-[0.25em] text-primary-invert/60">
								{featuredArticle.tag}
							</span>
							<h2 className="text-32 md:text-44 font-500 leading-tight">
								{featuredArticle.title}
							</h2>
							<p className="text-16 text-primary-invert/80 max-w-[46ch]">
								{featuredArticle.excerpt}
							</p>
							<Link
								href={featuredArticle.href}
								className="inline-flex items-center gap-2 text-14 font-500 text-primary-invert transition hover:text-primary-invert/70"
							>
								Ler artigo
								<span aria-hidden className="text-xl">
									→
								</span>
							</Link>
						</div>
					</div>
				</article>

				{/* Article list */}
				<section className="space-y-12">
					<header className="space-y-3">
						<h2 className="text-28 md:text-32 font-500 text-primary">
							Todos os artigos
						</h2>
						<p className="max-w-[48ch] text-16 text-primary-3">
							Atualizações semanais com análises de especialistas, histórias
							reais e dicas práticas para cada etapa da jornada do imóvel.
						</p>
					</header>

					<div className="space-y-6">
						{articles.slice(0, 4).map((article) => (
							<article
								key={article.id}
								className="grid gap-6 overflow-hidden rounded-[32px] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg md:grid-cols-[0.45fr_0.55fr]"
							>
								<div className="relative h-56 w-full overflow-hidden rounded-[28px] bg-primary/10">
									<img
										src={article.image}
										alt={article.title}
										className="h-full w-full object-cover"
									/>
								</div>
								<div className="flex flex-col justify-between gap-6">
									<div className="space-y-4">
										<span className="text-12 uppercase tracking-[0.25em] text-primary-3">
											{article.tag}
										</span>
										<h3 className="text-24 font-500 text-primary">
											{article.title}
										</h3>
										<p className="text-16 text-primary-3">{article.excerpt}</p>
									</div>
									<Link
										href={article.href}
										className="inline-flex items-center gap-2 text-14 font-500 text-primary transition hover:text-primary-3"
									>
										Ler artigo
										<span aria-hidden className="text-xl">
											→
										</span>
									</Link>
								</div>
							</article>
						))}
					</div>
				</section>

				{/* Highlighted banner */}
				<article className="relative overflow-hidden rounded-[48px] bg-primary text-primary-invert">
					<img
						src={highlightedArticle.image}
						alt={highlightedArticle.title}
						className="absolute inset-0 h-full w-full object-cover"
					/>
					<div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/75 to-transparent" />
					<div className="relative grid gap-6 px-8 py-12 md:grid-cols-[0.55fr_0.45fr] md:px-16 md:py-20">
						<div className="space-y-6">
							<span className="text-12 uppercase tracking-[0.25em] text-primary-invert/60">
								{highlightedArticle.tag}
							</span>
							<h3 className="text-32 md:text-40 font-500 leading-tight">
								{highlightedArticle.title}
							</h3>
							<p className="text-16 text-primary-invert/80 max-w-[46ch]">
								{highlightedArticle.excerpt}
							</p>
							<Link
								href={highlightedArticle.href}
								className="inline-flex items-center gap-2 text-14 font-500 text-primary-invert transition hover:text-primary-invert/70"
							>
								Ler artigo
								<span aria-hidden className="text-xl">
									→
								</span>
							</Link>
						</div>
					</div>
				</article>

				{/* Additional articles */}
				<div className="grid gap-6 lg:grid-cols-2">
					{articles.slice(5).map((article) => (
						<article
							key={article.id}
							className="flex flex-col gap-6 rounded-[32px] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
						>
							<div className="h-56 w-full overflow-hidden rounded-[28px] bg-primary/10">
								<img
									src={article.image}
									alt={article.title}
									className="h-full w-full object-cover"
								/>
							</div>
							<div className="space-y-4">
								<span className="text-12 uppercase tracking-[0.25em] text-primary-3">
									{article.tag}
								</span>
								<h3 className="text-24 font-500 text-primary">
									{article.title}
								</h3>
								<p className="text-16 text-primary-3">{article.excerpt}</p>
								<Link
									href={article.href}
									className="inline-flex items-center gap-2 text-14 font-500 text-primary transition hover:text-primary-3"
								>
									Ler artigo
									<span aria-hidden className="text-xl">
										→
									</span>
								</Link>
							</div>
						</article>
					))}
				</div>
			</main>
		</div>
	);
}
