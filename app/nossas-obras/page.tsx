'use client';

import { CategoriesPageInfo } from '@/components/nossas-obras/types';
import NossasObrasCompactResidencesLine from '../../components/nossas-obras/CompactResidencesLine';
import NossasObrasFinalCta from '../../components/nossas-obras/FinalCta';
import NossasObrasHeadline from '../../components/nossas-obras/Headline';
import NossasObrasHero from '../../components/nossas-obras/Hero';
import NossasObrasPremiumLine from '../../components/nossas-obras/PremiumLine';
import { useEffect, useMemo, useState } from 'react';
import { PageContentProvider } from '@/providers/api/api.providers';
import GenericCategory from '@/components/nossas-obras/GenericCategory';
import LoadingAbq from '@/components/zGeneral/LoadingAbq';

export default function NossasObras() {
	const [categoriesInfo, setCategoriesInfo] = useState<
		CategoriesPageInfo | undefined
	>(undefined);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setIsLoading(true);
		async function fetchCategoriesInfo() {
			const response = await PageContentProvider.getVentureInfo();

			if (response instanceof Error) {
				console.error('Error fetching categories info:', response);
				setIsLoading(false);
			} else {
				setCategoriesInfo(response as CategoriesPageInfo);
				setIsLoading(false);
			}
		}
		fetchCategoriesInfo();

		return () => {};
	}, []);

	const categories = useMemo(
		() => categoriesInfo?.categories ?? [],
		[categoriesInfo]
	);

	return (
		<>
			<NossasObrasHero />
			<NossasObrasHeadline />
			{isLoading ? (
				<LoadingAbq />
			) : (
				categories.map((currentCategory, index) => (
					<GenericCategory
						key={currentCategory.id}
						category={currentCategory}
						colorInvert={index % 2 === 1}
					/>
			)))}
			{/* <NossasObrasPremiumLine /> */}
			{/* <NossasObrasCompactResidencesLine /> */}
			<NossasObrasFinalCta />
		</>
	);
}
