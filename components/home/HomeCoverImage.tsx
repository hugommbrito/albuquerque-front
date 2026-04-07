'use client'
import { ArrowUpRightIcon } from '@phosphor-icons/react';
import ButtonLinkAbq from '../zGeneral/buttonLinkAbq';

type HomeCoverImageProps = {
	desktopCoverImageUrl: string,
	mobileCoverImageUrl: string
}

export default function HomeCoverImage({ desktopCoverImageUrl, mobileCoverImageUrl }: HomeCoverImageProps) {
	return (
		<div className="relative overflow-hidden h-230 md:h-auto">
			<img
				src={desktopCoverImageUrl}
				alt=""
				aria-hidden="true"
				className="hidden h-auto w-full z-10 md:block"
			/>
			<img
				src={mobileCoverImageUrl}
				alt=""
				aria-hidden="true"
				className="w-full absolute bottom-0 max-w-none z-10 md:hidden "
			/>
		</div>
	);
}
