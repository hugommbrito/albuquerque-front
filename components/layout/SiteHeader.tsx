'use client';

import { ListIcon } from '@phosphor-icons/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';

type HeaderVariant = 'light' | 'dark';

type VariantStyles = {
	header: string;
	containerText: string;
	navLink: string;
	navLinkActive: string;
	corretorButton: string;
	clienteButton: string;
	logoSrc: string;
	gradientBackground: string;
	mobileMenuLogoSrc: string;
};

const NAV_LINKS = [
	{ label: 'Home', href: '/home' },
	{ label: 'Nossas obras', href: '/nossas-obras' },
	{ label: 'Nossa história', href: '/nossa-historia' },
	{ label: 'Seu sonho', href: '/seu-sonho' },
	{ label: 'Blog', href: '/blog' },
	{ label: 'Assistencia Tecnica', href: '/assistencia-tecnica' }
];

const DARK_HEADER_PATH_PREFIXES = ['/nossas-obras', '/blog', '/nossa-historia', '/assistencia-tecnica'];

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
		gradientBackground: '',
		mobileMenuLogoSrc: '/visual-id/logo-hrz3-wt.svg',
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
		gradientBackground:
			'bg-gradient-to-b from-primary via-primary/80 to-transparent',
		mobileMenuLogoSrc: '/visual-id/logo-hrz3-wt.svg',
	},
};

export default function SiteHeader() {
	const pathname = usePathname();
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const variant: HeaderVariant = useMemo(() => {
		if (!pathname) return 'dark';

		return DARK_HEADER_PATH_PREFIXES.some((prefix) =>
			pathname.startsWith(prefix)
		)
			? 'dark'
			: 'light';
	}, [pathname]);

	const styles = VARIANT_STYLES[variant];

	useEffect(() => {
		if (isMenuOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}

		return () => {
			document.body.style.overflow = '';
		};
	}, [isMenuOpen]);

	useEffect(() => {
		setIsMenuOpen(false);
	}, [pathname]);

	function toggleMenu() {
		setIsMenuOpen((prev) => !prev);
	}

	function closeMenu() {
		setIsMenuOpen(false);
	}

	return (
		<header className={`absolute top-0 left-0 right-0 z-50 ${styles.header}`}>
			<div className={`absolute inset-0 -z-10 ${styles.gradientBackground}`} />
			<div
				className={`w-full flex items-center justify-between gap-6 px-6 md:px-24 py-12 md:py-4 text-sm font-medium ${styles.containerText}`}
			>
				<Link
					href="/"
					className="flex items-center gap-2 text-base font-semibold lowercase tracking-tight"
				>
					<img src={styles.logoSrc} alt="Albuquerque logo" className="h-6 md:h-8" />
				</Link>

				<nav className="hidden flex-1 items-center justify-center gap-6 md:flex">
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

				<div className="hidden items-center gap-3 md:flex">
					<Link href="/area-do-corretor" className={styles.corretorButton}>
						Área do corretor
						<span>&gt;</span>
					</Link>
					<Link href="/area-do-cliente" className={styles.clienteButton}>
						Área do cliente
						<span>&gt;</span>
					</Link>
				</div>

				<button
					type="button"
					onClick={toggleMenu}
					className="h-12 w-12 md:hidden"
					aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
				>
						<ListIcon size={32} />
				</button>
			</div>

			{isMenuOpen && (
				<div className="fixed top-0 h-svh w-svw z-[60] flex flex-col justify-between bg-primary px-10 py-12 text-primary-invert md:hidden">
					<div className="flex items-center justify-between">
						<img
							src={styles.mobileMenuLogoSrc}
							alt="Albuquerque logo"
							className="h-6 md:h-8"
						/>
						<button
							type="button"
							onClick={closeMenu}
							className="flex h-12 w-12 items-center justify-center rounded-full border border-white"
							aria-label="Fechar menu"
						>
							<span className="relative block h-5 w-5">
								<span className="absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 rotate-45 bg-white" />
								<span className="absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 -rotate-45 bg-white" />
							</span>
						</button>
					</div>

					<nav className="flex flex-1 flex-col justify-center gap-8 text-28 font-medium">
						{NAV_LINKS.map((link) => {
							const isActive =
								pathname === link.href || pathname.startsWith(`${link.href}/`);

							return (
								<Link
									key={link.href}
									href={link.href}
									onClick={closeMenu}
									className={`transition ${
										isActive
											? 'text-white'
											: 'text-primary-invert/80 hover:text-white'
									}`}
								>
									{link.label}
								</Link>
							);
						})}
					</nav>

					<div className="space-y-4">
						<Link
							href="/area-do-cliente"
							onClick={closeMenu}
							className="block rounded-full bg-white py-4 text-center text-16 font-medium text-primary"
						>
							Área do cliente
							<span className="ml-2">&gt;</span>
						</Link>
						<Link
							href="/area-do-corretor"
							onClick={closeMenu}
							className="block text-center text-16 font-medium text-primary-invert/80 transition hover:text-white"
						>
							Área do corretor
							<span className="ml-2">&gt;</span>
						</Link>
					</div>
				</div>
			)}
		</header>
	);
}
