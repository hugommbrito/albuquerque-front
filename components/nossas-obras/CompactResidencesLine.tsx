import Card from '../zGeneral/Card';

const COMPACT_RESIDENCES = [
	{
		title: 'Colibris',
		subtitle: 'Seu sonho se tornou o nosso.',
		image: '/home-page/mock/Rectangle 20.svg',
		location: "Miramar",
		status: "Em Construção",
		units: "28"
	},
	{
		title: 'Jabuticaba',
		subtitle: 'Seu sonho se tornou o nosso.',
		image: '/home-page/mock/Rectangle 21.svg',
				location: "Miramar",
		status: "Em Construção",
		units: "28"
	},
	{
		title: 'Limoeiro',
		subtitle: 'Seu sonho se tornou o nosso.',
		image: '/home-page/mock/Rectangle 22.jpg',
				location: "Miramar",
		status: "Em Construção",
		units: "28"
	},
	{
		title: 'Laranja Lima',
		subtitle: 'Seu sonho se tornou o nosso.',
		image: '/home-page/mock/Rectangle 23.jpg',
				location: "Miramar",
		status: "Em Construção",
		units: "28"
	},

];

export default function NossasObrasCompactResidencesLine() {
	return (
		<section className="px-4 md:px-15 pt-4 pb-40 bg-primary-invert">
			<div className="flex justify-center md:justify-between rounded-full bg-primary-5 p-4 my-6">
				<span
					className="
        rounded-full border
        bg-primary border-primary
        text-primary-invert text-20 font-500
        px-4.5 md:px-6 h-12 flex items-center justify-center "
				>
					Linha de Residenciais Compactos
				</span>
			</div>
			<div className="grid gap-6 grid-cols-1 md:grid-cols-2">
				{COMPACT_RESIDENCES.map((residence) => (
					<Card
						key={residence.title}
						title={residence.title}
						subtitle={residence.subtitle}
						image={residence.image}
						className=""
						location={residence.location}
						status={residence.status}
						units={residence.units}
					/>
				))}
			</div>
		</section>
	);
}
