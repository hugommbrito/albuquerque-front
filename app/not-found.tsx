import Image from 'next/image';
import { CaretRightIcon } from '@phosphor-icons/react/dist/ssr';
import ButtonLinkAbq from '@/components/zGeneral/buttonLinkAbq';

export default function NotFound() {
	return (
		<div className="flex flex-col items-center justify-center min-h-[80vh] bg-primary-invert px-6">
			<div className="flex items-center max-w-[90%]">
				<span className="text-[160px] md:text-[220px] font-400 leading-none text-primary select-none">
					4
				</span>
				<div className="relative w-[80px] h-[80px] md:w-[100px] md:h-[100px] rotate-180 mx-4">
					<Image
						src="/visual-id/logo-tipo-bk.svg"
						alt=""
						fill
						className="object-contain"
					/>
				</div>
				<span className="text-[160px] md:text-[220px] font-400 leading-none text-primary select-none">
					4
				</span>
			</div>

			<p className="text-primary text-16 md:text-18 mt-8 text-center">
				Ops... Não encontramos essa página.
			</p>

			<ButtonLinkAbq
				href="/home"
				text="Ir para home"
				variant="filled"
				icon={<CaretRightIcon size={16} />}
				className="mt-8"
			/>
		</div>
	);
}
