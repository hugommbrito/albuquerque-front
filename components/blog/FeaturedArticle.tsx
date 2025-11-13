import Link from 'next/link';
import ButtonLinkAbq from '../zGeneral/buttonLinkAbq';

const featuredArticle = {
	tag: 'DESTAQUE DA SEMANA',
	title: 'Tendências em arquitetura residencial',
	excerpt:
		'A arquitetura residencial em 2025 promete ser um reflexo da nossa era: tecnológica, sustentável...',
	image: '/home-page/mock/Rectangle 20.svg',
	href: '#',
};

export default function BlogFeaturedArticle() {
	return (
		<article className="relative overflow-hidden rounded-[48px] h-155 bg-primary text-primary-invert">
			<img
				src={featuredArticle.image}
				alt={featuredArticle.title}
				className="absolute inset-0 h-full w-full object-cover"
			/>
			<div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/70 to-transparent" />
			<div className="relative p-18 h-full flex items-end justify-between">
				<div className="space-y-4 w-2/3">
					<span className="inline-block text-14 font-700 text-primary-invert">
						• {featuredArticle.tag}
					</span>
					<h2 className="text-56 leading-tight">{featuredArticle.title}</h2>
					<p className="text-20 text-primary-invert/80 max-w-[46ch]">
						{featuredArticle.excerpt}
					</p>
				</div>
				<ButtonLinkAbq
					href={featuredArticle.href}
					text="Ler artigo"
					variant="outline"
					backgroundColor="bg-primary-invert"
					borderColor="border-primary-invert"
					hoverBackgroundColor="hover:bg-primary-5"
					hoverBorderColor="hover:border-primary-invert"
					className="text-16 h-12"
					icon={<img src="/icons/arrow-up-right-bk.svg" alt="" />}
				/>
			</div>
		</article>
	);
}
