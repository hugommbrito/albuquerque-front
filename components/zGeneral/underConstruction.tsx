import Image from 'next/image';

const UnderConstruction = () => {
	return (
		<div className="flex flex-col h-[100vh] bg-primary-invert text-primary overflow-hidden">
			<div className="flex flex-col items-center pt-10 pb-8 px-6">
				<h1 className="text-[34px] md:text-[96px] font-300 text-center leading-tight mt-40 md:mt-20">
					Em desenvolvimento
				</h1>

				<p className="text-14 md:text-16 text-primary-3 text-center max-w-[320px] md:max-w-[480px] mt-4 leading-relaxed">
					Em breve um novo ambiente para potencializar a realização do seu sonho.
				</p>
			</div>

			<div className="relative w-full flex-1 min-h-[300px] md:min-h-[420px]">
				<Image
					src="/visual-id/underConstructionBackground.jpg"
					alt=""
					fill
					className="object-cover object-bottom grayscale"
				/>
				<div className="absolute top-0 left-0 right-0 h-[25%] bg-gradient-to-b from-primary-invert to-transparent" />
			</div>
		</div>
	);
}

export default UnderConstruction;