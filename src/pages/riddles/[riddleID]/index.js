import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

import Notice from "@/components/Notice";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SubscribeForm from "@/components/SubscribeForm";
import QuoteRandom from "@/components/QuoteRandom";
import Nav from "@/components/Nav";

export default function Detail() {
  const [showAnswer, setShowAnswer] = useState(false);
  const toggleAnswer = () => {
    setShowAnswer((prev) => !prev);
  };

  return (
    <>
      <div className="">
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header />
        <div className="flex flex-col bg-[#0074d9] min-h-screen pt-16 md:pt-[100px]">
          <div className="bg-[#0074d9] py-10 mb-4">
            <h1 className="relative mx-3 md:mx-auto text-3xl md:text-5xl  md:leading-[60px] max-w-3xl m-auto text-white font-semibold text-center2 mt-4 sm:mt-6 mb-5 sm:mb-0">
              A grandmother, two mothers, and two daughters went to a baseball
              game together and bought one ticket each. How many tickets did
              they buy in total?
            </h1>

            <div className="relative mx-3 md:mx-auto text-3xl md:text-5xl  md:leading-[60px] max-w-3xl m-auto text-[#fdfc3b] font-semibold text-center2 mt-4 sm:mt-6 mb-5 sm:mb-0">
              <span>Three tickets </span>
            </div>
          </div>
          <Nav 
            // next={idNext}
            // prev={idPrev}
            // riddId={riddId}
            // onClick={navClick}
            toggleAnswer={toggleAnswer} 
            // updatePosition={updatePosition}
          />
        </div>

        <Footer />
      </div>
    </>
  );
}
