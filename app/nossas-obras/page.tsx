export const dynamic = 'force-dynamic';

import { VenturesPageInfo } from '@/components/nossas-obras/types';
import NossasObrasFinalCta from '../../components/nossas-obras/FinalCta';
import NossasObrasHeadline from '../../components/nossas-obras/Headline';
import NossasObrasHero from '../../components/nossas-obras/Hero';
import { PageContentProvider } from '@/providers/api/api.providers';
import GenericCategory from '@/components/nossas-obras/GenericCategory';

export default async function NossasObras() {
	const categoriesInfo = await PageContentProvider.getVentureInfo() as VenturesPageInfo | null;
	const categories = categoriesInfo?.statuses ?? [];

	return (
		<>
			<NossasObrasHero
				desktopCoverImageUrl={categoriesInfo?.desktop_cover_image_url ?? ''}
				mobileCoverImageUrl={categoriesInfo?.mobile_cover_image_url ?? ''}
			/>
			<NossasObrasHeadline />
			{categories.map((currentCategory, index) => (
				<GenericCategory
					key={currentCategory.id}
					category={currentCategory}
					colorInvert={index % 2 === 1}
				/>
			))}
			<NossasObrasFinalCta />
		</>
	);
}
