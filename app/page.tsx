'use client'
import Header from "@/components/header/Header";
import TopContainer from "@/components/container/TopContainer";
import { Box, Highlight } from "@chakra-ui/react";
import Feature from "@/components/feature/Feature";
import CTA from "@/components/cta/CTA";
import Highlights from "@/components/highlights/Highlights";
import Newsletter from "@/components/newsletter/Newsletter";
import Faq from "@/components/faq/Faq";
import Footer from "@/components/footer/Footer";


export default function Home() {
  return (
    <>

      <Header />
      <Box as="main">

        <TopContainer />
        <Feature />
        <CTA />
        <Highlights />
        <Newsletter />
        <Faq />
        <Footer />

      </Box>
    </>
  )
}