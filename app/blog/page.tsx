import Link from 'next/link';
import BlogAdditionalArticles from '../../components/blog/AdditionalArticles';
import BlogArticleList from '../../components/blog/ArticleList';
import BlogFeaturedArticle from '../../components/blog/FeaturedArticle';
import BlogHero from '../../components/blog/Hero';
import BlogHighlightBanner from '../../components/blog/HighlightBanner';

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
		title: 'Inovação e tecnologia na construção civil',
		excerpt:
			'Descubra como as novas tecnologias estão revolucionando a construção civil e proporcionando mais eficiência e sustentabilidade.',
		image: '/home-page/mock/Rectangle 21.svg',
		href: '#',
	},
	{
		title: 'O futuro das cidades: urbanismo sustentável',
		excerpt:
			'Entenda as principais tendências em urbanismo sustentável e como elas podem transformar nossas cidades.',
		image: '/home-page/mock/Rectangle 22.svg',
		href: '#',
	},
	{
		title: 'Design de interiores: criando ambientes inteligentes',
		excerpt:
			'Aprenda a integrar tecnologia e design de interiores para criar ambientes mais inteligentes e funcionais.',
		image: '/home-page/mock/Rectangle 23.svg',
		href: '#',
	},
];

export default function BlogPage() {
	return (
		<div className="text-primary">
			<BlogHero />
			<main className="px-4 py-8 md:p-18 mx-auto space-y-16">
				<BlogFeaturedArticle />
				<BlogArticleList sessionTitle='Todos os artigos'/>
				<BlogFeaturedArticle />
				<BlogArticleList sessionTitle='Mais artigos'/>
				{/* <BlogHighlightBanner /> */}
				{/* <BlogAdditionalArticles /> */}
			</main>
		</div>
	);
}
