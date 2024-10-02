import { ContentContainer } from './components/ui/layout/ContentContainer';
import Featured from './components/ui/layout/Featured';
import { Hero } from './components/ui/layout/heroSection/DesktopHero';
export const dynamic = 'force-dynamic';

export default function Home() {
  return (
    <ContentContainer>
      <Hero />
      <Featured/>
    </ContentContainer>
  );
}
