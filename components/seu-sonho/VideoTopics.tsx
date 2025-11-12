import ButtonLinkAbq from "../zGeneral/buttonLinkAbq";

const videoTopics = [
	{
		title: 'Data de entrega',
		image: '/seu-sonho/video1.jpg',
	},
	{
		title: 'Entrada no financiamento',
		image: '/seu-sonho/video2.jpg',
	},
	{
		title: 'Simulando financiamento',
		image: '/seu-sonho/video3.jpg',
	},
	{
		title: 'Análise de crédito',
		image: '/seu-sonho/video4.jpg',
	},
	{
		title: 'Cronograma de obra',
		image: '/seu-sonho/video5.jpg',
	},
	{
		title: 'Documentação necessária',
		image: '/seu-sonho/video6.jpg',
	}
];

export default function SeuSonhoVideoTopics() {
	return (
		<section className="py-20 px-15">
			<div className="space-y-3 w-1/3 mb-16">
				<h2 className="text-48">
					Sua virada se chave acaba de começar
				</h2>
				<p className="text-16 ">
					Escolha o tema, dê o play e tire todas as suas dúvidas.
				</p>
			</div>
			<div className="overflow-x-auto [scrollbar-color: bg-primary]" >
				<div className="flex gap-6 min-w-full">
					{videoTopics.map((topic) => (
						<div
							key={topic.title}
							className="w-[290px] h-[520px] flex-shrink-0 space-y-3"
						>
							<div className="relative h-4/5 overflow-hidden rounded-3xl">
								<img
									src={topic.image}
									alt={topic.title}
									className="h-full w-full object-cover"
								/>
								<button
									type="button"
									className="absolute inset-0 m-auto h-12 w-12 rounded-full text-white/50 hover:text-white/90 text-48 flex items-center justify-center shadow"
								>
									▶
								</button>
							</div>
							<p className="text-14 text-primary text-center">{topic.title}</p>
						</div>
					))}
				</div>
			</div>
			<div className="rounded-2xl bg-primary px-6 py-4 mt-2 flex items-center justify-between">
        <p className="text-white font-500">
				Prefere ler? Baixe nosso ebook “Como financiar meu sonho” grátis.
        </p>
				<ButtonLinkAbq 
          href="#"
          text="Baixar"
          backgroundColor="bg-primary-invert"
          icon={<img src='/icons/downloadIcon.svg' alt="Ícone de download" />}
        />
			</div>
		</section>
	);
}
