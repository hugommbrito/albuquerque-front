import BlogArticleCard from '../zGeneral/BlogArticleCard';
import ButtonLinkAbq from '../zGeneral/buttonLinkAbq';
import LoadingAbq from '../zGeneral/LoadingAbq';
import { HomePageInfo } from './type';

type HomeArea5Props = {
	homePageArticles: HomePageInfo['home_page_articles'],
	isLoading: Boolean
}



export default function HomeArea5({homePageArticles, isLoading}: HomeArea5Props) {
	return (
		<section className="py-20 px-4 md:px-15">
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
					{isLoading ? <LoadingAbq className="col-span-3" /> : (
						homePageArticles?.map((article) => (
							<BlogArticleCard
								title={article.title}
								image={article.cover_image_url}
								href={`/blog/${article.slug}`}
								subtitle={article.short_description}
							/>

						))
					)}
				</div>
			</div>
		</section>
	);
}
