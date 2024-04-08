import { ColorSchemeScript, MantineProvider } from '@mantine/core';

import '@mantine/core/styles.css';

import { Footer } from '@next-app/@widgets/Footer';
import { Header } from '@next-app/@widgets/Header';

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider>
          <Header />
          {children}
          <Footer />
        </MantineProvider>
      </body>
    </html>
  );
}
