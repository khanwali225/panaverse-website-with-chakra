import { StarIcon } from '@chakra-ui/icons'
import { Box, Container, Heading, HStack, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import { GoRocket } from 'react-icons/go';
import { FaMoon } from 'react-icons/fa';
import { FaPaintBrush } from 'react-icons/fa'
import { BiCodeAlt } from 'react-icons/bi'
import { MdOutlineAccessible } from 'react-icons/md'


export default function Feature() {
    return (
        <Box py="50" as="section">
            {/* top headers */}
            <Box textAlign={'center'}>
                <Text color={'blue.500'} fontWeight="bold" fontSize={25}>
                    Features
                </Text>
                <Heading fontWeight={'semibold'}>
                    What you can expect?
                </Heading>
                <Text fontSize={"20"} py="3">
                    A bundle of 220+ ready-to-use, responsive and accessible components
                    with clever structure sources code files.
                </Text>
            </Box>
            <Container maxW={1200} mt="10">
                {/* 6 features start*/}
                <Box>
                    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>

                        {/* feature 1 start*/}
                        <Box>
                            <HStack>
                                <Box color={'blue.500'}>
                                    <StarIcon w={9} h={9} />
                                </Box>
                                <Box>
                                    <Heading fontSize={19}>220+ Components</Heading>
                                    <Text>All our components come with a light and dark color mode by default.</Text>
                                </Box>
                            </HStack>
                            {/* feature 1 end */}
                        </Box>

                        {/* feature 2 start*/}
                        <Box>
                            <HStack>
                                <Box color={'blue.500'}>
                                    <GoRocket size={35} />
                                </Box>
                                <Box>
                                    <Heading fontSize={19}>Themable</Heading>
                                    <Text>Your style, your brand, customize the components as you need them. It's that simple.</Text>
                                </Box>
                            </HStack>
                            {/* feature 2 end */}

                        </Box>

                        {/* feature 3 start*/}
                        <Box>
                            <HStack>
                                <Box color={'blue.500'}>
                                    <FaMoon size={35} />
                                </Box>
                                <Box>
                                    <Heading fontSize={19}>Light & Dark</Heading>
                                    <Text>All our components come with a light and dark color mode by default.</Text>
                                </Box>
                            </HStack>
                            {/* feature 3 end */}

                        </Box>

                        {/* feature 4 start*/}
                        <Box>
                            <HStack>
                                <Box color={'blue.500'}>
                                    <FaPaintBrush size={35} />
                                </Box>
                                <Box>
                                    <Heading fontSize={19}>Themable</Heading>
                                    <Text>Your style, your brand, customize the components as you need them. It's that simple.</Text>
                                </Box>
                            </HStack>
                            {/* feature 4 end */}
                        </Box>

                        {/* feature 5 start*/}
                        <Box>
                            <HStack>
                                <Box color={'blue.500'}>
                                    <BiCodeAlt size={45} />
                                </Box>
                                <Box>
                                    <Heading fontSize={19}>Developer Friendly</Heading>
                                    <Text>Components are semantically divided into several files for better developer experience</Text>
                                </Box>
                            </HStack>
                            {/* feature 5 end */}
                        </Box>

                        {/* feature 6 start*/}
                        <Box>
                            <HStack>
                                <Box color={'blue.500'}>
                                    <MdOutlineAccessible size={45} />
                                </Box>
                                <Box>
                                    <Heading fontSize={19}>Accessible</Heading>
                                    <Text>Accessibility first. That's why we pay attention to accessibility right from the start.</Text>
                                </Box>
                            </HStack>
                            {/* feature 6 end */}
                        </Box>

                    </SimpleGrid>

                    {/* 6 features end */}
                </Box>
            </Container >
        </Box >
    )
}
