import { Box, Button, Flex, Heading, Hide, HStack, Image, Link, Text } from '@chakra-ui/react'
import React from 'react'
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'


export default function topcontainer() {
    return (
        <Box backgroundImage={"/images/background.png"} backgroundSize={"contain"} backgroundAttachment="fixed" py="20">
            {/* left box */}
            <HStack>
                <Box w={{ base: '100', lg: "50%" }} color={'black'} pl={{ base: "10", lg: "44" }}>
                    <Heading fontSize={70}>Build your next idea even faster</Heading>
                    <Text lineHeight={'8'} fontSize={20} fontStyle={'bold'}>
                        One Year Panaverse DAO Earn as You Learn Program.
                        Consolidating Web3.0 and Metaverse, AI, Cloud, Edge
                        and Ambient Computing Technologies.
                    </Text>
                    <Box mt="5">
                        <Button colorScheme={'blue'} mr="5">Buy Now</Button>
                        <Button colorScheme={'blue'} variant="outline">View Components</Button>
                    </Box>
                    <Flex alignItems={'center'}>
                        <AvatarGroup size='md' max={3} mt="5">
                            <Avatar name='Sir Zia Khan' src='https://pbs.twimg.com/profile_images/1478630664190795778/xuBHOC65_400x400.jpg' />
                            <Avatar name='Daniyal Nagori' src='https://pbs.twimg.com/profile_images/1183639342956367877/71Sh5fhw_400x400.jpg' />
                            <Avatar name='Khan Wali' src='https://pbs.twimg.com/profile_images/1513591131652739085/a8jLr3Gn_400x400.jpg' />
                            <Avatar name='Prosper Otemuyiwa' src='https://bit.ly/prosper-baba' />
                            <Avatar name='Christian Nwamba' src='https://bit.ly/code-beast' />
                        </AvatarGroup>
                        <Text mt="5" ml="3" color={'blue.500'}>Created By:<Link href={"https://github.com/khanwali225"}> Khan Wali Shinwari</Link></Text>
                    </Flex>
                </Box>
                {/* right box */}
                <Hide below="lg">
                    <Box w="50%" color={'white'} pl="35">
                        <Image src="/images/banner.png" />
                    </Box>
                </Hide>

            </HStack >
        </Box >
    )
}
