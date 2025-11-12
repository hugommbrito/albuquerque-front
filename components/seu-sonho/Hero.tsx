import ButtonLinkAbq from '../zGeneral/buttonLinkAbq';

export default function SeuSonhoHero() {
	return (
		<section className="relative h-200 w-full ">
			<div className="h-full w-1/2 pl-15 flex flex-col justify-center space-y-8">
				<div className="">
					<h1 className="text-36 md:text-56 font-500 text-primary leading-tight max-w-[18ch]">
						Que tal começar a idealizar sua conquista? Faça uma simulação:
					</h1>
				</div>
				<form className="space-y-4 max-w-md">
					<input
						className="w-full rounded-full border border-primary/15 bg-white px-6 py-3 text-14 text-primary outline-none focus:border-primary"
						placeholder="Qual é sua renda familiar mensal?"
					/>
					<input
						className="w-full rounded-full border border-primary/15 bg-white px-6 py-3 text-14 text-primary outline-none focus:border-primary"
						placeholder="Qual o valor de entrada? (Opcional)"
					/>
					<ButtonLinkAbq
						href="/contato"
						text="Iniciar simulação"
						variant="filled"
						icon={<img src='/icons/chevron-right.svg' alt="Seta para a direita" />}
            backgroundColor='bg-primary-invert border-primary-invert'
            textColor='text-primary'
						fullWidth
					/>
				</form>
			</div>
			<img
				src="/seu-sonho/backDrop1.png"
				alt="Casal celebrando nova casa"
				className="absolute inset-0 -z-10 h-full w-full object-cover"
			/>
		</section>
	);
}
