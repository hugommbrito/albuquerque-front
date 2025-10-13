import ButtonLinkAbq from '../zGeneral/buttonLinkAbq';

function BlogCard({ title, image }: { title: string; image: string }) {
	return (
		<div className="rounded-2xl overflow-hidden border border-primary/10 bg-white">
			<div className="h-36 bg-primary-5">
				<img src={image} alt="" className="h-full w-full object-cover" />
			</div>
			<div className="p-4 space-y-2">
				<div className="text-14 text-primary-3 uppercase tracking-wide">
					Artigo
				</div>
				<div className="text-16 font-500 text-primary">{title}</div>
				<ButtonLinkAbq
					href="/blog"
					text="Ler artigo"
					variant="outline"
					className="mt-2"
				/>
			</div>
		</div>
	);
}

export default function HomeArea5() {
	return (
		<section className="py-20">
			<div className="mx-auto max-w-6xl px-6 space-y-6">
				<div className="flex items-center justify-between">
					<h2 className="text-32 md:text-40 font-500 text-primary max-w-[20ch]">
						Conhecimento bom é compartilhado
					</h2>
					<ButtonLinkAbq
						href="/blog"
						text="Ver todos artigos"
						variant="outline"
					/>
				</div>

				<div className="grid gap-6 md:grid-cols-3">
					<BlogCard
						title="Tendências em arquitetura residencial"
						image="/home-page/visual-id/blog1.jpg"
					/>
					<BlogCard
						title="Materiais sustentáveis em 2025"
						image="/home-page/visual-id/blog2.jpg"
					/>
					<BlogCard
						title="Como planejar sua obra"
						image="/home-page/visual-id/blog3.jpg"
					/>
				</div>
			</div>
		</section>
	);
}
