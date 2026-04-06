import type { Metadata } from 'next';
import localFont from 'next/font/local';

import { PageWrapper } from '@/components/layout/PageWrapper';
import './globals.css';
import SiteHeader from '../components/layout/SiteHeader';
import SiteFooter from '../components/layout/SiteFooter';
import IntroOverlay from '@/components/layout/IntroMotionOverlay';

const helverticaLocal = localFont({
	src: [
		{
			path: '../public/fonts/helvertica/HelveticaNeueThin.otf',
			weight: '100',
			style: 'normal',
		},
		{
			path: '../public/fonts/helvertica/HelveticaNeueUltraLight.otf',
			weight: '200',
			style: 'normal',
		},
		{
			path: '../public/fonts/helvertica/HelveticaNeueLight.otf',
			weight: '300',
			style: 'normal',
		},
		{
			path: '../public/fonts/helvertica/HelveticaNeueRoman.otf',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../public/fonts/helvertica/HelveticaNeueMedium.otf',
			weight: '500',
			style: 'normal',
		},
		{
			path: '../public/fonts/helvertica/HelveticaNeueBold.otf',
			weight: '700',
			style: 'normal',
		},
		{
			path: '../public/fonts/helvertica/HelveticaNeueHeavy.otf',
			weight: '800',
			style: 'normal',
		},
		{
			path: '../public/fonts/helvertica/HelveticaNeueBlack.otf',
			weight: '900',
			style: 'normal',
		},
	],
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
			<body className={`antialiased ${helverticaLocal}`}>
				{/* <IntroOverlay /> */}
				<SiteHeader />
				{/* <PageWrapper> */}
				<main>{children}</main> {/* CONTEÚDO DA PÁGINA RENDERIZADO AQUI */}
				{/* </PageWrapper> */}
				<SiteFooter />
			</body>
		</html>
	);
}
