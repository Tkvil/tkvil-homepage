import {
  // Box,
  Container,
  Badge,
  Link,
  List,
  ListItem,
  // UnorderedList,
  Heading,
  Center
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="ForjaRP">
    <Container>
      <Title>
        ForjaRP <Badge>2020-2021</Badge>
      </Title>
      <P>
        Spanish roleplay server. Developed by Tkvil. The server was
        born as an alternative for GTA V Roleplayers who were looking 
        for something new and wanted a unique roleplaying experience.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Lua, HTML, JavaScript</span>
        </ListItem>
        <ListItem>
          <Meta>Networks</Meta>
          <Link href="https://twitter.com/ForjaRp">
            Twitter ForjaRP <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        {/* <ListItem>
          <Meta>Blogpost</Meta>
          <Link href="">
            {' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem> */}
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Media coverage</Center>
      </Heading>

      {/* <UnorderedList my={4}>
        <ListItem>
          <Link href="https://news.ycombinator.com/item?id=10782289">
            <Badge mr={2}>Hacker News</Badge>
            The Four Painters: A Video Work Created with Deep Learning
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>

        <ListItem>
          <Link href="https://gigazine.net/news/20151224-deep-learning-four-painters/">
            <Badge mr={2}>Gigazine</Badge>
            実写映像を人工知能「ディープラーニング」でゴッホや葛飾北斎っぽく変換した「the
            four painters」
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </UnorderedList> */}
      <WorkImage
        src="/images/works/forja 5.jpg"
        alt="walknote"
      />
      <WorkImage src="/images/works/forjarp_01.jpg" alt="walknote" />
      <WorkImage src="/images/works/forjarp_02.jpg" alt="walknote" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
