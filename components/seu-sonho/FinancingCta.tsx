'use client'

import { CaretRightIcon } from '@phosphor-icons/react';
import ButtonLinkAbq from '../zGeneral/buttonLinkAbq';
import { useMemo } from 'react';

const financingBadges = [
  {
    logo: '/seu-sonho/financancialLogo/mcmv.png',
    text: 'Minha casa minha vida',
  },
  {
    logo: '/seu-sonho/financancialLogo/caixa.png',
    text: 'Financiamento caixa',
  },
  {
    logo: '/seu-sonho/financancialLogo/fgts.png',
    text: 'Use o FGTS',
  },
]

export default function SeuSonhoFinancingCta() {
    const finalWhatsAppUrl = useMemo(() => {
      let whatsAppBaseUrl = 'https://wa.me/';
      let message = 'Olá, gostaria de mais informações sobre o financiamento do meu sonho!';
      let encodedMessage = encodeURIComponent(message);
      let phoneNumber = '5583998800023'; 
      return `${whatsAppBaseUrl}${phoneNumber}/?text=${encodedMessage}`;
    }, [])
    
	return (
		<section className="relative text-primary-invert bg-primary z-20">
      <img src="/seu-sonho/backDrop2.png" alt="" className="absolute inset-0 w-full h-full object-cover -z-10 hidden md:block" />
      <img src="/seu-sonho/mobileBackDrop-1.png" alt="" className="w-full h-full object-cover -z-10 md:hidden" />
			<div className="mx-4 md:mx-15 py-10 md:py-32 grid grid-cols-1 md:grid-cols-2 items-center">
				<div className="space-y-6">
					<h3 className="text-36 md:font-500 max-w-[22ch]">
						Condições facilitadas para comprar sua casa própria
					</h3>
					<p className="text-primary-invert/80">
						Planeje seu futuro com as melhores oportunidades comerciais do mercado. Você consegue parcelar a entrada, participar de programas de incentivo habitacional e muito mais.
					</p>
				<div className="grid gap-4 sm:grid-cols-3">
					{financingBadges.map((badge) => (
            <div
            key={badge.text}
            className="rounded-3xl bg-primary-invert p-6  text-14 font-500 text-primary
            flex md:flex-col justify-between items-center md:items-start"
						>
							<img src={badge.logo} alt={badge.text} className="mb-2 w-[130px]" />
							{badge.text}
						</div>
					))}
				<div className="space-y-4 max-w-md">
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
						textColor="text-primary-invert hover:text-primary-5"
						backgroundColor='bg-primary-4 border-primary-4'
						fullWidth
					/>
         </div>
        </div> 
        </div>
			</div>
		</section>
	)
}
