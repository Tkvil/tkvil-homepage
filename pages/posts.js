import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import thumbCsGoServer from '../public/images/contents/csgo-server.jpg'
import thumbTeleSSH from '../public/images/contents/telegram-ssh.jpg'

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Posts
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="How to create a CS:GO Server"
            thumbnail={thumbCsGoServer}
            href="https://sites.google.com/view/wwwtkvildev/tutoriales/crear-server-csgo?authuser=0"
          />
          <GridItem
            title="Send message to Telegram on any SSH login"
            thumbnail={thumbTeleSSH}
            href="https://sites.google.com/view/wwwtkvildev/tutoriales/Telegram-notificacion-SSH-login?authuser=0"
          />
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'
