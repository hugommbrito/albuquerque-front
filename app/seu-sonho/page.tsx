'use client';

import { useEffect, useState } from 'react';
import SeuSonhoFinancingCta from '../../components/seu-sonho/FinancingCta';
import SeuSonhoHero from '../../components/seu-sonho/Hero';
import SeuSonhoVideoTopics from '../../components/seu-sonho/VideoTopics';
import { SeuSonhoPageInfo } from '@/components/seu-sonho/types';
import { PageContentProvider } from '@/providers/api/api.providers';

export default function SeuSonho() {
	const [pageInfo, setPageInfo] = useState<SeuSonhoPageInfo | undefined>(undefined);

	useEffect(() => {
		async function fetchPageInfo() {
			const response = await PageContentProvider.getSeuSonhoPageInfo();

			if (response instanceof Error) {
				console.error('Error fetching seu sonho page info:', response);
			} else {
				setPageInfo(response as SeuSonhoPageInfo);
			}
		}
		fetchPageInfo();

		return () => {};
	}, []);

	return (
		<>
			<SeuSonhoHero
				desktopCoverImageUrl={pageInfo?.desktop_cover_image_url ?? ''}
				mobileCoverImageUrl={pageInfo?.mobile_cover_image_url ?? ''}
			/>
			<SeuSonhoVideoTopics />
			<SeuSonhoFinancingCta />
		</>
	);
}
