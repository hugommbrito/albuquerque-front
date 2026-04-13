export const dynamic = 'force-dynamic';

import AssistenciaTecnicaHero from '@/components/assistencia-tecnica/Hero';
import AssistenciaTecnicaForm from '@/components/assistencia-tecnica/AssistenciaTecnicaForm';
import { PageContentProvider } from '@/providers/api/api.providers';

type AssistenciaTecnicaPageInfo = {
	desktop_cover_image_url: string;
	mobile_cover_image_url: string;
	terms_text: string;
	ventures: Array<{ id: string | number; name: string }>;
};

export default async function AssistenciaTecnica() {
	const pageInfo = await PageContentProvider.getAssistenciaTecnicaPageInfo() as AssistenciaTecnicaPageInfo | null;

	return (
		<>
			<AssistenciaTecnicaHero
				desktopCoverImageUrl={pageInfo?.desktop_cover_image_url ?? ''}
				mobileCoverImageUrl={pageInfo?.mobile_cover_image_url ?? ''}
			/>
			<AssistenciaTecnicaForm
				termsText={pageInfo?.terms_text ?? ''}
				ventures={pageInfo?.ventures ?? []}
			/>
		</>
	);
}
