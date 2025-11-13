import Link from 'next/link';

const highlightedArticle = {
	tag: 'Destaque da semana',
	title: 'Fachadas icônicas que inspiram',
	excerpt:
		'Referências internacionais de design mostram como linhas orgânicas e materiais refletem identidade contemporânea.',
	image: '/home-page/mock/Rectangle 21.svg',
	href: '#',
};

export default function BlogHighlightBanner() {
	return (
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
	);
}
