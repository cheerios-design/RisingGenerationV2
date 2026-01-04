import Hero from '@/components/home/Hero';
import FeaturesGrid from '@/components/home/FeaturesGrid';
import UpcomingEvents from '@/components/home/UpcomingEvents';
import CommunityHighlights from '@/components/home/CommunityHighlights';

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturesGrid />
      <UpcomingEvents />
      <CommunityHighlights />
    </>
  );
}
