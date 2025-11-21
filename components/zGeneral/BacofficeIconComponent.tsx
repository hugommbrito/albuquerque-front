import * as PhosphorIcons from '@phosphor-icons/react';
import { PhosphorIconName } from '../nossas-obras/detail/types';
import { ComponentType } from 'react';

type BacofficeIconComponentProps = {
	iconName: PhosphorIconName;
	size?: number;
	color?: string;
	className?: string;
};

export default function BacofficeIconComponent({
	iconName,
	size = 35,
	color = '',
	className = '',
}: BacofficeIconComponentProps) {

	const IconComponent = PhosphorIcons[
		iconName as keyof typeof PhosphorIcons
	] as
		| ComponentType<{
				size?: number;
				color?: string;
				className?: string;
		  }>
		| undefined;

	return IconComponent ? (
		<IconComponent size={size} color={color} className={className} />
	) : null;
  
}
