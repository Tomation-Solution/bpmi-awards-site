import Head from "next/head";
import { AltLayout } from "../../components";
import { BestUserExperince } from "../../components/banking-and-fin";

const BankAndFin = () => {
  return (
    <>
      <Head>
        <title>BPMI | Banking and Finance</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AltLayout>
        <main className={`text-darkText w-full py-6`}>
          <h3 className="font-semibold text-[28px] mb-10">
            Banking and Finance
          </h3>
          <h4 className="font-semibold text-[24px] mb-5">
            Best User Experience Based Process of the year Award
          </h4>
          <BestUserExperince />
        </main>
      </AltLayout>
    </>
  );
};

export default BankAndFin;