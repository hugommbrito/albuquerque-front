'use client';

import Link from 'next/link';
import BlogArticleCard from '@/components/zGeneral/BlogArticleCard';
import { CaretLeftIcon } from '@phosphor-icons/react';

const article = {
	slug: 'tendencias-em-arquitetura-residencial',
	title: 'Tendências em arquitetura residencial',
	heroImage: '/home-page/mock/Rectangle 20.svg',
	content: `
		<p>
			À medida que mergulhamos mais fundo na década, o design de interiores está se
			transformando: não basta mais que tudo seja bonito — agora ele precisa contar
			uma história, oferecer conforto e refletir quem vive o espaço. A casa volta a
			ser abrigo, galeria e carta de intenções de quem mora ali.
		</p>
		<p>
			Veja o que está ganhando força em 2025 quando o assunto é arquitetura
			residencial:
		</p>
		<h2>1. Material drenching e superfícies imersivas</h2>
		<p>
			Em vez de aplicar cor isoladamente, os ambientes começam a ser revestidos de
			um mesmo material ou textura — madeira, mármore, cimento, tecidos estruturados
			— do chão ao teto, criando uma imersão visual. Esse efeito traz profundidade e
			unidade ao espaço, fazendo com que o ambiente vista quem entra nele.
		</p>
		<figure class="overflow-hidden rounded-3xl">
			<img src="/home-page/mock/blogMock1.jpg" alt="Sala de estar revestida com madeira" class="h-full w-full object-cover" />
		</figure>
		<h2>2. Espaços envolventes e emotivos</h2>
		<p>
			A busca por bem-estar dentro de casa aumenta, e os projetos passam a
			privilegiar ambientes que abracem quem está dentro. Tecidos densos, cortinas
			pesadas, texturas macias e uma mistura controlada de cores criam um cenário
			envolvente onde o minimalismo frio dá lugar ao aconchego cheio de significado.
		</p>
		<p>
			Iluminação indireta, velas e aromas entram em cena para completar a sensação
			doméstica, reforçando a casa como espaço que recarrega as energias.
		</p>
		<h2>3. Mistura de estilos, texturas e tons</h2>
		<p>
			Combinar madeiras diferentes, metais variados e superfícies contrastantes
			ganha espaço; o visual passa a refletir uma construção ao longo do tempo, com
			camadas de memória e personalidade. É a mistura curadoria + espontaneidade:
			nada parece recém-saído da loja, tudo tem história.
		</p>
		<figure class="overflow-hidden rounded-3xl">
			<img src="/home-page/mock/blogMock2.jpg" alt="Ambiente com mistura de estilos" class="h-full w-full object-cover" />
		</figure>
		<h2>4. Cores mais ousadas e tons terrosos</h2>
		<p>
			O branco total perde força. Tons terrosos, verdes profundos, vinho e ferrugem
			são usados como base ou acentos, trazendo aconchego e profundidade. Nos
			detalhes, cores joia aparecem em luminárias, quadros e objetos para criar pontos
			de interesse sem exagero.
		</p>
		<p>
			Ao mesmo tempo, o uso de tonalidades naturais se alia a materiais crus —
			linho, pedra, argila — para reforçar o vínculo com a natureza e construir uma
			estética atemporal.
		</p>
		<h2>5. Formas orgânicas, curvas e arcos</h2>
		<p>
			Linhas retas ainda existem, mas ganham companhia: móveis, aberturas e peças de
			design com curvas suaves, arcos e cantos arredondados trazem leveza e
			humanizam o espaço. Quem observa percebe uma fluidez que guia o olhar e deixa a
			experiência de circular pela casa mais gentil.
		</p>
		<figure class="overflow-hidden rounded-3xl">
			<img src="/home-page/mock/blogMock3.jpg" alt="Detalhes arquitetônicos curvos" class="h-full w-full object-cover" />
		</figure>
		<p>
			Resultado: a arquitetura residencial em 2025 promete ser um reflexo da nossa
			era — tecnológica, sustentável e focada no bem-estar. Projetos alinhados a esse
			cenário equilibram funcionalidade, emoções e senso de pertencimento.
		</p>
	`,
};

const additionalArticles = [
	{
		title: 'Inovação e tecnologia na construção civil',
		subtitle:
			'Como a digitalização está mudando a forma de planejar e erguer grandes obras.',
		image: '/home-page/mock/blogMock1.jpg',
		href: '#',
	},
	{
		title: 'O futuro das cidades: urbanismo sustentável',
		subtitle:
			'Veja o papel das cidades inteligentes para oferecer bem-estar sem desperdícios.',
		image: '/home-page/mock/blogMock2.jpg',
		href: '#',
	},
	{
		title: 'Design de interiores: criando ambientes inteligentes',
		subtitle:
			'Soluções conectadas que deixam a rotina mais intuitiva e acolhedora.',
		image: '/home-page/mock/blogMock3.jpg',
		href: '#',
	},
];

const shareLinks = [
	{ label: 'Instagram', href: '#', icon: '/icons/ig.svg' },
	{ label: 'Facebook', href: '#', icon: '/icons/fb.svg' },
	{ label: 'WhatsApp', href: '#', icon: '/icons/wa.svg' },
];

// export async function generateStaticParams() {
// 	return [{ slug: article.slug }];
// }

type BlogArticlePageProps = {
	params: { slug: string };
};

export default function BlogArticlePage({ params }: BlogArticlePageProps) {
	if (params.slug !== article.slug) {
		return (
			<div className="py-32 text-center text-primary">
				Artigo não encontrado.
			</div>
		);
	}

	return (
		<div className="bg-primary-invert">
			<section className="px-15 py-42">
				<div className="space-y-10">
					<div className="flex items-center gap-3 text-14 text-primary-3">
						<Link
							href="/blog"
							className="inline-flex items-center gap-2 hover:text-primary"
						>
							<CaretLeftIcon />
							Blog
						</Link>
					</div>

					<h1 className="w-2/5 text-48 font-500 text-primary leading-tight">
						{article.title}
					</h1>

					<div className="relative h-150 overflow-hidden rounded-3xl">
						<div className="absolute h-full w-full bottom-0 bg-gradient-to-t from-primary via-primary/35 to-transparent" />
						<img
							src={article.heroImage}
							alt="Fachada contemporânea"
							className="h-full w-full object-cover"
						/>
					</div>
					<article className="w-1/2 min-w-[550px] mx-auto space-y-6 text-18 leading-9 text-primary-2">
						<div
							className=" "
							// className="space-y-6 text-18 leading-9 text-primary-2     [&_h2]:text-20 [&_h2]:font-500 [&_h2]:text-primary [&_figure]:rounded-3xl [&_figure]:overflow-hidden [&_figure_img]:h-full [&_figure_img]:w-full [&_figure_img]:object-cover"
							dangerouslySetInnerHTML={{ __html: article.content }}
						/>
            {/* TODO: create share links component and logics */ }
						<div className="border-t border-primary/10 pt-8">
							<h3 className="text-16 font-500 uppercase tracking-[0.2em] text-primary-3">
								Compartilhar
							</h3>
							<div className="mt-4 flex gap-4">
								{shareLinks.map((link) => (
									<Link
										key={link.label}
										href={link.href}
										className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-primary/10 bg-primary-invert transition hover:border-primary/40"
									>
										<img src={link.icon} alt={link.label} className="h-5 w-5" />
									</Link>
								))}
							</div>
						</div>
					</article>
				</div>
			</section>

			<section className="bg-primary-5 px-15 py-16">
				<div className="space-y-10">
					<div className="flex flex-wrap items-center justify-between gap-6">
						<div className="space-y-2">
							<p className="text-14 uppercase tracking-[0.2em] text-primary-3">
								Outros artigos
							</p>
							<h2 className="text-28 font-500 text-primary">
								Conteúdos que você também pode gostar
							</h2>
						</div>
						<Link
							href="/blog"
							className="inline-flex items-center gap-2 text-16 font-500 text-primary underline-offset-4 hover:underline"
						>
							Ver todos
							<span className="text-18">→</span>
						</Link>
					</div>

					<div className="grid gap-8 grid-cols-3">
						{additionalArticles.map((item) => (
							<BlogArticleCard
								key={item.title}
								title={item.title}
								subtitle={item.subtitle}
								image={item.image}
								href={item.href}
							/>
						))}
					</div>
				</div>
			</section>
		</div>
	);
}
