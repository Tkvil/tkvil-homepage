import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Sneakers">
    <Container>
      <Title>
        Custom Sneakers <Badge>2022-Actualidad</Badge>
      </Title>
      <P>
       Personalización de las zapatillas Nike Air force 1
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://www.tkvil.dev/works/custom">
          Todos los custom aqui <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Contacto</Meta>
          <Link href="mailto:contacto@tkvil.dev">
          contacto@tkvil.dev <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Instagram</Meta>
          <Link href="https://www.instagram.com/12jav1/">
          instagram.com/12jav1/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/custom_01.png" alt="sneakers" />
      <WorkImage src="/images/works/custom_02.png" alt="sneakers" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
