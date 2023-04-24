import AboutUs from '@/components/AboutUs/AboutUs'
import Advantages from '@/components/Avantages/Advantages'
import Discount from '@/components/Discount/Discount'
import Hero from '@/components/Hero/Hero'
import SliderBlock from '@/components/SliderBlock/SliderBlock'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <script src="https://kit.fontawesome.com/1f5bacc93d.js" crossorigin="anonymous"></script>
      </Head>
      <Hero />
      <AboutUs />
      <Advantages />
      <SliderBlock />
      <Discount />
    </>
  )
}
