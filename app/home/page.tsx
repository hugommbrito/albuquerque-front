'use client'

import { useEffect, useState } from 'react';
import HomeArea1 from '../../components/home/area1';
import HomeArea2 from '../../components/home/area2';
import HomeArea3 from '../../components/home/area3';
import HomeArea4 from '../../components/home/area4';
import HomeArea5 from '../../components/home/area5';
import HomeArea6 from '../../components/home/area6';
import { HomePageInfo } from '@/components/home/type';
import { PageContentProvider } from '@/providers/api/api.providers';

export default function Home() {
	const [homePageInfo, setHomePageInfo] = useState<HomePageInfo | undefined>(undefined)
	const [isLoading, setIsLoading] = useState<Boolean>(true)
	
	useEffect(() => {
		setIsLoading(true)
		async function fetchHomePageInfo() {
			const response = await PageContentProvider.getHomePageInfo()

			if(response instanceof Error) {
				console.error('Error fetching home page info:', response)
				setIsLoading(false)
			} else {
				setHomePageInfo(response as HomePageInfo)
				setIsLoading(false)
			}
		}
		fetchHomePageInfo()

		return () => {};
	}, [])
	
	return (
		<>
			<HomeArea1 />
			<HomeArea2 />
			<HomeArea3 />
			<HomeArea4
				homePageVentures={homePageInfo?.home_page_ventures}
				isLoading={isLoading}
			/>
			<HomeArea5 
				homePageArticles={homePageInfo?.home_page_articles}
				isLoading={isLoading}
			/>
			<HomeArea6 />
		</>
	);
}
