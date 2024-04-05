'use client';

import { PageErrorBlock } from '@libs/@shared/ui/PageErrorBlock/PageErrorBlock';

export default function Error({
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return <PageErrorBlock reload={() => reset()} />;
}
