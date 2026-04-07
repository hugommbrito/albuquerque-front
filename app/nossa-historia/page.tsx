export const dynamic = 'force-dynamic';

import NossaHistoriaExperienceStats from '../../components/nossa-historia/ExperienceStats';
import NossaHistoriaFeaturedImage from '../../components/nossa-historia/FeaturedImage';
import NossaHistoriaHero from '../../components/nossa-historia/Hero';
import NossaHistoriaTimeline from '../../components/nossa-historia/Timeline';
import { NossaHistoriaPageInfo } from '@/components/nossa-historia/types';
import { PageContentProvider } from '@/providers/api/api.providers';

export default async function NossaHistoria() {
	const pageInfo = await PageContentProvider.getNossaHistoriaPageInfo() as NossaHistoriaPageInfo | null;

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
