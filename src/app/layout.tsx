import type { Metadata } from 'next';
import './globals.css';
import { SidebarProvider, SidebarTrigger } from '../shared/ui/shadcn/sidebar/sidebar';
import { AppSidebar } from '../shared/ui/sidebar';

export const metadata: Metadata = {
  title: 'Parvi',
  description: 'The greatness of small beginnings',
  icons: {
    icon: '/images/Favicon.svg',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-br">
      <body className={'antialiased'}>
        <SidebarProvider>
          <AppSidebar />
          <main>
            <SidebarTrigger />
            {children}
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}
