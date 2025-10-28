import ButtonLinkAbq from '../../../components/zGeneral/buttonLinkAbq';

const project = {
	slug: 'parque-reseda',
	name: 'Parque Resedá',
	subtitle: 'Seu sonho se tornou o nosso.',
	heroImage: '/home-page/visual-id/reseda-hero.jpg',
	breadcrumb: [
		{ label: 'Empreendimentos', href: '/nossas-obras' },
		{ label: 'Parque Resedá', href: '#' },
	],
	location: 'Miramar',
	status: 'Em construção',
	deliveryYear: '2025',
	typologies: ['1 quarto', '2 quartos', 'Coberturas garden'],
	amenities: [
		{ label: 'Localização', value: 'Miramar' },
		{ label: 'Em construção', value: 'Status' },
		{ label: '28', value: 'Unidades' },
		{ label: 'Piscina', value: 'Lazer' },
		{ label: '3 vagas', value: 'Vagas de garagem' },
	],
};

export async function generateStaticParams() {
	return [{ slug: project.slug }];
}

const gallery = {
	highlight: '/home-page/visual-id/reseda-interior-hero.jpg',
	secondary: [
		'/home-page/visual-id/reseda-interior-1.jpg',
		'/home-page/visual-id/reseda-interior-2.jpg',
		'/home-page/visual-id/reseda-interior-3.jpg',
	],
};

const floorPlans = [
	{
		id: 'apt-1',
		label: 'Apt 1 Quarto',
		description: [
			'Área - 67m²',
			'1 Suíte Master',
			'Sala de estar + jantar',
			'Cozinha americana',
			'1 vaga de garagem',
		],
		image: '/home-page/visual-id/planta-1.jpg',
	},
	{
		id: 'apt-2',
		label: 'Apt 2 Quartos',
		description: [
			'Área - 91m²',
			'2 Suítes',
			'Varanda gourmet',
			'Living integrado',
			'2 vagas de garagem',
		],
		image: '/home-page/visual-id/planta-2.jpg',
	},
];

const outdoorGallery = [
	'/home-page/visual-id/reseda-area-1.jpg',
	'/home-page/visual-id/reseda-area-2.jpg',
	'/home-page/visual-id/reseda-area-3.jpg',
	'/home-page/visual-id/reseda-area-4.jpg',
	'/home-page/visual-id/reseda-area-5.jpg',
	'/home-page/visual-id/reseda-area-6.jpg',
];

const financingPartners = [
	'Minha Casa Minha Vida',
	'Caixa',
	'FGTS',
	'Use seu FGTS',
];

export default function ProjectDetailPage({
	params,
}: {
	params: { slug: string };
}) {
	if (params.slug !== project.slug) {
		return (
			<div className="py-32 text-center text-primary">
				Empreendimento não encontrado.
			</div>
		);
	}

	return (
		<>
			{/* Hero */}
			<section className="relative">
				<div className="relative h-[520px] md:h-[600px]">
					<img
						src={project.heroImage}
						alt={`Fachada do empreendimento ${project.name}`}
						className="absolute inset-0 h-full w-full object-cover"
					/>
					<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />
					<div className="relative mx-auto flex h-full max-w-6xl flex-col justify-end gap-6 px-6 pb-16 text-primary-invert">
						<div className="flex flex-wrap items-center gap-2 text-12 uppercase tracking-wide text-primary-invert/80">
							{project.breadcrumb.map((item, index) => (
								<span key={item.label} className="flex items-center gap-2">
									{index > 0 && (
										<span className="text-primary-invert/40">/</span>
									)}
									{item.href === '#' ? (
										item.label
									) : (
										<a href={item.href}>{item.label}</a>
									)}
								</span>
							))}
						</div>
						<div className="space-y-3">
							<h1 className="text-40 md:text-56 font-500 leading-tight">
								{project.name}
							</h1>
							<p className="text-16 text-primary-invert/80">
								{project.subtitle}
							</p>
						</div>
						<div className="flex flex-wrap items-center gap-3 text-12">
							<span className="rounded-full bg-primary-invert/10 px-4 py-2">{`Localização: ${project.location}`}</span>
							<span className="rounded-full bg-primary-invert/10 px-4 py-2">
								{project.typologies.join(' • ')}
							</span>
							<span className="rounded-full bg-primary-invert/10 px-4 py-2">{`Entrega: ${project.deliveryYear}`}</span>
						</div>
						<div className="pt-4 text-12 uppercase tracking-widest text-primary-invert/60">
							Scroll ↓
						</div>
					</div>
				</div>
			</section>

			{/* Gallery */}
			<section className="py-16">
				<div className="mx-auto max-w-6xl px-6 space-y-6">
					<div className="grid gap-4 md:grid-cols-3">
						<div className="md:col-span-3 overflow-hidden rounded-3xl">
							<img
								src={gallery.highlight}
								alt="Sala integrada"
								className="h-full w-full object-cover"
							/>
						</div>
						{gallery.secondary.map((img) => (
							<div key={img} className="overflow-hidden rounded-3xl">
								<img
									src={img}
									alt="Ambiente do empreendimento"
									className="h-full w-full object-cover"
								/>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Amenities & CTA */}
			<section className="pb-20">
				<div className="mx-auto max-w-6xl px-6 grid gap-10 md:grid-cols-[0.9fr_1.1fr] items-start">
					<div className="space-y-6">
						<h2 className="text-32 md:text-40 font-500 text-primary">
							Onde morar é desfrutar.
						</h2>
						<p className="text-16 text-primary-3 max-w-[40ch]">
							Cada metro quadrado foi pensado para acolher momentos de descanso,
							encontros e novas memórias. Ambientes iluminados, integração
							inteligente e paisagismo convidativo transformam o cotidiano em
							bem-estar.
						</p>
						<div className="flex flex-wrap gap-4">
							<ButtonLinkAbq
								href="/nossas-obras"
								text="Últimas unidades"
								variant="filled"
							/>
							<ButtonLinkAbq
								href="/contato"
								text="Fale conosco"
								variant="outline"
							/>
						</div>
					</div>
					<div className="grid gap-4 md:grid-cols-2">
						{project.amenities.map((item) => (
							<div
								key={item.label}
								className="rounded-3xl border border-primary/10 bg-white px-4 py-5"
							>
								<div className="text-12 uppercase tracking-wide text-primary-3">
									{item.label}
								</div>
								<div className="text-20 font-500 text-primary mt-2">
									{item.value}
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Floor plans */}
			<section className="py-20 bg-primary-5">
				<div className="mx-auto max-w-6xl px-6 space-y-8">
					<div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
						<h3 className="text-24 md:text-32 font-500 text-primary">
							Plantas humanizadas para todos os perfis
						</h3>
						<div className="flex gap-3">
							{floorPlans.map((plan, index) => (
								<button
									key={plan.id}
									type="button"
									className={`rounded-full border px-5 py-2 text-12 transition ${
										index === 0
											? 'border-primary bg-primary text-primary-invert'
											: 'border-primary/40 text-primary hover:border-primary'
									}`}
								>
									{plan.label}
								</button>
							))}
						</div>
					</div>

					<div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
						<div className="rounded-[32px] overflow-hidden bg-white p-4">
							<img
								src={floorPlans[0].image}
								alt="Planta humanizada"
								className="w-full object-contain"
							/>
						</div>
						<div className="space-y-6">
							<div className="rounded-3xl bg-white p-6">
								<h4 className="text-18 font-500 text-primary mb-4">
									Destaques do apartamento
								</h4>
								<ul className="space-y-2 text-14 text-primary-3">
									{floorPlans[0].description.map((item) => (
										<li key={item}>• {item}</li>
									))}
								</ul>
							</div>
							<div className="grid grid-cols-4 gap-3">
								{floorPlans.map((plan) => (
									<div
										key={plan.id}
										className="rounded-2xl overflow-hidden border border-primary/10"
									>
										<img
											src={plan.image}
											alt={`Miniatura planta ${plan.label}`}
											className="h-full w-full object-cover"
										/>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Outdoor gallery */}
			<section className="py-20">
				<div className="mx-auto max-w-6xl px-6 space-y-6">
					<h3 className="text-24 md:text-32 font-500 text-primary">
						Área comum e lazer para toda a família
					</h3>
					<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
						{outdoorGallery.map((img) => (
							<div key={img} className="rounded-3xl overflow-hidden">
								<img
									src={img}
									alt="Área comum do empreendimento"
									className="h-full w-full object-cover"
								/>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Financing */}
			<section className="py-20 bg-primary text-primary-invert">
				<div className="mx-auto max-w-6xl px-6 grid gap-10 md:grid-cols-[1.1fr_1fr] items-center">
					<div className="space-y-6">
						<h3 className="text-28 md:text-36 font-500 max-w-[18ch]">
							Condições facilitadas para comprar sua casa própria.
						</h3>
						<p className="text-primary-invert/80 max-w-[40ch]">
							Parceiros que viabilizam o melhor financiamento com parcelas
							acessíveis e documentação acompanhada pela nossa equipe
							especializada.
						</p>
						<ButtonLinkAbq
							href="/contato"
							text="Quero simular"
							variant="outline"
						/>
					</div>
					<div className="grid gap-4 sm:grid-cols-2">
						{financingPartners.map((partner) => (
							<div
								key={partner}
								className="rounded-3xl bg-primary-invert text-primary px-6 py-5 text-center text-14 font-500"
							>
								{partner}
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Contact form */}
			<section className="py-20">
				<div className="mx-auto max-w-6xl px-6 grid gap-10 md:grid-cols-[1.1fr_1fr] items-center">
					<div className="rounded-3xl overflow-hidden">
						<img
							src="/home-page/visual-id/contact.jpg"
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
		</>
	);
}
