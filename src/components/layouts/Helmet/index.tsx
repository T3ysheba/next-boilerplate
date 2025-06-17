import Head from 'next/head'

import type { IHelmetProps } from './types'

const Helmet = ({
  title = 'Default Title',
  description = 'Default description',
  keywords = 'default, keywords',
  noIndex = false,
}: IHelmetProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />
      {noIndex && <meta name='robots' content='noindex, nofollow' />}
    </Head>
  )
}

export default Helmet
