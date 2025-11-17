import ButtonLinkAbq from '../zGeneral/buttonLinkAbq';

export default function NossasObrasFinalCta() {
	return (
		<section className="relative h-210 px-4 md:px-15 text-primary-invert bg-primary -z-20">
			<div className="py-20 flex flex-col justify-center space-y-8 md:space-y-6 md:pr-35 md:h-full md:w-1/2">
				<h2 className="text-48 md:text-64 font-300">
					Opções para todos os sonhos.
				</h2>
				<p className="text-16 md:text-20">
					Escolha a opção que mais se encaixa no seu perfil e vem realizar o
					sonho do seu novo imóvel.
				</p>
				<ButtonLinkAbq
					href="/seu-sonho"
					text="Conquistar meu imóvel"
					variant="filled"
					backgroundColor="bg-primary-invert"
					textColor="text-primary"
					className="w-fit"
					fullWidth={false}
				/>
			</div>

			<img
				src="/nossas-obras/backDrop2.svg"
				alt=""
				className="absolute inset-0 w-full h-full object-cover -z-10 hidden md:block"
			/>
			<img
				src="/nossas-obras/mobileBackDrop-2.png"
				alt=""
				className="md:hidden"
			/>
		</section>
	);
}
