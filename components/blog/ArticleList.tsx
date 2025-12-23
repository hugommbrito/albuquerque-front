import Link from 'next/link';
import { BlogArticleInfo } from './types';

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
];

type BlogRegularArticlesListProps = {
	articles: BlogArticleInfo[]
}

export default function BlogRegularArticlesList({ articles }: BlogRegularArticlesListProps) {
	return (
		<section className="space-y-12 border-t-2 border-primary-5">
			{/* <header className="mt-6">
				<h2 className="text-20 font-700">{sessionTitle}</h2>
			</header> */}

			<div className="space-y-6">
				{articles.map((article) => (
					<article
						key={article.id}
						className="gap-6 md:gap-12 overflow-hidden rounded-[32px] py-6 flex flex-col md:grid md:grid-cols-3"
					>
						<div className="relative h-66 md:h-88 w-full overflow-hidden rounded-[28px] bg-primary/10">
							<img
								src={article.cover_image_url}
								alt={article.title}
								className="h-full w-full object-cover"
							/>
						</div>
						<div className="col-span-2 md:max-w-2/3 flex flex-col justify-center gap-6">
							<div className="space-y-4">
								<span className="inline-block text-14 font-700 uppercase text-primary">
									• {article.tag}
								</span>
								<h3 className="text-20 md:text-24 font-500 text-primary">
									{article.title}
								</h3>
								<p className="text-16 md:text-18 text-primary-3">{article.short_description}</p>
							</div>
							<Link
								href={article.slug ? `/blog/${article.slug}` : '#'}
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
	);
}
