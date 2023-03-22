import { Box, Button, Container, Flex, Heading, HStack, Input, Text, useColorMode } from '@chakra-ui/react'
import React from 'react'


export default function Newsletter() {
    const { colorMode } = useColorMode();
    return (
        <Box>
            <Container maxW={1200} bg={colorMode == "light" ? "blue.50" : "black"} p={"20"}>
                <Flex justifyContent={"space-evenly"} flexDirection={{ base: "column", md: "row" }}>
                    <Box>
                        <Heading fontWeight={"semibold"}>
                            Join our Newsletter
                        </Heading>
                        <Text>
                            Dont miss any more news and subscribe to our newsletter today.
                        </Text>
                    </Box>
                    <Box>
                        <HStack>
                            <Input placeholder='Enter your email' />
                            <Button width={150}>Subscribe</Button>
                        </HStack>
                    </Box>
                </Flex>
            </Container>
        </Box>
    )
}
