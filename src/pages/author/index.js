import React from "react";
import Head from "next/head";
import Link from "next/link";

import Header from "@/components/Header";
import GoTop from "@/components/GoTop";
import Sidebar from "@/components/Sidebar";
import Bottom from "@/components/Bottom";
import AuthorList from "@/components/AuthorList";
import Pagination from "@/components/Pagination";

export default function Author() {
  const letters = [
    {
      title: "a",
      status: true,
    },
    {
      title: "b",
      status: true,
    },
    {
      title: "c",
      status: true,
    },
    {
      title: "d",
      status: true,
    },
    {
      title: "e",
      status: true,
    },
    {
      title: "f",
      status: true,
    },
    {
      title: "g",
      status: true,
    },
    {
      title: "h",
      status: true,
    },
    {
      title: "i",
      status: true,
    },
    {
      title: "j",
      status: true,
    },
    {
      title: "k",
      status: true,
    },
    {
      title: "l",
      status: true,
    },
    {
      title: "m",
      status: true,
    },
    {
      title: "n",
      status: true,
    },
    {
      title: "o",
      status: true,
    },
    {
      title: "p",
      status: true,
    },
    {
      title: "q",
      status: true,
    },
    {
      title: "r",
      status: true,
    },
    {
      title: "s",
      status: true,
    },
    {
      title: "t",
      status: true,
    },
    {
      title: "u",
      status: true,
    },
    {
      title: "v",
      status: true,
    },
    {
      title: "w",
      status: true,
    },
    {
      title: "x",
      status: true,
    },
    {
      title: "y",
      status: true,
    },
    {
      title: "z",
      status: true,
    },
  ];

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <GoTop />

      <main className="lg:pl-72 pt-[80px] h-full">
        <div className="max-w-screen-2xl mx-auto">
          <div className="px-6 pt-6 lg:hidden lg:mb-0 block">
            <form className="flex items-center relative">
              <input
                className="flex h-10 border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full lg:w-[600px] rounded-lg rounded-r-none focus-visible:ring-transparent pr-8"
                placeholder="Search for a course"
                value=""
              />
              <button
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-sky-700 text-white hover:bg-sky-700/80 h-10 px-4 py-2 rounded-l-none"
                type="submit"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-search h-4 w-4"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </svg>
              </button>
            </form>
          </div>
          <div className="p-6 space-y-4">
            <div>
              <span className="font-semibold text-black">
                Find a Author by its first letter:
              </span>
              <div className="flex flex-wrap justify-left mx-auto w-full md:w-12/12  items-center">
                {letters.map((data, index) => (
                  <Link
                    href={""}
                    key={index}
                    className="flex mr-2 mt-2 justify-center items-center mb-1.5 w-8 h-8 hover:bg-blue-800 px-2 py-1 border-2 text-gray-900 hover:text-white border-gray-900"
                  >
                    <span className="uppercase font-bold">{data.title}</span>
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <AuthorList />
            </div>
            <Pagination />
          </div>
        </div>
      </main>

      <Sidebar />

      <Bottom />
    </>
  );
}
