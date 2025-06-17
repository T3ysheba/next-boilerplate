import type { Metadata } from 'next'
import { type ReactNode, Suspense } from 'react'

import { Providers } from './providers'

import '@/styles/index.global.scss'

export const metadata: Metadata = {
  title: 'title',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang='en'>
      <body>
        <Providers>
          <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        </Providers>
      </body>
    </html>
  )
}
