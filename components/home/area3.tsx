import ButtonLinkAbq from '../zGeneral/buttonLinkAbq';

export default function HomeArea3() {
	return (
		<section className="md:relative">
			<img src="/home-page/backDrop2.svg" alt="" className="w-full hidden md:block" />
			<img src="/home-page/mobileBackDrop-3.png" alt="" className="w-full md:hidden" />
			<div className="hidden md:block absolute space-y-6 w-1/3 top-1/2 left-15 right-50 transform -translate-y-1/2">
				<h2 className="text-64 font-500 text-primary-invert">
					Quando você conquista, nós realizamos.
				</h2>
				<ButtonLinkAbq
					href="/seu-sonho"
					text="Conquistar meu imóvel"
					variant="outline"
					backgroundColor="bg-primary-invert"
					hoverBackgroundColor="hover:bg-primary-5"
				/>
			</div>
			<div className="md:hidden h-110 bg-primary flex flex-col justify-between items-start py-15 px-4">
				<h2 className="text-48  text-primary-invert">
					Quando você conquista, nós realizamos.
				</h2>
				<ButtonLinkAbq
					href="/seu-sonho"
					text="Conquistar meu imóvel"
					variant="outline"
					backgroundColor="bg-primary-invert"
					hoverBackgroundColor="hover:bg-primary-5"
				/>
			</div>
		</section>
	);
}
