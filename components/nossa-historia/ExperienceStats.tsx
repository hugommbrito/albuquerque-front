const stats = [
	{
		value: '50',
		description: 'famílias transformadas',
		tone: 'dark',
		size: 'small',
	},
	{
		value: '+20mil',
		description: 'metros de área construída',
		tone: 'light',
		size: 'small',
	},
	{
		value: '+50mil',
		description: 'metros quadrados entregues como consultoria',
		tone: 'light',
		size: 'large',
	},
];

export default function NossaHistoriaExperienceStats() {
	return (
		<section className="py-30 px-15">
			<div className="grid gap-10 grid-cols-2 items-start">
				<div className="max-w-140">
					<h2 className="text-48 mb-12">
						20 anos de experiência em gestão & construção
					</h2>
					<p className="text-18 text-primary-3 mb-10 ">
						Você sabe quando ama a sua vocação quando transforma  aquilo em algo
						para compartilhar com as pessoas.
					</p>
					<p className="text-18 text-primary-3">
						A Albuquerque engenharia tem as suas raízes no universo da
						consultoria em construções, onde através de técnicas, especialidade,
						e kowhow, ajudamos empresas à darem vida de forma a suas ideias. 
					</p>
				</div>
				<div className="grid grid-cols-2 gap-4">
					{stats.map((stat) => {
						const colors =
							stat.tone === 'dark'
								? 'border-primary/20 bg-primary text-primary-invert'
								: 'border-primary/10 bg-white text-primary';

						const sizeClasses = stat.size === 'large' ? 'col-span-2' : '';
						return (
							<div
								key={stat.value}
								className={`h-48 rounded-3xl border border-primary/10 px-6 py-6 flex items-center justify-between gap-8 ${colors} ${sizeClasses}`}
							>
								<div
									className={`h-full rounded-3xl flex flex-col justify-between `}
								>
									<div className="text-40 md:text-48 font-600">
										{stat.value}
									</div>
									<div className="text-12 uppercase tracking-wide">
										{stat.description}
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
