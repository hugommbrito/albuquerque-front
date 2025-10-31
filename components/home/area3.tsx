import ButtonLinkAbq from '../zGeneral/buttonLinkAbq';

export default function HomeArea3() {
	return (
		<section className="relative">
			<img src="/home-page/backDrop2.svg" alt="" className="w-full" />
			<div className="space-y-6 w-1/3 absolute top-1/2 left-15 right-50 transform -translate-y-1/2 ">
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
		</section>
	);
}
