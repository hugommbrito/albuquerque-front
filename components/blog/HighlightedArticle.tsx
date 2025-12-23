import Link from 'next/link';
import ButtonLinkAbq from '../zGeneral/buttonLinkAbq';
import { BlogArticleInfo } from './types';

const featuredArticle = {
	tag: 'DESTAQUE DA SEMANA',
	title: 'Tendências em arquitetura residencial',
	excerpt:
		'A arquitetura residencial em 2025 promete ser um reflexo da nossa era: tecnológica, sustentável...',
	image: '/home-page/mock/Rectangle 20.svg',
	href: '#',
};

type HighlightedArticleProps = {
	featuredArticle: BlogArticleInfo
};

export default function BlogHighlightedArticle({ featuredArticle }: HighlightedArticleProps) {
	return (
		<article className="relative overflow-hidden rounded-[48px] h-220 md:h-155 bg-primary text-primary-invert">
			<img
				src={featuredArticle.cover_image_url}
				alt={featuredArticle.title}
				className="absolute inset-0 h-full w-full object-cover"
			/>
			<div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/70 to-transparent" />
			<div className="relative p-8 md:p-18 h-full flex flex-col md:flex-row items-start md:items-end justify-end md:justify-between gap-8">
				<div className="space-y-4 w-full md:w-2/3">
					<span className="inline-block text-14 font-700 text-primary-invert">
						• {featuredArticle.tag}
					</span>
					<h2 className="text-32 md:text-56 font-500 leading-tight">{featuredArticle.title}</h2>
					<p className="text-20 text-primary-invert/80 max-w-[46ch]">
						{featuredArticle.short_description}
					</p>
				</div>
				<ButtonLinkAbq
					href={`/blog/${featuredArticle.slug}`}
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
