import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { useDisclosure } from "@chakra-ui/react"
import JoinOurBeta from "./components/join-beta"


export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <JoinOurBeta />
        <VStack spacing={8}>
        
        </VStack>
      </Grid>
    </Box>
  </ChakraProvider>
)
