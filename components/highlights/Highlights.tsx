import { Box, Button, Center, Container, Flex, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import React from 'react'
import { IoIosSpeedometer } from "react-icons/io"
import { FaMoneyCheckAlt } from "react-icons/fa"
import { VscSettingsGear } from "react-icons/vsc"
import { BiSupport } from 'react-icons/bi'

export default function Highlights() {
    return (
        <Box py="50" as="section">
            <Box textAlign={"center"}>
                <Text color={"blue.500"} fontWeight={"bold"} fontSize={20} pb={3}>
                    Highlights
                </Text>
                <Heading fontWeight={"semibold"}>Why Chakra UI Pro?</Heading>
                <Text fontSize={20} py="4">
                    Because these beautiful and responsive React Components will
                    help you realize your next idea in no time.
                </Text>
            </Box>

            <Container maxW={1200}>
                <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap={5}>
                    <Card align='center'>
                        <CardHeader>
                            <Center color="blue.500">
                                <IoIosSpeedometer size={60} />
                            </Center>
                            <Heading textAlign="center" size='md' mt={5}>Speed up your Workflow</Heading>
                        </CardHeader>
                        <CardBody>
                            <Text textAlign="center">
                                The process of having a good business workflow is delegating tasks to specific individuals
                            </Text>
                        </CardBody>
                        <CardFooter>
                            <Button colorScheme='blue'>View here</Button>
                        </CardFooter>
                    </Card>

                    <Card align='center'>
                        <CardHeader>
                            <Center color="blue.500">
                                <FaMoneyCheckAlt size={60} />
                            </Center>
                            <Heading textAlign="center" size='md' mt={5}> Save good Money</Heading>
                        </CardHeader>
                        <CardBody>
                            <Text textAlign="center">
                                The first step to start saving money is figuring out how much you spend.
                            </Text>
                        </CardBody>
                        <CardFooter>
                            <Button colorScheme='blue'>View here</Button>
                        </CardFooter>
                    </Card>

                    <Card align='center'>
                        <CardHeader>
                            <Center color="blue.500">
                                <VscSettingsGear size={60} />
                            </Center>
                            <Heading textAlign={"center"} size='md' mt={5}> Easily Customizable</Heading>
                        </CardHeader>
                        <CardBody>
                            <Text>
                                With Codeus you get unlimited possibilities to customize the look of your website.
                            </Text>
                        </CardBody>
                        <CardFooter>
                            <Button colorScheme='blue'>View here</Button>
                        </CardFooter>
                    </Card>

                    <Card align='center'>
                        <CardHeader>
                            <Center color="blue.500">
                                <BiSupport size={60} />
                            </Center>
                            <Heading textAlign={"center"} size='md' mt={5}> Support Chakra UI</Heading>
                        </CardHeader>

                        <CardBody>
                            <Text>
                                Chakra UI makes it possible to support RTL languages and LTR languages in the same app.
                            </Text>
                        </CardBody>
                        <CardFooter>
                            <Button colorScheme='blue'>View here</Button>
                        </CardFooter>
                    </Card>
                </SimpleGrid>
            </Container>

        </Box >
    )
}
