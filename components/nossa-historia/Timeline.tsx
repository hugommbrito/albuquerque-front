const historyLeft = [
	{year: 2016, event: 'Primeiro tijolo, início da Consultoria'},
	{year: 2017, event: 'Especialidade em Patologias de Obras'},
	{
		year: 2018,
		event:
			'Gestão de obras verticais, implantação de selo PBQPH nível A e ISO 9001, como parceiro base, entregamos junto com o cliente maos de 8.000m2 de área construída',
	},
	{year: 2021, event: 'Especialidade pelo MIT - Portugal'},
	{year: 2022, event: 'MBA Gerenciamento Projetos'},
];

const historyRight = [
	{year: 2023, event: 'Flor do Campo'},
	{year: 2024, event: 'Jacarandá e Limoeiro'},
	{year: 2025, event: 'Laranja Lima, Colibris e Jabuticaba'},
	{year: 2026, event: 'Parque Resedá'},
];

export default function NossaHistoriaTimeline() {
	const renderItems = (items: { year: number; event: string }[]) =>
		items.map((item) => (
			<div key={item.year} className="flex items-start">

				<p className="text-16 font-700 text-primary-3 leading-relaxed">{item.year} - <span className="text-16 font-400 text-primary-3 leading-relaxed">
					{item.event}
				</span></p>
				
			</div>
		));

	return (
		<section className="px-15 py-28">
			<div className="">
				<div className="max-w-[50ch]">
					<h3 className="mb-22 text-36  font-500 text-primary leading-tight">
						Uma reputação que é resultado de muitos anos de construção.
					</h3>
				</div>
				<div className="grid gap-10 grid-cols-2">
					<div className="flex gap-5 pr-40">
            <img src="/nossa-historia/timeLine2.svg" alt="" className="" />
					  <div className="h-full flex flex-col justify-between text-primary">
  						{renderItems(historyLeft)}
  					</div>
					</div>
					<div className="flex gap-5">
            <img src="/nossa-historia/timeLine1.svg" alt="" className="" />
					  <div className="h-full flex flex-col justify-between text-primary">
							<p className="text-32">Virar a chave, para abrir novas portas. Transformamos agora conhecimento em sonhos edificados.</p>
  						{renderItems(historyRight)}
  					</div>
					</div>

				</div>
			</div>
		</section>
	);
}
