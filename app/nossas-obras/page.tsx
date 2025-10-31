import NossasObrasCompactResidencesLine from '../../components/nossas-obras/CompactResidencesLine';
import NossasObrasFinalCta from '../../components/nossas-obras/FinalCta';
import NossasObrasHeadline from '../../components/nossas-obras/Headline';
import NossasObrasHero from '../../components/nossas-obras/Hero';
import NossasObrasPremiumLine from '../../components/nossas-obras/PremiumLine';

export default function NossasObras() {
	return (
		<>
			<NossasObrasHero />
			<NossasObrasHeadline />
			<NossasObrasPremiumLine />
			<NossasObrasCompactResidencesLine />
			<NossasObrasFinalCta />
		</>
	);
}
