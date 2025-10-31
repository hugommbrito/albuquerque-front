import type { Metadata } from 'next';
import Link from 'next/link';
import { Inter } from 'next/font/google';
//TODO: Ajustar Cursor pointer no hover dos botões
import './globals.css';

const inter = Inter({
	subsets: ['latin'],
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	display: 'swap',
});

export const metadata: Metadata = {
	title: 'Albuquerque',
	description: 'Albuquerque - Realizando sonhos',
	icons: {
		icon: '/visual-id/logo-tipo-wt.svg',
		apple: '/visual-id/logo-tipo-wt.svg',
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt-BR">
			<body className={`antialiased ${inter.className}`}>
				{/* TODO: REMOVER FUNDO DO HEADER E APLICAR LÓGICA DE CLARO/ESCURO */}
				<header className=" absolute top-0 left-0 right-0 z-50 bg-[#f8f9f7]">
					<div className="w-full flex items-center gap-10 px-15 py-4 text-sm font-medium text-primary">
						<Link
							href="/"
							className="flex items-center gap-2 text-base font-semibold lowercase tracking-tight "
						>
							<img
								src="/visual-id/logo-hrz3-bk.svg"
								alt="Albuquerque logo"
								className="h-8"
							/>
						</Link>

						<nav className="flex flex-1 items-center justify-center gap-6">
							<Link href="/home">Home</Link>
							<Link href="/nossas-obras">Nossas obras</Link>
							<Link href="/nossa-historia">Nossa história</Link>
							<Link href="/seu-sonho">Seu sonho</Link>
							<Link href="/blog">Blog</Link>
						</nav>

						<div className="flex items-center gap-3">
							<Link
								href="/area-do-corretor"
								className="flex items-center gap-2 rounded-full border border-primary  px-4 py-2 text-primary transition hover:border-primary  hover:text-primary-2"
							>
								Área do corretor
								<span>&gt;</span>
							</Link>
							<Link
								href="/area-do-cliente"
								className="flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-white transition hover:bg-primary-2"
							>
								Área do cliente
								<span>&gt;</span>
							</Link>
						</div>
					</div>
				</header>
				<main>{children}</main> {/* CONTEÚDO DA PÁGINA RENDERIZADO AQUI */}
				<footer
					className="
          bg-primary text-primary-invert
					px-15 pt-30 pb-12
					"
				>
					<div className="mb-45 grid grid-cols-3">
						<div>
							<img
								src="/visual-id/logo-vert-wt.svg"
								alt="Albuquerque logo"
								className="h-65"
							/>
						</div>
						<div className="flex flex-col gap-8">
							<p className="font-800 text-primary-invert/80">
								Escritório Comercial
							</p>
							<p className="font-400 text-primary-invert/80">
								Rua Sarg. Nicolau Dias de Farias <br />
								567 - Sala 201, Miramar- João Pessoa/PB
							</p>
							<p className="font-800 text-primary-invert/80">Siga-nos</p>
							<div className="flex items-center gap-10">
								<Link
									href="https://www.facebook.com/albuquerque"
									className="transition hover:text-primary"
								>
									<img src="/icons/fb.svg" alt="Facebook" />
								</Link>
								<Link
									href="https://www.instagram.com/albuquerque"
									className="transition hover:text-primary"
								>
									<img src="/icons/ig.svg" alt="Instagram" />
								</Link>
								<Link
									href="https://www.linkedin.com/company/albuquerque"
									className="transition hover:text-primary"
								>
									<img src="/icons/yt.svg" alt="YouTube" />
								</Link>
							</div>
						</div>
						<div className="flex flex-col gap-8">
							<p className="font-800 text-primary-invert/80">
								Central de relacionamento
							</p>

							<div className="flex gap-5 items-center">
								<img src="/icons/wa.svg" alt="WhatsApp" className='h-6 '  color=''/>
								<p className="text-32 font-400 text-primary-invert/80">83 3019-0895</p>
								<img src="/icons/arrow-up-right-wt.svg" alt="Facebook" className='h-6'/>
							</div>
							<p className="font-800 text-primary-invert/80">
								Central de vendas
							</p>

							<div className="flex gap-5 items-center">
								<img src="/icons/wa.svg" alt="WhatsApp" className='h-6 '  color=''/>
								<p className="text-32 font-400 text-primary-invert/80">83 3019-0800</p>
								<img src="/icons/arrow-up-right-wt.svg" alt="Facebook" className='h-6'/>
							</div>
						</div>
					</div>
					<div className="flex flex-col gap-4 border-t-[1px] border-primary-4 pt-6 text-xs text-primary-invert sm:flex-row sm:items-center sm:justify-between">
						<div className="flex flex-wrap items-center gap-4">
							<Link
								href="/Home"
								className="transition hover:text-primary-3"
								>
									Home
							</Link>
							<Link
								href="/nossas-obras"
								className="transition hover:text-primary-3"
								>
								Nossas Obras
							</Link>
							<Link
								href="/nossa-historia"
								className="transition hover:text-primary-3"
								>
								Nossa História
							</Link>
							<Link
								href="/seu-sonho"
								className="transition hover:text-primary-3"
								>
								Financie
							</Link>
							<Link
								href="/blog"
								className="transition hover:text-primary-3"
								>
								Blog
							</Link>
						</div>
								<p>
									© 2025 • Todos direitos reservados
								</p>
					</div>
				</footer>
			</body>
		</html>
	);
}
