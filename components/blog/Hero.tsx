type BlogHeroProps = {
	desktopCoverImageUrl: string;
	mobileCoverImageUrl: string;
};

export default function BlogHero({ desktopCoverImageUrl, mobileCoverImageUrl }: BlogHeroProps) {
	return (
		<section className="relative h-250 md:h-155 bg-primary -z-20">
			<img
				src={desktopCoverImageUrl}
				alt=""
				className="absolute inset-0 h-full w-full object-cover -z-10 hidden md:block"
			/>
			<img
				src={mobileCoverImageUrl}
				alt=""
				className=" -z-10 md:hidden"
			/>

			<div className="space-y-6 md:w-2/3 px-4 md:px-15 md:h-full flex flex-col justify-center mt-20 md:mt-0">
				<span className="
				inline-flex items-center
				w-fit py-4 px-6 rounded-full
				text-16 font-700 text-primary-invert/60 bg-primary-2 
				"
				>
					Blog
				</span>
				<h1 className="text-48 md:text-96 text-primary-invert leading-16 md:leading-25">
					Compartilhar crescer, inspirar.
				</h1>
			</div>
		</section>
	);
}
