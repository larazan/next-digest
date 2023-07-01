import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

import Notice from "@/components/Notice";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SubscribeForm from "@/components/SubscribeForm";
import QuoteRandom from "@/components/QuoteRandom";
import Pagination from "@/components/Pagination";

import meme11 from "@/img/meme11.jpg";
import meme12 from "@/img/meme12.jpg";
import meme13 from "@/img/meme13.jpg";

import funny1 from "@/img/funny1.jpg";

export default function Blog() {

  return (
    <>
      <div className="">
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header />
        <div className="flex bg-white min-h-screen pt-14 md:pt-[100px]">
          <div className="flex flex-row w-full">
            <div className="flex flex-1 flex-col items-center justify-center relative">
              <div className="flex flex-1 flex-col pb-18 max-w-md md:max-w-2xl ">
                <section className="w-full mx-auto  mt-10 md:mt-10 px-5 ">
                  <h1 className="text-3xl font-bold tracking-tighter md:text-5xl lg:text-7xl">
                    1,000<span className="text-xl">s</span> more clicks <br /> with
                    Automated Link Previews!
                  </h1>
                  <p className="max-w-3xl mt-6 text-lg font-medium md:text-xl lg:text-2xl">
                    Say goodbye to Canva! Create a template, integrate it into
                    your site once, and focus on creating great content.
                  </p>

                  <div>
                    <div className="pt-6">
                      <Image src={funny1} alt="" />
                    </div>
                    <div className="flex w-full space-x-4">
                      <div>
                      <Link
                      className="text-tundora no-underline"
                      href="/"
                    >
                      <div className="my-[1em] mx-[0em] flex items-center w-full bg-white leading-[1.25em]">
                        <figure className="m-0 mr-2 md:mr-5 flex aspect-[10/9] h-fit flex-1 items-center justify-center">
                          <Image
                            alt=""
                            src={meme13}
                            
                            className="h-full w-full rounded object-fill"
                            style={{ color: "transparent" }}
                          />
                        </figure>
                        <div className="flex w-2/3 md:max-w-[45%] flex-1 flex-col space-y-1 md:space-y-2">
                          <span
                            className="my-[0.25em] mx-[0em] overflow-hidden break-words text-md md:text-lg leading-tight md:leading-tight font-semibold"
                          >
                            80 Funny Work Memes to Keep You Laughing Through the
                            Week
                          </span>
                          <span className="text-sm md:text-lg leading-tight md:leading-tight tracking-tight break-words text-justify">
                            Whether you&apos;re waiting for the weekend or
                            commiserating about your job, these funny work memes
                            will help you cope
                          </span>
                        </div>
                      </div>
                      <div className="h-px bg-mercury"></div>
                    </Link>

                    <Link
                      className="text-tundora no-underline"
                      href="/"
                    >
                      <div className="my-[1em] mx-[0em] flex items-center w-full bg-white leading-[1.25em]">
                        <figure className="m-0 mr-2 md:mr-5 flex aspect-[10/9] h-fit flex-1 items-center justify-center">
                          <Image
                            alt=""
                            src={meme12}
                            
                            className="h-full w-full rounded object-fill"
                            style={{ color: "transparent" }}
                          />
                        </figure>
                        <div className="flex w-2/3 md:max-w-[45%] flex-1 flex-col space-y-1 md:space-y-2">
                          <span
                            className="my-[0.25em] mx-[0em] overflow-hidden break-words text-md md:text-lg leading-tight md:leading-tight font-semibold"
                          >
                            80 Funny Work Memes to Keep You Laughing Through the
                            Week
                          </span>
                          <span className="text-sm md:text-lg leading-tight md:leading-tight tracking-tight break-words text-justify">
                            Whether you&apos;re waiting for the weekend or
                            commiserating about your job, these funny work memes
                            will help you cope
                          </span>
                        </div>
                      </div>
                      <div className="h-px bg-mercury"></div>
                    </Link>

                    <Link
                      className="text-tundora no-underline"
                      href="/"
                    >
                      <div className="my-[1em] mx-[0em] flex items-center w-full bg-white leading-[1.25em]">
                        <figure className="m-0 mr-2 md:mr-5 flex aspect-[10/9] h-fit flex-1 items-center justify-center">
                          <Image
                            alt=""
                            src={meme11}
                            
                            className="h-full w-full rounded object-fill"
                            style={{ color: "transparent" }}
                          />
                        </figure>
                        <div className="flex w-2/3 md:max-w-[45%] flex-1 flex-col space-y-1 md:space-y-2">
                          <span
                            className="my-[0.25em] mx-[0em] overflow-hidden break-words text-md md:text-lg leading-tight md:leading-tight font-semibold"
                          >
                            80 Funny Work Memes to Keep You Laughing Through the
                            Week
                          </span>
                          <span className="text-sm md:text-lg leading-tight md:leading-tight tracking-tight break-words text-justify">
                            Whether you&apos;re waiting for the weekend or
                            commiserating about your job, these funny work memes
                            will help you cope
                          </span>
                        </div>
                      </div>
                      <div className="h-px bg-mercury"></div>
                    </Link>
                      </div>
                    </div>
                  </div>
                  <Pagination />
                </section>

                <QuoteRandom />
              </div>
              <SubscribeForm />
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
