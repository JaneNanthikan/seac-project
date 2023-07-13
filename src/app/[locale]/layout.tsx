import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import NavBar from '@/components/NavBar';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MY CinePlex',
  description: 'SEAC Project Test',
}

export function generateStaticParams() {
  return [{ locale: 'th' }, { locale: 'en' }];
}

export default async function RootLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode,
  params: any,
}) {
  let messages;

  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <NavBar />
          <div className="container mx-auto min-h-screen bg-white/10 px-6 py-4">
                {children}
            </div>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
