import Head from "next/head";
import { Hero, Layout } from "../components";
import {
  Criteria,
  Jurist,
  RatingFocus,
  RatingMeth,
} from "../components/judging";

const Judging = () => {
  return (
    <>
      <Head>
        <title>BPMI | Judging</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <main className={`text-darkText`}>
          <Hero img={"judgeHero"}>
            <div
              className="
        pt-20
      min-h-[490px] lg:h-[520px]
      text-white  flex  items-center justify-end  z-20 px-4"
            >
              <h1 className="lg:text-5xl text-3xl mb-2 leading-[40px] sm:leading-[60px] text-center sm:text-start">
                Judging
              </h1>
            </div>
          </Hero>

          <RatingMeth />
          <RatingFocus />
          <Criteria />
          <Jurist />
        </main>
      </Layout>
    </>
  );
};

export default Judging;
