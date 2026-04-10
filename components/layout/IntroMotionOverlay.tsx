'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';

type Props = {
	onDone?: () => void;
};

export default function IntroOverlay({ onDone }: Props) {
	const pathname = usePathname();
	const [mounted, setMounted] = useState(true);

	const overlay = useAnimation();
	const abqCenter = useAnimation();
	const engenharia = useAnimation();
	const abqBase = useAnimation();
	const casal = useAnimation();
	const bg = useAnimation();

	useEffect(() => {
		let cancelled = false;

		async function run() {
			// estado inicial (tudo “invisível”)
			await Promise.all([
				overlay.set({ opacity: 1 }),
				abqCenter.set({ opacity: 0, y: '200vh' }),
				engenharia.set({ opacity: 0, y: '-200vh' }),
				abqBase.set({ opacity: 0, y: '100vh' }),
				casal.set({ opacity: 0 }),
				bg.set({ opacity: 0 }),
			]);

			// - abq.png aparece de baixo para cima no meio
			await abqCenter.start({
				opacity: 1,
				y: '0vh',
				transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
			});

			// - engenharia.png aparece de cima para baixo
			await engenharia.start({
				opacity: 1,
				y: '0vh',
				transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
			});

			// pequena pausa pra “assentar”
			await new Promise((r) => setTimeout(r, 550));

			// - ambos saem da tela por cima
			await Promise.all([
				abqCenter.start({
					y: 220,
					opacity: 0,
					transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
				}),
				engenharia.start({
					y: -220,
					opacity: 0,
					transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
				}),
			]);

			// - abq.png aparece na base, largura total
      await abqBase.start({
       opacity: 1,
       y: '50%',
       transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
     })

      // - casal.png aparece na frente com fade-in
      // - background.jpg aparece atrás de tudo com fade-in
      await  Promise.all([
         casal.start({
          opacity: 1,
          transition: { duration: 0.7, ease: 'easeOut' },
        }),
         bg.start({
          opacity: 1,
          transition: { duration: 0.9, ease: 'easeOut' },
        })
      ])


			// pequena pausa pra “assentar”
			await new Promise((r) => setTimeout(r, 550));

			// - tudo some com fade-out (conteúdo já está por baixo)
			await overlay.start({
				opacity: 0,
				transition: { duration: 0.6, ease: 'easeInOut' },
			});

			if (cancelled) return;
			setMounted(false);
			onDone?.();
		}

		run();
		return () => {
			cancelled = true;
		};
	}, [overlay, abqCenter, engenharia, abqBase, casal, bg, onDone]);

	if (!mounted || pathname !== '/home') return null;

	return (
		<motion.div
			animate={overlay}
			className="fixed inset-0 z-[9999] pointer-events-none h-[100vh] w-full overflow-hidden bg-primary-invert"
		>

			{/* camada “logos” no centro */}
			<div className="absolute inset-0 z-30 flex items-center justify-center">
				<div className="relative w-[240px] h-[100px] md:w-[380px] md:h-[160px]">

					<motion.img
            initial={{ opacity: 0, y: '100vh' }}
						animate={abqCenter}
						src="/intro-motion-overlay/Alb.svg"
						alt="ABQ"
						className="w-full"
					/>
					<motion.img
            initial={{ opacity: 0, y: '-100vh' }}
						animate={engenharia}
						src="/intro-motion-overlay/Eng.svg"
						alt="Engenharia"
						className="w-[38%] translate-x-30 -translate-y-25 md:translate-x-48 md:-translate-y-40"
					/>
				</div>
			</div>

			{/* base: abq full width + casal na frente */}
			<div className="absolute inset-x-0 bottom-0 z-20 hidden md:block">
				<motion.img
					initial={{ opacity: 0 }}
					animate={bg}
					src="/intro-motion-overlay/sala.png"
					alt="Sala"
					className="h-auto w-full absolute bottom-0"
				/>
				<motion.img
					initial={{ opacity: 0, y: '100vh' }}
					animate={abqBase}
					src="/intro-motion-overlay/Alb.svg"
					alt="ABQ base"
					className="w-full h-auto"
				/>

				<motion.img
					initial={{ opacity: 0 }}
					animate={casal}
					src="/intro-motion-overlay/casal.png"
					alt="Casal"
					className="h-[100vh] w-auto absolute bottom-0 right-[10vw]"
				/>
			</div>
		</motion.div>
	);
}
