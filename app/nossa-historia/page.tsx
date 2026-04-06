'use client';

import { useEffect, useState } from 'react';
import NossaHistoriaExperienceStats from '../../components/nossa-historia/ExperienceStats';
import NossaHistoriaFeaturedImage from '../../components/nossa-historia/FeaturedImage';
import NossaHistoriaHero from '../../components/nossa-historia/Hero';
import NossaHistoriaTimeline from '../../components/nossa-historia/Timeline';
import { NossaHistoriaPageInfo } from '@/components/nossa-historia/types';
import { PageContentProvider } from '@/providers/api/api.providers';

export default function NossaHistoria() {
	const [pageInfo, setPageInfo] = useState<NossaHistoriaPageInfo | undefined>(undefined);

	useEffect(() => {
		async function fetchPageInfo() {
			const response = await PageContentProvider.getNossaHistoriaPageInfo();

			if (response instanceof Error) {
				console.error('Error fetching nossa historia page info:', response);
			} else {
				setPageInfo(response as NossaHistoriaPageInfo);
			}
		}
		fetchPageInfo();

		return () => {};
	}, []);

	return (
		<>
			<NossaHistoriaHero
				desktopCoverImageUrl={pageInfo?.desktop_cover_image_url ?? ''}
				mobileCoverImageUrl={pageInfo?.mobile_cover_image_url ?? ''}
			/>
			<NossaHistoriaExperienceStats />
			<NossaHistoriaFeaturedImage />
			<NossaHistoriaTimeline />
		</>
	);
}
