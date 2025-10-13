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
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt-BR">
			<body className={`antialiased ${inter.className}`}>
				<header className=" absolute top-0 left-0 right-0 z-50">
					<div className="mx-auto flex max-w-6xl items-center gap-10 px-6 py-4 text-sm font-medium text-primary">
						{/* TODO: TROCAR PELA LOGO ORIGINAL */}
						<Link
							href="/"
							className="flex items-center gap-2 text-base font-semibold lowercase tracking-tight "
						>
							<span className="relative flex h-8 w-8 items-center justify-center rounded-full border border-primary ">
								<span className="block h-3 w-3 rounded-full bg-primary" />
							</span>
							<span>albuquerque</span>
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
				<main>{children}</main>
				<footer className="
          border-t border-primary
          bg-primary text-primary-invert
          absolute bottom-0 left-0 right-0 z-10" >
					<div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-10 text-sm">
						<div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
							<Link
								href="/"
								className="flex items-center gap-2 text-base font-semibold lowercase tracking-tight "
							>
								<span className="relative flex h-8 w-8 items-center justify-center rounded-full border border-primary-invert">
									<span className="block h-3 w-3 rounded-full bg-primary-invert" />
								</span>
								<span>albuquerque</span>
							</Link>
							<div className="flex flex-wrap items-center gap-6 text-xs uppercase tracking-wide text-primary-invert">
								<span>Realizando sonhos desde 1982</span>
								<span className="hidden h-1 w-1 rounded-full bg-primary-invert sm:block" />
								<span>Construtora &amp; Incorporadora</span>
							</div>
						</div>

						<div className="grid gap-8 text-sm sm:grid-cols-3">
							<div className="space-y-3">
								<h2 className="text-xs font-semibold uppercase tracking-wide text-primary-invert">
									Contato
								</h2>
								<p className="text-primary-invert">
									contato@albuquerque.com.br
								</p>
								<p className="text-primary-invert">+55 (11) 4002-8922</p>
							</div>
							<div className="space-y-3">
								<h2 className="text-xs font-semibold uppercase tracking-wide text-primary-invert">
									Visite
								</h2>
								<p className="text-primary-invert">
									Avenida dos Sonhos, 1234
									<br />
									São Paulo - SP
								</p>
							</div>
							<div className="space-y-3">
								<h2 className="text-xs font-semibold uppercase tracking-wide text-primary-invert">
									Explore
								</h2>
								<div className="flex flex-wrap gap-4 text-primary-invert">
									<Link
										href="/nossas-obras"
										className="transition hover:text-primary"
									>
										Nossas obras
									</Link>
									<Link
										href="/nossa-historia"
										className="transition hover:text-primary"
									>
										Nossa história
									</Link>
									<Link
										href="/seu-sonho"
										className="transition hover:text-primary"
									>
										Seu sonho
									</Link>
									<Link href="/blog" className="transition hover:text-primary">
										Blog
									</Link>
								</div>
							</div>
						</div>

						<div className="flex flex-col gap-4 border-t border-primary-invert pt-6 text-xs text-primary-invert sm:flex-row sm:items-center sm:justify-between">
							<p>
								&copy; 2025 Construtora Albuquerque. Todos os direitos
								reservados.
							</p>
							<div className="flex flex-wrap items-center gap-4">
								<Link
									href="/politica-de-privacidade"
									className="transition hover:text-primary"
								>
									Política de privacidade
								</Link>
								<Link
									href="/termos-de-uso"
									className="transition hover:text-primary"
								>
									Termos de uso
								</Link>
							</div>
						</div>
					</div>
				</footer>
			</body>
		</html>
	);
}
