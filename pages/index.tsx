import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Button, Hero, Layout } from "../components";
import {
  About,
  CountDown,
  OurApproach,
  OurWinners,
  PreAward,
  WhyEnter,
  WinnersJourney,
} from "../components/home";

const Home = () => {
  return (
    <>
      <Head>
        <title>BPMI</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <main className={`text-darkText`}>
          <Hero img={"heroBg"}>
            <div
              className="
        pt-20
      min-h-[490px] lg:h-[520px]
      text-white  flex flex-col items-center justify-end  z-20 px-4"
            >
              <div className="flex flex-col-reverse  sm:flex-row items-center  mb-2">
                <Image
                  alt=""
                  src={`/logo.jpg`}
                  className="w-[150px]  mr-1"
                  width={150}
                  height={150}
                />
                <h1 className="lg:text-5xl text-3xl mb-2 leading-[40px] sm:leading-[60px] text-center sm:text-start">
                  Business Process Management <br /> Excellence Awards
                </h1>
              </div>
              <h3 className="lg:text-4xl text-2xl leading-[30px] sm:leading-[40px] text-center p-2 mb-4">
                Recognizing and Celebrating Innovative <br /> Business Process
              </h3>
              <Link href="nominee" passHref={true}>
                <Button
                  text={"Enter for Nomination Now"}
                  styles={"bg-[#3E4095] sm:mb-12  mb-6 text-md px-2"}
                />{" "}
              </Link>
            </div>
          </Hero>
          <CountDown />
          <About />
          <WinnersJourney />
          <OurApproach />
          <WhyEnter />
          <OurWinners />
          <PreAward />
        </main>
      </Layout>
    </>
  );
};

export default Home;