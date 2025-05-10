// @next
import dynamic from 'next/dynamic';

// @project
const ScrollFab = dynamic(() => import('@/components/ScrollFab'));
const Main = dynamic(() => import('@/views/landings/default'));
const ThemeAI = dynamic(() => import('@/views/landings/ai/theme'));

/***************************  PAGE - ROOT  ***************************/

export default function HomePage() {
  return (
    <ThemeAI>
      <>
        <Main />

        {/* scroll to top section */}
        <ScrollFab />
      </>
    </ThemeAI>
  );
}
