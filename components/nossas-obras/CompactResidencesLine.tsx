import Card from '../zGeneral/Card';

const COMPACT_RESIDENCES = [
	{
		title: 'Colibris',
		subtitle: 'Seu sonho se tornou o nosso.',
		image: '/home-page/mock/Rectangle 20.svg',
	},
	{
		title: 'Jabuticaba',
		subtitle: 'Seu sonho se tornou o nosso.',
		image: '/home-page/mock/Rectangle 21.svg',
	},
	{
		title: 'Limoeiro',
		subtitle: 'Seu sonho se tornou o nosso.',
		image: '/home-page/mock/Rectangle 22.jpg',
	},
	{
		title: 'Laranja Lima',
		subtitle: 'Seu sonho se tornou o nosso.',
		image: '/home-page/mock/Rectangle 23.jpg',
	},
];

export default function NossasObrasCompactResidencesLine() {
	return (
		<section className="px-15 pt-4 pb-40">
			<div className="flex justify-between rounded-full bg-primary-5 p-4 my-6">
				<span
					className="
        rounded-full border
        bg-primary border-primary
        text-primary-invert text-20 font-500
        px-6 h-12 flex items-center justify-center "
				>
					Linha de Residenciais Compactos
				</span>
			</div>
			<div className="grid gap-6 grid-cols-2">
				{COMPACT_RESIDENCES.map((residence) => (
					<Card
						key={residence.title}
						title={residence.title}
						subtitle={residence.subtitle}
						image={residence.image}
						className="h-64"
					/>
				))}
			</div>
		</section>
	);
}
