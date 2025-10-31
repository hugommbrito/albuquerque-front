'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';

type HeaderVariant = 'light' | 'dark';

type VariantStyles = {
	header: string;
	containerText: string;
	navLink: string;
	navLinkActive: string;
	corretorButton: string;
	clienteButton: string;
	logoSrc: string;
};

const NAV_LINKS = [
	{ label: 'Home', href: '/home' },
	{ label: 'Nossas obras', href: '/nossas-obras' },
	{ label: 'Nossa história', href: '/nossa-historia' },
	{ label: 'Seu sonho', href: '/seu-sonho' },
	{ label: 'Blog', href: '/blog' },
];

const DARK_HEADER_PATH_PREFIXES = ['/nossas-obras', '/blog'];

const VARIANT_STYLES: Record<HeaderVariant, VariantStyles> = {
	light: {
		header: 'bg-transparent',
		containerText: 'text-primary',
		navLink: 'text-primary hover:text-primary-2 transition-colors',
		navLinkActive: 'font-semibold text-primary',
		corretorButton:
			'flex items-center gap-2 rounded-full border border-primary px-4 py-2 text-primary transition hover:border-primary hover:text-primary-2',
		clienteButton:
			'flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-white transition hover:bg-primary-2',
		logoSrc: '/visual-id/logo-hrz3-bk.svg',
	},
	dark: {
		header: 'bg-transparent',
		containerText: 'text-primary-invert',
		navLink: 'text-primary-invert transition hover:opacity-80',
		navLinkActive: 'font-semibold text-white',
		corretorButton:
			'flex items-center gap-2 rounded-full border border-white px-4 py-2 text-white transition hover:bg-white/10',
		clienteButton:
			'flex items-center gap-2 rounded-full bg-white px-4 py-2 text-primary transition hover:bg-white/90',
		logoSrc: '/visual-id/logo-hrz3-wt.svg',
	},
};

export default function SiteHeader() {
	const pathname = usePathname();

	const variant: HeaderVariant = useMemo(() => {
		if (!pathname) return 'dark';

		return DARK_HEADER_PATH_PREFIXES.some((prefix) =>
			pathname.startsWith(prefix)
		)
			? 'dark'
			: 'light';
	}, [pathname]);

	const styles = VARIANT_STYLES[variant];

	return (
		<header className={`absolute top-0 left-0 right-0 z-50 ${styles.header}`}>
			<div
				className={`w-full flex items-center gap-10 px-15 py-4 text-sm font-medium ${styles.containerText}`}
			>
				<Link
					href="/"
					className="flex items-center gap-2 text-base font-semibold lowercase tracking-tight"
				>
					<img src={styles.logoSrc} alt="Albuquerque logo" className="h-8" />
				</Link>

				<nav className="flex flex-1 items-center justify-center gap-6">
					{NAV_LINKS.map((link) => {
						const isActive =
							pathname === link.href || pathname.startsWith(`${link.href}/`);

						return (
							<Link
								key={link.href}
								href={link.href}
								className={`${styles.navLink} ${
									isActive ? styles.navLinkActive : ''
								}`.trim()}
							>
								{link.label}
							</Link>
						);
					})}
				</nav>

				<div className="flex items-center gap-3">
					<Link href="/area-do-corretor" className={styles.corretorButton}>
						Área do corretor
						<span>&gt;</span>
					</Link>
					<Link href="/area-do-cliente" className={styles.clienteButton}>
						Área do cliente
						<span>&gt;</span>
					</Link>
				</div>
			</div>
		</header>
	);
}
