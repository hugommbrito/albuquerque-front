const stats = [
	{
		value: '50',
		description: 'famílias transformadas',
		tone: 'dark',
	},
	{
		value: '+20mil',
		description: 'metros de área construída',
		tone: 'light',
	},
	{
		value: '+50mil',
		description: 'metros quadrados entregues como consultoria',
		tone: 'light',
	},
];

const historyLeft = [
	'2016 - Primeiro tijolo, início da Consultoria',
	'2017 - Especialidade em Patologias de Obras',
	'2018 - Gestão de obras verticais, implantação de selo PBQPH nível A e ISO 9001',
	'2021 - Especialidade pelo MIT - Portugal',
	'2022 - MBA Gerenciamento Projetos',
];

const historyRight = [
	'Virar a chave, para abrir novas portas. Transformamos agora conhecimento em sonhos edificados.',
	'2023 - Flor do Campo',
	'2024 - Jacarandá e Limoeiro',
	'2025 - Laranja Lima, Colibris e Jabuticaba',
	'2026 - Parque Resedá',
];

export default function NossaHistoria() {
	return (
		<>
			{/* Hero Section */}
			<section className="bg-primary-5">
				<div className="mx-auto max-w-6xl px-6 py-16 md:py-24 grid gap-10 md:grid-cols-[1.2fr_1fr] items-center">
					<div className="space-y-8">
						<span className="text-12 uppercase tracking-widest text-primary">
							Nossa história ↓
						</span>
						<h1 className="text-36 md:text-56 font-500 leading-tight text-primary max-w-[18ch]">
							Além de moradia, construímos lar.
						</h1>
					</div>
					<div className="rounded-[56px] overflow-hidden shadow-lg">
						<img
							src="/home-page/visual-id/history-hero.jpg"
							alt="Família feliz em casa"
							className="w-full h-full object-cover"
						/>
					</div>
				</div>
			</section>

			{/* Experience & Stats */}
			<section className="py-20">
				<div className="mx-auto max-w-6xl px-6 grid gap-10 md:grid-cols-[1.1fr_1fr] items-start">
					<div className="space-y-6 max-w-[36ch]">
						<h2 className="text-28 md:text-36 font-500 text-primary">
							20 anos de experiência em gestão &amp; construção
						</h2>
						<p className="text-16 text-primary-3">
							Você sabe quando ama a sua vocação quando transforma aquilo em
							algo para compartilhar com as pessoas. A Albuquerque engenharia
							tem as suas raízes no universo da consultoria em construções, onde
							através de técnicas, especialidade e know-how, ajudamos empresas a
							darem vida de forma a suas ideias.
						</p>
					</div>
					<div className="grid gap-4">
						{stats.map((stat) => (
							<div
								key={stat.value}
								className={`rounded-3xl border border-primary/10 px-6 py-6 flex items-center justify-between gap-8 ${
									stat.tone === 'dark'
										? 'bg-primary text-primary-invert'
										: 'bg-white'
								}`}
							>
								<span className="text-32 font-600">{stat.value}</span>
								<span
									className={`text-14 leading-snug ${
										stat.tone === 'dark'
											? 'text-primary-invert/80'
											: 'text-primary-3'
									}`}
								>
									{stat.description}
								</span>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Featured Image */}
			<section className="pb-20">
				<div className="mx-auto max-w-6xl px-6">
					<div className="rounded-[32px] overflow-hidden shadow-lg">
						<img
							src="/home-page/visual-id/history-building.jpg"
							alt="Empreendimento Albuquerque"
							className="w-full h-full object-cover"
						/>
					</div>
				</div>
			</section>

			{/* Reputation Timeline */}
			<section className="pb-28">
				<div className="mx-auto max-w-6xl px-6 space-y-10">
					<div className="max-w-[40ch]">
						<h3 className="text-28 md:text-36 font-500 text-primary leading-tight">
							Uma reputação que é resultado de muitos anos de construção.
						</h3>
					</div>
					<div className="grid gap-10 lg:grid-cols-2">
						<div className="space-y-4 text-primary">
							{historyLeft.map((item) => (
								<div key={item} className="flex items-start gap-3">
									<span className="mt-2 h-2 w-2 rounded-full bg-primary" />
									<p className="text-16 text-primary-3 leading-relaxed">
										{item}
									</p>
								</div>
							))}
						</div>
						<div className="space-y-4 text-primary">
							{historyRight.map((item) => (
								<div key={item} className="flex items-start gap-3">
									<span className="mt-2 h-2 w-2 rounded-full bg-primary" />
									<p className="text-16 text-primary-3 leading-relaxed">
										{item}
									</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
