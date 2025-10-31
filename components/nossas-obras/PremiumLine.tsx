import ButtonLinkAbq from '../zGeneral/buttonLinkAbq';
import Card from '../zGeneral/Card';

export default function NossasObrasPremiumLine() {
	return (
		<section className="px-15 py-25 bg-primary">
			<div className="flex justify-between rounded-full bg-primary-4 p-4 my-6">
				<span
					className="
        rounded-full border
        bg-primary-3 border-primary-3
        text-primary-invert text-20 font-500
        px-6 h-12 flex items-center justify-center "
				>
					Linha Premium
				</span>
			</div>
			<Card
				title="Parque Resedá"
				subtitle="Seu sonho se tornou o nosso."
				image="/home-page/mock/Rectangle 19.svg"
				className="h-72 md:h-96"
			/>
		</section>
	);
}
