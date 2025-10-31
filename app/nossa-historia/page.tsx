import NossaHistoriaExperienceStats from '../../components/nossa-historia/ExperienceStats';
import NossaHistoriaFeaturedImage from '../../components/nossa-historia/FeaturedImage';
import NossaHistoriaHero from '../../components/nossa-historia/Hero';
import NossaHistoriaTimeline from '../../components/nossa-historia/Timeline';

export default function NossaHistoria() {
	return (
		<>
			<NossaHistoriaHero />
			<NossaHistoriaExperienceStats />
			<NossaHistoriaFeaturedImage />
			<NossaHistoriaTimeline />
		</>
	);
}
