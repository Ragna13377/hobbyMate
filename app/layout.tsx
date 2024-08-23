import type { Metadata } from "next";
import { PageProps } from '@shared/types';
import { capitalize} from '@shared/utils';
import '@app/styles/global.scss'

//TODO разобраться почему не качаются гугл шрифты
export function generateMetadata({params: {slug}}: PageProps): Metadata {
  return {
    title: `HobbyMate${slug ? ' | ' + capitalize(slug) : ''}`,
    description: 'App for meeting new friends',
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
