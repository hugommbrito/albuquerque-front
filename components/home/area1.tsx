'use client'
import { ArrowUpRightIcon } from '@phosphor-icons/react';
import ButtonLinkAbq from '../zGeneral/buttonLinkAbq';

export default function HomeArea1() {
	return (
		<div className="relative overflow-hidden h-230 md:h-auto">
			{/*//TODO: Adicionar gradiente com casal na frente*/}
			<div className="absolute z-30 w-180 top-1/2 left-15 right-15 transform -translate-y-1/2 hidden md:block">
				<p className="font-inter font-500 text-48 text-primary">
					Estamos por trás de cada sonho que se torna realidade
				</p>
				<ButtonLinkAbq
					href="/seu-sonho"
					text="Realize seu sonho"
					variant="filled"
					className=""
					icon={<ArrowUpRightIcon color='black' />}
				/>
			</div>
			<div className="h-full mx-6 pb-20 pt-34 relative z-40 flex flex-col justify-between md:hidden">
				<p className="text-40 leading-10 text-primary">
					Estamos por trás de cada sonho que se torna realidade
				</p>
				<ButtonLinkAbq
					href="/seu-sonho"
					text="Realize seu sonho"
					variant="filled"
					backgroundColor='bg-primary-5'
					borderColor='border-none'
					textColor='text-primary'
					className="flex justify-center"
					icon={<ArrowUpRightIcon color='black' />}
				/>
			</div>
			<img
				src="/home-page/backDrop1.svg"
				alt=""
				aria-hidden="true"
				className="hidden h-auto w-full z-10 md:block"
			/>
			<img
				src="/home-page/mobileBackDrop-1.png"
				alt=""
				aria-hidden="true"
				className="object-cover absolute bottom-0 max-w-none z-10 md:hidden "
			/>
			<img
				src="/home-page/mobileBackDrop-2.png"
				alt=""
				aria-hidden="true"
				className="h-[100%] absolute bottom-0 max-w-none z-20 md:hidden "
			/>
			<div className="absolute bottom-0 h-1/3 w-full z-30 bg-gradient-to-t from-primary to-transparent " />
		</div>
	);
}
