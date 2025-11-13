export default function BlogHero() {
	return (
		<section className="relative h-155">
			<img
				src="/blog/backDrop1.png"
				alt=""
				className="absolute inset-0 h-full -z-10"
			/>

			<div className="space-y-6 w-2/3 px-15 h-full flex flex-col justify-center">
				<span className="
				inline-flex items-center
				w-fit py-4 px-6 rounded-full
				text-16 font-700 text-primary-invert/60 bg-primary-2 
				"
				>
					Blog
				</span>
				<h1 className="text-96 text-primary-invert leading-25">
					Compartilhar crescer, inspirar.
				</h1>
			</div>
		</section>
	);
}
