import ButtonLinkAbq from '../zGeneral/buttonLinkAbq';
import Card from '../zGeneral/Card';

export default function HomeArea4() {
	return (
		<section className="py-20 px-15">
			<h2 className="text-48 font-400 text-center">
				A natureza arquiteta as melhores soluções.
			</h2>
			<h2 className="text-48 font-500 text-center">Nós também.</h2>

			<div className="flex justify-between rounded-full bg-primary-5 p-4 my-6">
				<span
					className="
				rounded-full border
				bg-primary border-primary
				text-primary-invert text-20 font-500
				px-6 h-12 flex items-center justify-center "
				>
					Empreendimentos
				</span>
				<ButtonLinkAbq
					href="/nossas-obras"
					text="Ver todos"
					variant="outline"
					backgroundColor="bg-primary-invert"
					borderColor="border-primary-invert"
					hoverBackgroundColor="hover:bg-primary-5"
					hoverBorderColor="hover:border-primary-invert"
					className="text-16 h-12"
				/>
			</div>

			<div className="grid gap-6 md:grid-cols-2">
				<Card
					title="Parque Resedá"
					subtitle="Seu sonho se tornou o nosso."
					image="/home-page/mock/Rectangle 19.svg"
					className=""
					href="/nossas-obras/parque-reseda"
					width="full"
					
				/>
				<Card
					title="Colibris"
					subtitle="Seu sonho se tornou o nosso."
					image="/home-page/mock/Rectangle 20.svg"
					className=""
					href="/nossas-obras/parque-reseda"
					width="single"
				/>
				<Card
					title="Jabuticaba"
					subtitle="Seu sonho se tornou o nosso."
					image="/home-page/mock/Rectangle 21.svg"
					className=""
					href="/nossas-obras/parque-reseda"
					width="single"
				/>
			</div>
		</section>
	);
}
