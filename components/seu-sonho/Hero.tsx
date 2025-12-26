'use client';

import { CaretRightIcon } from '@phosphor-icons/react';
import ButtonLinkAbq from '../zGeneral/buttonLinkAbq';
import { useMemo } from 'react';

export default function SeuSonhoHero() {
	const finalWhatsAppUrl = useMemo(() => {
		let whatsAppBaseUrl = 'https://wa.me/';
		let message = 'Olá, gostaria de mais informações sobre o financiamento do meu sonho!';
		let encodedMessage = encodeURIComponent(message);
		let phoneNumber = '5583998800023'; 
		return `${whatsAppBaseUrl}${phoneNumber}/?text=${encodedMessage}`;
	}, [])

	return (
		<section className="relative h-full md:h-200 w-full bg-[#DDDDDD] ">
			<div className="h-full md:w-1/2 px-4 py-40 md:py-0 md:pl-15 flex flex-col justify-center space-y-8 relative z-20">
				<h1 className="text-36 md:text-56 font-500 text-primary leading-tight max-w-[18ch]">
					Que tal começar a idealizar sua conquista? Faça uma simulação:
				</h1>

				<form className="space-y-4 max-w-md">
					{/* <input
						className="w-full rounded-full border border-primary/15 bg-white px-6 py-3 text-14 text-primary outline-none focus:border-primary"
						placeholder="Qual é sua renda familiar mensal?"
					/>
					<input
						className="w-full rounded-full border border-primary/15 bg-white px-6 py-3 text-14 text-primary outline-none focus:border-primary"
						placeholder="Qual o valor de entrada? (Opcional)"
					/> */}
					<ButtonLinkAbq
						href="https://www8.caixa.gov.br/siopiinternet-web/simulaOperacaoInternet.do?method=inicializarCasoUso"
						target='_blank'
						text="Iniciar simulação"
						variant="filled"
						icon={<CaretRightIcon />}
						backgroundColor="bg-primary-invert border-primary-invert"
						textColor="text-primary"
						fullWidth
					/>
					<ButtonLinkAbq
						href={finalWhatsAppUrl}
						target='_blank'
						text="Fale com nossos atendentes"
						variant="outline"
						icon={<CaretRightIcon />}
						hoverBackgroundColor="hover:bg-primary hover:border-primary-invert"
						textColor="text-primary hover:text-primary-invert"
						fullWidth
					/>
				</form>
			</div>
			<img
				src="/seu-sonho/backDrop1.png"
				alt="Casal celebrando nova casa"
				className="absolute inset-0 z-10 h-full w-full object-cover hidden md:block"
			/>
			<img
				src="/seu-sonho/mobileBackDrop-2.png"
				alt="Casal celebrando nova casa"
				className="h-full w-full object-cover md:hidden"
			/>
		</section>
	);
}
