type ProjectContactFormProps = {
	headerImage: string;
};

export default function ProjectContactForm({
	headerImage,
}: ProjectContactFormProps) {
	return (
		<section className="py-20">
			<div className="mx-auto max-w-6xl px-6 grid gap-10 md:grid-cols-[1.1fr_1fr] items-center">
				<div className="rounded-3xl overflow-hidden">
					<img
						src={headerImage}
						alt="Família feliz"
						className="w-full h-full object-cover"
					/>
				</div>
				<div className="space-y-6">
					<h3 className="text-24 md:text-32 font-500 text-primary">
						Estamos a uma mensagem de distância de você!
					</h3>
					<form className="space-y-4">
						<input
							className="w-full rounded-full border border-primary/20 px-5 py-3 text-14 outline-none focus:border-primary"
							placeholder="Nome"
						/>
						<input
							className="w-full rounded-full border border-primary/20 px-5 py-3 text-14 outline-none focus:border-primary"
							placeholder="Telefone"
						/>
						<textarea
							className="w-full rounded-3xl border border-primary/20 px-5 py-3 text-14 outline-none focus:border-primary min-h-28"
							placeholder="Mensagem"
						/>
						<button
							type="submit"
							className="rounded-full bg-primary px-6 py-3 text-primary-invert hover:bg-primary-2 transition"
						>
							Enviar
						</button>
					</form>
				</div>
			</div>
		</section>
	);
}
