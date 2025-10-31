import BlogArticleCard from '../zGeneral/BlogArticleCard';
import ButtonLinkAbq from '../zGeneral/buttonLinkAbq';



export default function HomeArea5() {
	return (
		<section className="py-20 px-15">
			<div className="space-y-6">
				<div className="flex items-center justify-between">
					<h2 className="text-32 md:text-40 font-500 text-primary max-w-[20ch]">
						Conhecimento bom é compartilhado
					</h2>
				</div>
				<div className="flex justify-between rounded-full bg-primary-5 p-4 my-6">
					<span
						className="
								rounded-full border
								bg-primary border-primary
								text-primary-invert text-20 font-500
								px-6 h-12 flex items-center justify-center "
					>
						Blog
					</span>
					<ButtonLinkAbq
						href="/blog"
						text="Ver todos os artigos"
						variant="outline"
						backgroundColor="bg-primary-invert"
						borderColor="border-primary-invert"
						hoverBackgroundColor="hover:bg-primary-5"
						hoverBorderColor="hover:border-primary-invert"
						className="text-16 h-12"
						icon={<img src="/icons/arrow-up-right-bk.svg" alt="" />}
					/>
				</div>

				<div className="grid gap-6 md:grid-cols-3">
					<BlogArticleCard
						title="Tendências em arquitetura residencial"
						image="/home-page/mock/blogMock1.jpg"
						href="/blog"
						subtitle="A arquitetura residencial em 2025 promete ser um reflexo da nossa era: tecnológica, sustentável e focada no bem-estar"
					/>
					<BlogArticleCard
						title="Materiais sustentáveis em 2025"
						image="/home-page/mock/blogMock2.jpg"
						href="/blog"
						subtitle='A arquitetura residencial em 2025 promete ser um reflexo da nossa era: tecnológica, sustentável e focada no bem-estar'
					/>
					<BlogArticleCard
						title="Como planejar sua obra"
						image="/home-page/mock/blogMock3.jpg"
						href="/blog"
						subtitle="A arquitetura residencial em 2025 promete ser um reflexo da nossa era: tecnológica, sustentável e focada no bem-estar"
					/>
				</div>
			</div>
		</section>
	);
}
