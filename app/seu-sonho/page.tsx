export const dynamic = 'force-dynamic';

import SeuSonhoFinancingCta from '../../components/seu-sonho/FinancingCta';
import SeuSonhoHero from '../../components/seu-sonho/Hero';
import SeuSonhoVideoTopics from '../../components/seu-sonho/VideoTopics';
import { SeuSonhoPageInfo } from '@/components/seu-sonho/types';
import { PageContentProvider } from '@/providers/api/api.providers';

export default async function SeuSonho() {
	const pageInfo = await PageContentProvider.getSeuSonhoPageInfo() as SeuSonhoPageInfo | null;

	return (
		<>
			<SeuSonhoHero
				desktopCoverImageUrl={pageInfo?.desktop_cover_image_url ?? ''}
				mobileCoverImageUrl={pageInfo?.mobile_cover_image_url ?? ''}
			/>
			<SeuSonhoVideoTopics
				videoTopics={pageInfo?.instructional_videos ?? []}
				ebookUrl={pageInfo?.ebook_url ?? ''}
			/>
			<SeuSonhoFinancingCta />
		</>
	);
}
