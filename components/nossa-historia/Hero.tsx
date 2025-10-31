export default function NossaHistoriaHero() {
	return (
		<section className="relative h-195 px-15">
			<div className="flex flex-col justify-around h-full ">
        <div></div>
				<h1 className="text-96 leading-[100px] font-400">
					Além de moradia, construímos lar.
				</h1>
				<span className="text-12 uppercase tracking-widest text-primary">
					Nossa história ↓
				</span>
			</div>
			<img
				src="/nossa-historia/backDrop1.svg"
				alt="Família feliz em casa"
				className="absolute inset-0 -z-10 w-full h-full object-cover"
			/>
		</section>
	);
}
