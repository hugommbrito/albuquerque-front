import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
//TODO: Ajustar Cursor pointer no hover dos botões
import './globals.css';
import SiteHeader from '../components/layout/SiteHeader';
import SiteFooter from '../components/layout/SiteFooter';

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
				<SiteHeader />
				<main>{children}</main> {/* CONTEÚDO DA PÁGINA RENDERIZADO AQUI */}
				<SiteFooter />
			</body>
		</html>
	);
}
