import { MainPage } from '@next-app/@pages/MainPage';
import { Metadata } from 'next';

const FALLBACK_TITLE = 'Next App';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: FALLBACK_TITLE
  };
}

export default function Page() {
  return <MainPage />;
}
