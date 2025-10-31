import ButtonLinkAbq from '../zGeneral/buttonLinkAbq';

export default function NossasObrasFinalCta() {
	return (
		<section className="relative h-210 px-15 text-primary-invert">
			<div className="h-full grid grid-cols-2">
				<div className="pr-35 flex flex-col justify-center space-y-6">
					<h2 className="text-64 font-300">
						Opções para todos os sonhos.
					</h2>
					<p className="text-20">
Escolha a opção que mais se encaixa no seu perfil e vem realizar o sonho do seu novo imóvel.
					</p>
					<ButtonLinkAbq
						href="/seu-sonho"
						text="Conquistar meu imóvel"
						variant="filled"
            backgroundColor='bg-primary-invert'
            textColor='text-primary'
            fullWidth={false}
					/>
				</div>
				<div></div>
			</div>
      <img src="/nossas-obras/backDrop2.svg" alt="" className="absolute inset-0 w-full h-full object-cover -z-10" />
		</section>
	);
}
