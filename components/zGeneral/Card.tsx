import { ArrowUpRightIcon } from '@phosphor-icons/react';
import ButtonLinkAbq from './buttonLinkAbq';

interface CardProps {
	title: string;
	subtitle?: string;
	image: string;
	className?: string;
	href?: string;
	location?: string;
	status?: string;
	units?: string;
	overlayGradient?: string; // allow custom overlay gradient
	children?: React.ReactNode; // for extra content if needed
	width?: 'single' | number | 'full';
}

export default function Card({
	title,
	subtitle,
	image,
	className = '',
	href,
	location,
	status,
	units,
	overlayGradient = 'bg-gradient-to-t from-primary via-primary/20 to-primary/30',
	children,
	width = 'single',
}: CardProps) {
	let widthClass: string;
	switch (width) {
		case 'single':
			widthClass = 'col-span-1';
			break;
		case 'full':
			widthClass = 'col-span-full';
			break;
		default:
			widthClass = `col-span-${width}`;
	}

	const wrapperClasses = [`group`, widthClass, className]
		.filter(Boolean)
		.join(' ');

	const content = (
		<div className="relative h-145 overflow-hidden rounded-3xl transition-transform duration-500">
			<img
				src={image}
				alt=""
				className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-115"
			/>
			<div className={`absolute inset-0 ${overlayGradient}`} />
			<div className="absolute bottom-4 md:translate-y-38 group-hover:translate-y-0 transition-all duration-500 ease-out left-4 right-4 text-white">
				<div className="text-40 md:text-56 font-500">{title}</div>
				{subtitle && <div className="text-20 opacity-90">{subtitle}</div>}
				<ButtonLinkAbq
					href=""
					text=""
					backgroundColor="bg-primary-invert"
					icon={<ArrowUpRightIcon />}
					className="mt-8 md:hidden"
				/>
				<div className="h-30 mt-8 hidden md:flex justify-between items-end translate-y-60 group-hover:translate-y-0 transition-all duration-500 ease-out">
					<div className='flex gap-4'>
						{location && (
							<div className="min-w-35 p-4 bg-primary rounded-2xl h-30 flex flex-col justify-between">
								<p className="text-14">Localização</p>
								<p className="text-20 font-500">{location}</p>
							</div>
						)}
						{status && (
							<div className="min-w-35 p-4 bg-primary rounded-2xl h-30 flex flex-col justify-between">
								<p className="text-14">Status</p>
								<p className="text-20 font-500">{status}</p>
							</div>
						)}
						{units && (
							<div className="min-w-35 p-4 bg-primary rounded-2xl h-30 flex flex-col justify-between">
								<p className="text-14">Unidades</p>
								<p className="text-20 font-500">{units}</p>
							</div>
						)}
					</div>
					{/* <ButtonLinkAbq
						href=""
						text=""
						backgroundColor="bg-primary-invert"
						icon={<ArrowUpRightIcon />}
						className="h-fit p-8 hidden md:block hover:cursor-pointer"
					/> */}
				</div>
				{children}
			</div>
		</div>
	);

	if (href) {
		return (
			<a href={href} className={`${wrapperClasses} block`}>
				{content}
			</a>
		);
	}

	return <div className={wrapperClasses}>{content}</div>;
}
