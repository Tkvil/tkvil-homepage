import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import TresdLoader from '../tres-d-loader'

const LazyTresd = dynamic(() => import('../tres-d'), {
  ssr: false,
  loading: () => <TresdLoader />
})

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Tkvil" />
        <meta name="author" content="Tkvil" />
        <meta name="author" content="tkvil" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/tkvil.ico" type="image/x-icon" />
        <meta name="twitter:title" content="Tkvil" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@tkv1l_" />
        <meta name="twitter:creator" content="@tkv1l_" />
        <meta name="twitter:image" content="https://www.tkvil.dev/card.png" />
        <meta property="og:site_name" content="Tkvil" />
        <meta name="og:title" content="Tkvil" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.tkvil.dev/card.png" />
        <title>Tkvil - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <LazyTresd />

        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
