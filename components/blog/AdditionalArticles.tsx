import Link from 'next/link';

const additionalArticles = [
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

export default function BlogAdditionalArticles() {
	return (
		<div className="grid gap-6 lg:grid-cols-2">
			{additionalArticles.map((article) => (
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
						<h3 className="text-24 font-500 text-primary">{article.title}</h3>
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
	);
}
