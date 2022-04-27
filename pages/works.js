import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbSneakers from '../public/images/works/sneakers-works.png'
import thumbForjarp from '../public/images/works/forjarp-works.png'
import thumbCalculator from '../public/images/works/calculator-works.jpg'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

       <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="sneakers" title="Custom" thumbnail={thumbSneakers}>
          Personalización de las zapatillas Nike Air force 1
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="calculator"
            title="Calculator"
            thumbnail={thumbCalculator}
          >
            Calculator App for Android
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="forjarp"
            title="ForjaRP"
            thumbnail={thumbForjarp}
          >
            FiveM Roleplay Server
          </WorkGridItem>
        </Section> 
      </SimpleGrid>   

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Collaborations
        </Heading>
      </Section>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
