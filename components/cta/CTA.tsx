import { Box, Button, Container, Heading, HStack, Stack, Text, useColorMode } from '@chakra-ui/react'
import React from 'react'

export default function CTA() {
    const { colorMode } = useColorMode();
    return (
        <Box>
            <Container maxW={1200} bg={colorMode == "light" ? "blue.50" : "black"} p={20}>
                <Stack direction={{ base: "column", md: "row" }} >
                    <Box flex={3}>
                        <Heading>Try our free Components</Heading>
                        <Text fontSize={"20px"} pt="3">
                            You dont have to buy a pig in a poke - you can experience our free <br />
                            community components before making a purchase decision.
                        </Text>
                    </Box>
                    <Box flex={1} alignSelf="flex-start">
                        <Button colorScheme={"blue"}>
                            View Components
                        </Button>
                    </Box>
                </Stack>
            </Container>
        </Box>
    )
}
