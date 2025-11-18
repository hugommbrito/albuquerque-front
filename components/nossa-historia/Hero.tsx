export default function NossaHistoriaHero() {
	return (
		<section className="relative md:h-195 md:px-15">
			<img
				src="/nossa-historia/backDrop1.png"
				alt="Família feliz em casa"
				className="absolute inset-0 -z-10 w-full h-full object-cover hidden md:block"
			/>
			<img
				src="/nossa-historia/mobileBackDrop1.png"
				alt="Família feliz em casa"
				className="w-full h-full object-cover md:hidden"
			/>
			<div className="flex flex-col justify-around h-full bg-[#E2DFE2] md:bg-transparent px-4 md:px-0 py-10 md:py-0">
				<div></div>
				<h1 className="text-44 md:text-96 leading-16 md:leading-25 font-400">
					Além de moradia, construímos lar.
				</h1>
				<span className="text-16 md:text-12 uppercase tracking-widest text-primary mt-20 md:mt-0">
					Nossa história ↓
				</span>
			</div>
		</section>
	);
}
