import NextLink from 'next/link'
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button
} from '@chakra-ui/react'

const NotFound = () => {
  return (
    <Container>
      <Heading as="h1">404</Heading>
      <Text>Esta no es la página web que buscas.</Text>
      <Divider my={6} />
      <Box my={6} align="center">
        <NextLink href="/">
          <Button colorScheme="teal">Volver al inicio</Button>
        </NextLink>
      </Box>
    </Container>
  )
}

export default NotFound
