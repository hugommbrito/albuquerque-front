'use client'

import { useEffect, useState } from 'react';
import HomeHero from '../../components/home/HomeHero';
import HomeAbout from '../../components/home/HomeAbout';
import HomeCtaBanner from '../../components/home/HomeCtaBanner';
import HomeVentures from '../../components/home/HomeVentures';
import HomeBlog from '../../components/home/HomeBlog';
import HomeContact from '../../components/home/HomeContact';
import { HomePageInfo } from '@/components/home/type';
import { PageContentProvider } from '@/providers/api/api.providers';
import HomeCoverImage from '@/components/home/HomeCoverImage';

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
			<HomeCoverImage desktopCoverImageUrl={homePageInfo?.desktop_cover_image_url || ''} mobileCoverImageUrl={homePageInfo?.mobile_cover_image_url || ''} />
			{/* <HomeHero /> */}
			{/* <HomeAbout /> */}
			{/* <HomeCtaBanner /> */}
			<HomeVentures
				homePageVentures={homePageInfo?.home_page_ventures}
				isLoading={isLoading}
			/>
			<HomeBlog
				homePageArticles={homePageInfo?.home_page_articles}
				isLoading={isLoading}
			/>
			<HomeContact />
		</>
	);
}
