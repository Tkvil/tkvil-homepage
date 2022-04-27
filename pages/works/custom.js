import {
    Container,
    // Badge,
    Link,
    List,
    ListItem,
    SimpleGrid,
    // UnorderedList,
    Heading,
    Center
  } from '@chakra-ui/react'
  import Layout from '../../components/layouts/article'
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  import { Title, WorkImage, Meta } from '../../components/work'
  import P from '../../components/paragraph'
  
  const Work = () => (
    <Layout title="Custom">
      <Container>
        <Title>
          Custom
        </Title>
        <P>
        Con la Calculadora puedes hacer operaciones matemáticas sencillas 
        y avanzadas en una aplicación con un diseño atractivo.
        </P>
        <P>
        ⠀⠀
        </P>
        <P>
        • Haz operaciones básicas como sumas, restas, multiplicaciones y divisiones.
        </P>
        <P>
        • Haz operaciones científicas como cálculos trigonométricos o logarítmicos y funciones.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Android</span>
          </ListItem>
          <ListItem>
            <Meta>GitHub</Meta>
            <Link href="https://github.com/Tkvil/calculator">
              Enlace de GitHub para ver el codigo.
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>HTML, CSS, JS</span>
          </ListItem>
        </List>
  
        <Heading as="h4" fontSize={16} my={6}>
          <Center>Media coverage</Center>
        </Heading>
  
        <SimpleGrid columns={2} gap={2}>
          <WorkImage src="/images/works/walknote_01.png" alt="walknote" />
          <WorkImage src="/images/works/walknote_02.png" alt="walknote" />
        </SimpleGrid>
        <WorkImage src="/images/works/walknote_03.png" alt="walknote" />
        <WorkImage src="/images/works/walknote_04.png" alt="walknote" />
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'