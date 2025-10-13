import ButtonLinkAbq from '../zGeneral/buttonLinkAbq';

export default function HomeArea6() {
	return (
		<section className="py-20">
			<div className="mx-auto max-w-6xl px-6 grid gap-10 md:grid-cols-2 items-center">
				<div className="rounded-3xl overflow-hidden">
					<img
						src="/home-page/visual-id/contact.jpg"
						alt=""
						className="w-full h-full object-cover"
					/>
				</div>
				<div className="space-y-6">
					<h2 className="text-24 md:text-32 font-500 text-primary max-w-[22ch]">
						Estamos a uma mensagem de distância de você!
					</h2>
					<form className="space-y-4">
						<div className="space-y-1">
							<label className="text-12 text-primary-3">Fale conosco</label>
							<input
								className="w-full rounded-full border border-primary/30 px-4 py-3 outline-none focus:border-primary"
								placeholder="Nome"
							/>
						</div>
						<input
							className="w-full rounded-full border border-primary/30 px-4 py-3 outline-none focus:border-primary"
							placeholder="Telefone"
						/>
						<textarea
							className="w-full rounded-3xl border border-primary/30 px-4 py-3 outline-none focus:border-primary min-h-28"
							placeholder="Mensagem"
						/>
						<button
							type="submit"
							className="rounded-full bg-primary text-primary-invert px-6 py-3 hover:bg-primary-2 transition"
						>
							Enviar
						</button>
					</form>
				</div>
			</div>
		</section>
	);
}
