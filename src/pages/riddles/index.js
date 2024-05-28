import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

import Header from "@/components/Header";
import GoTop from "@/components/GoTop";
import Footer from "@/components/Footer";
import SubscribeForm from "@/components/SubscribeForm";

export default function Riddles() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <GoTop />

      <main className="pt-[50px] bg-white md:pt-[80px] h-screen2">
        <div className="py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-2xl sm:text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Fun Riddles
              </h2>
              <p className="mt-6 md:text-lg leading-tight md:leading-8 text-gray-600">
                Riddles are word games. They are questions with surprising but
                logical answers which test our ability to think carefully.
                Riddles often make us laugh when we hear their solutions. They
                try to trick us, but they also entertain and delight us. Because
                of this, riddles can be fun tools to warm up our brains before
                we start a mentally demanding task.
              </p>
            </div>

            <div className="flex mx-auto w-10/12">
              <Link href={'/riddles/one'} class="inline-flex items-center capitalize justify-center text-lg md:text-2xl font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-sky-700 text-white hover:bg-sky-700/80  py-4 rounded-md px-3 mt-10 w-full">
                Take test now
              </Link>
            </div>
          </div>
        </div>
        <SubscribeForm />
      </main>

      <Footer />
    </>
  );
}
