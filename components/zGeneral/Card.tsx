interface CardProps {
	title: string;
	subtitle?: string;
	image: string;
	className?: string;
	href?: string;
	overlayGradient?: string; // allow custom overlay gradient
	children?: React.ReactNode; // for extra content if needed
}

export default function Card({
	title,
	subtitle,
	image,
	className = '',
	href,
	overlayGradient = 'bg-gradient-to-t from-black/60 to-transparent',
	children,
}: CardProps) {
	const content = (
		<div className={`relative rounded-3xl overflow-hidden h-145 ${className}`}>
			<img src={image} alt="" className="h-full w-full object-cover" />
			<div className={`absolute inset-0 ${overlayGradient}`} />
			<div className="absolute bottom-4 left-4 right-4 text-white">
				<div className="text-56 font-500">{title}</div>
				{subtitle && <div className="text-20 opacity-90">{subtitle}</div>}
				{children}
			</div>
		</div>
	);

	if (href) {
		return (
			<a href={href} className="block">
				{content}
			</a>
		);
	}

	return content;
}
