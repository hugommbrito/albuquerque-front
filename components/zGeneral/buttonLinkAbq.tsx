import Link from 'next/link';

interface ButtonAbqProps {
	href: string;
	text: string;
	icon?: React.ReactNode;
	variant?: 'outline' | 'filled';
	fullWidth?: boolean;
	textColor?: string;
	borderColor?: string;
	backgroundColor?: string;
	hoverTextColor?: string;
	hoverBorderColor?: string;
	hoverBackgroundColor?: string;
	className?: string;
}

export default function ButtonLinkAbq({
	href,
	text,
	icon,
	variant = 'outline',
	fullWidth = false,
	textColor,
	borderColor,
	backgroundColor,
	hoverTextColor,
	hoverBorderColor,
	hoverBackgroundColor,
	className = '',
}: ButtonAbqProps) {
	const baseClasses = fullWidth
		? 'w-full flex items-center justify-center gap-2 rounded-full px-3 py-4 transition cursor-pointer'
		: 'inline-flex self-start items-center gap-2 rounded-full px-6 py-4 transition cursor-pointer';

	// Presets baseados na imagem
	const outlinePreset = {
		textColor: 'text-primary',
		borderColor: 'border-primary',
		backgroundColor: 'bg-transparent',
		hoverTextColor: 'hover:text-primary-2',
		hoverBorderColor: 'hover:border-primary-2',
		hoverBackgroundColor: 'hover:bg-primary-5',
	};

	const filledPreset = {
		textColor: 'text-primary-invert',
		borderColor: 'border-primary',
		backgroundColor: 'bg-primary',
		hoverTextColor: 'hover:text-primary-invert',
		hoverBorderColor: 'hover:border-primary-2',
		hoverBackgroundColor: 'hover:bg-primary-2',
	};

	const preset = variant === 'filled' ? filledPreset : outlinePreset;

	const finalClasses = [
		baseClasses,
		textColor || preset.textColor,
		borderColor || preset.borderColor,
		backgroundColor || preset.backgroundColor,
		hoverTextColor || preset.hoverTextColor,
		hoverBorderColor || preset.hoverBorderColor,
		hoverBackgroundColor || preset.hoverBackgroundColor,
		'border', // sempre ter borda
		className,
	]
		.filter(Boolean)
		.join(' ');

	return (
		<Link href={href} className={finalClasses}>
			{text}
			{icon}
		</Link>
	);
}
