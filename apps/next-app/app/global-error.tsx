'use client';

import { PageErrorBlock } from '@libs/@shared/ui/PageErrorBlock/PageErrorBlock';

export default function GlobalError({
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <PageErrorBlock reload={() => reset()} />
      </body>
    </html>
  );
}
