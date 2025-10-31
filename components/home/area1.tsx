import ButtonLinkAbq from '../zGeneral/buttonLinkAbq';

export default function HomeArea1() {
	return (
		<div className="relative">
			{/*//TODO: Adicionar gradiente com casal na frente*/}
			<div className="absolute z-20 w-180 top-1/2 left-15 right-15 transform -translate-y-1/2">
				<p className="font-inter font-500 text-48 text-primary">
					Estamos por trás de cada sonho que se torna realidade
				</p>
				<ButtonLinkAbq
					href="/seu-sonho"
					text="Realize seu sonho"
					variant="filled"
					className=""
					icon={<img src="/icons/arrow-up-right-wt.svg" alt="" />}
				/>
			</div>
			<img
				src="/home-page/backDrop1.svg"
				alt=""
				aria-hidden="true"
				className="w-full h-auto z-10"
			/>
		</div>
	);
}
