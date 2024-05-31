import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import Header from "@/components/Header";
import GoTop from "@/components/GoTop";
import Sidebar from "@/components/Sidebar";
import Bottom from "@/components/Bottom";
import AuthorList from "@/components/AuthorList";
import Pagination from "@/components/Pagination";
import QuoteList from "@/components/QuoteList";

import ada from "@/img/ada.jpg";
import Footer from "@/components/Footer";
import SubscribeForm from "@/components/SubscribeForm";
import Advertising from "@/components/Advertising";

export default function Detail() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <GoTop />

      <main className="pt-[60px] bg-white md:pt-[80px] h-full">
        <div className="max-w-5xl mx-auto">
          <Advertising />
          <div className="bg-[#FFE5DD] py-10 mb-4">
            <a
              href="https://nowandme.com/blog/author/annanyachaturvedi"
              className="flex items-center justify-center sm:hidden"
            >
              <div>
                <div className="border-white rounded-full border-3 w-10 h-10 roundedShadow">
                  <span
                    style={{
                      boxSizing: "border-box",
                      display: "inline-block",
                      overflow: "hidden",
                      width: "initial",
                      height: "initial",
                      background: "none",
                      opacity: 1,
                      border: "0px",
                      margin: "0px",
                      padding: "0px",
                      position: "relative",
                      maxWidth: "100%",
                    }}
                  >
                    <span
                      style={{
                        boxSizing: "border-box",
                        display: "block",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: "0px",
                        margin: "0px",
                        padding: "0px",
                        maxWidth: "100%",
                      }}
                    >
                      <Image
                        alt=""
                        aria-hidden="true"
                        src={ada}
                        className="rounded-full w-full"
                      />
                    </span>
                  </span>
                </div>
              </div>
              <p className="text-sm font-semibold text-[#404040] ml-2">
                Ada Lovelace
              </p>
            </a>
            <div className="mt-4 sm:mt-6 text-center text-[#565656] flex justify-center items-center sm:divide-x relative sm:space-x-3 divide-[#CACACA]">
              <a
                href="https://nowandme.com/blog/author/annanyachaturvedi"
                className="items-center justify-center hidden font-medium sm:flex"
              >
                <div>
                  <div className="border-white rounded-full border-3 hidden text-[20px] leading-9 text-center w-11 h-11 left-11 -top-6 roundedShadow sm:block">
                    <span
                      style={{
                        boxSizing: "border-box",
                        display: "inline-block",
                        overflow: "hidden",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: "0px",
                        margin: "0px",
                        padding: "0px",
                        position: "relative",
                        maxWidth: "100%",
                      }}
                    >
                      <span
                        style={{
                          boxSizing: "border-box",
                          display: "block",
                          width: "initial",
                          height: "initial",
                          background: "none",
                          opacity: 1,
                          border: "0px",
                          margin: "0px",
                          padding: "0px",
                          maxWidth: "100%",
                        }}
                      >
                        <Image
                          alt=""
                          aria-hidden="true"
                          src={ada}
                          className="rounded-full w-full"
                        />
                      </span>
                    </span>
                  </div>
                </div>
                <p className="text-2xl font-semibold text-[#404040] sm:ml-5 hidden sm:block">
                  Ada Lovelace
                </p>
              </a>
            </div>
            <h1 className="relative mx-3 md:mx-auto leading-tight text-md md:text-lg text-black md:leading-normal max-w-3xl m-auto font-semibold text-center mt-4 sm:mt-6 mb-5 sm:mb-0">
              Augusta Ada King, Countess of Lovelace (née Byron; 10 December
              1815 – 27 November 1852) was an English mathematician and writer,
              chiefly known for her work on Charles Babbage&apos;s proposed
              mechanical general-purpose computer, the Analytical Engine. She
              was the first to recognise that the machine had applications
              beyond pure calculation, and to have published the first algorithm
              intended to be carried out by such a machine. As a result, she is
              often regarded as the first computer programmer.
            </h1>
          </div>

          <div className="p-6 space-y-4 bg-white">
            <div>
              <QuoteList />
            </div>
            <Pagination />
          </div>
        </div>
        <SubscribeForm />
      </main>

      <Footer />
    </>
  );
}
