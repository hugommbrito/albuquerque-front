import ButtonLinkAbq from '../zGeneral/buttonLinkAbq';

export default function HomeArea6() {
	return (
		<section className="relative py-20 h-200">
			<img
				src="/home-page/backDrop3.svg"
				alt=""
				className="w-full h-200 absolute top-0 z-0 object-cover"
			/>
			<div className="w-full grid grid-cols-2 relative">
				<div className="space-y-6 col-start-2 px-30 flex flex-col justify-between">
					<h2 className="text-24 md:text-32 font-500 text-primary max-w-[22ch]">
						Estamos a uma mensagem de distância de você!
					</h2>
					<form className="space-y-4">
						<div className="space-y-1">
							<label className="text-12 text-primary-3">Fale conosco</label>
							<input
								className="w-full rounded-full bg-primary-5 border border-primary/20 px-4 py-3 outline-none focus:border-primary"
								placeholder="Nome"
							/>
						</div>
						<input
							className="w-full rounded-full bg-primary-5 border border-primary/20 px-4 py-3 outline-none focus:border-primary"
							placeholder="Telefone"
						/>
						<textarea
							className="w-full rounded-3xl bg-primary-5 border border-primary/20 px-4 py-3 outline-none focus:border-primary min-h-28"
							placeholder="Mensagem"
						/>
						<ButtonLinkAbq
							href="/contato"
							text="Enviar"
							variant="filled"
							fullWidth
						/>
						
					</form>
				</div>
			</div>
		</section>
	);
}
