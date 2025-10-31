import Link from 'next/link';

const FOOTER_NAV_LINKS = [
	{ label: 'Home', href: '/home' },
	{ label: 'Nossas Obras', href: '/nossas-obras' },
	{ label: 'Nossa História', href: '/nossa-historia' },
	{ label: 'Financie', href: '/seu-sonho' },
	{ label: 'Blog', href: '/blog' },
];

const SOCIAL_LINKS = [
	{
		label: 'Facebook',
		href: 'https://www.facebook.com/albuquerque',
		icon: '/icons/fb.svg',
	},
	{
		label: 'Instagram',
		href: 'https://www.instagram.com/albuquerque',
		icon: '/icons/ig.svg',
	},
	{
		label: 'YouTube',
		href: 'https://www.linkedin.com/company/albuquerque',
		icon: '/icons/yt.svg',
	},
];

const CONTACT_SECTIONS = [
	{
		title: 'Central de relacionamento',
		number: '83 3019-0895',
	},
	{
		title: 'Central de vendas',
		number: '83 3019-0800',
	},
];

export default function SiteFooter() {
	return (
		<footer className="bg-primary text-primary-invert px-15 pt-30 pb-12">
			<div className="mb-45 grid grid-cols-1 gap-12 md:grid-cols-3">
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
						Rua Sarg. Nicolau Dias de Farias
						<br />
						567 - Sala 201, Miramar- João Pessoa/PB
					</p>
					<p className="font-800 text-primary-invert/80">Siga-nos</p>
					<div className="flex items-center gap-10">
						{SOCIAL_LINKS.map((social) => (
							<Link
								key={social.label}
								href={social.href}
								className="transition hover:text-primary"
							>
								<img src={social.icon} alt={social.label} />
							</Link>
						))}
					</div>
				</div>
				<div className="flex flex-col gap-8">
					{CONTACT_SECTIONS.map((section) => (
						<div key={section.title} className="flex flex-col gap-6">
							<p className="font-800 text-primary-invert/80">{section.title}</p>
							<div className="flex items-center gap-5">
								<img src="/icons/wa.svg" alt="WhatsApp" className="h-6" />
								<p className="text-32 font-400 text-primary-invert/80">
									{section.number}
								</p>
								<img
									src="/icons/arrow-up-right-wt.svg"
									alt="Abrir conversa"
									className="h-6"
								/>
							</div>
						</div>
					))}
				</div>
			</div>
			<div className="flex flex-col gap-4 border-t border-primary-4 pt-6 text-xs text-primary-invert sm:flex-row sm:items-center sm:justify-between">
				<div className="flex flex-wrap items-center gap-4">
					{FOOTER_NAV_LINKS.map((link) => (
						<Link
							key={link.href}
							href={link.href}
							className="transition hover:text-primary-3"
						>
							{link.label}
						</Link>
					))}
				</div>
				<p>© 2025 • Todos direitos reservados</p>
			</div>
		</footer>
	);
}
