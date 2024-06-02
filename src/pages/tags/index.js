import React from 'react'
import Head from "next/head";
import Link from "next/link";

import Header from "@/components/Header";

import GoTop from "@/components/GoTop";
import Pagination from "@/components/Pagination";
import Footer from "@/components/Footer";
import SubscribeForm from "@/components/SubscribeForm";
import Search from "@/components/Search";
import Advertising from "@/components/Advertising";

export default function Tags() {

    const tags = [
        "love",
        "hate",
        "live",
        "happy",
        "work",
        "will",
        "suffer",
        "rise",
        "persistent",
        "dream",
        "great",
        "people",
        "weak",
        "dazling",
        "best",
        "commitment",
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

      <main className="pt-[60px] md:pt-[80px] min-h-screen pt-162 h-full bg-white">
        <div className="max-w-5xl mx-auto">
          <Advertising />
          <div className="px-6 lg:hidden lg:mb-0 block">
            <Search />
          </div>

          <div className="px-6 py-2 mb-5 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

              <div className="flex flex-col space-y-2">
                <div>
                  <span className="text-lg font-semibold uppercase">A</span>
                </div>
                <div className="flex flex-wrap justify-left mx-auto w-full md:w-12/12  items-center">
                  {tags.map((data, index) => (
                    <Link href="/" key={index}>
                      <div className="mr-1 mt-1 mb-1 py-1.5 px-3 text-sm bg-[#f1f5f9] border border-slate-300 rounded-md flex items-center text-slate-900 gap-x-1 hover:bg-slate-200 transition cursor-pointer">
                        <div className="truncate text-xs font-semibold capitalize">
                          {data}
                        </div>
                      </div>
                    </Link>
                  ))}
                   <Link href="/tags/A">
                      <div className="mr-1 mt-1 mb-1 py-1.5 px-3 text-sm bg-orange-400 rounded-md flex items-center text-slate-900 gap-x-1 hover:bg-orange-500 transition cursor-pointer">
                        <div className="truncate text-xs font-semibold capitalize">
                          More
                        </div>
                      </div>
                    </Link>
                </div>
              </div>

              <div className="flex flex-col space-y-2">
                <div>
                  <span className="text-lg font-semibold uppercase">B</span>
                </div>
                <div className="flex flex-wrap justify-left mx-auto w-full md:w-12/12  items-center">
                  {tags.map((data, index) => (
                    <Link href="/" key={index}>
                      <div className="mr-1 mt-1 mb-1 py-1.5 px-3 text-sm bg-[#f1f5f9] border border-slate-300 rounded-md flex items-center text-slate-900 gap-x-1 hover:bg-slate-200 transition cursor-pointer">
                        <div className="truncate text-xs font-semibold capitalize">
                          {data}
                        </div>
                      </div>
                    </Link>
                  ))}
                   <Link href="/">
                      <div className="mr-1 mt-1 mb-1 py-1.5 px-3 text-sm bg-orange-400 rounded-md flex items-center text-slate-900 gap-x-1 hover:bg-orange-500 transition cursor-pointer">
                        <div className="truncate text-xs font-semibold capitalize">
                          More
                        </div>
                      </div>
                    </Link>
                </div>
              </div>

              <div className="flex flex-col space-y-2">
                <div>
                  <span className="text-lg font-semibold uppercase">C</span>
                </div>
                <div className="flex flex-wrap justify-left mx-auto w-full md:w-12/12  items-center">
                  {tags.map((data, index) => (
                    <Link href="/" key={index}>
                      <div className="mr-1 mt-1 mb-1 py-1.5 px-3 text-sm bg-[#f1f5f9] border border-slate-300 rounded-md flex items-center text-slate-900 gap-x-1 hover:bg-slate-200 transition cursor-pointer">
                        <div className="truncate text-xs font-semibold capitalize">
                          {data}
                        </div>
                      </div>
                    </Link>
                  ))}
                   <Link href="/">
                      <div className="mr-1 mt-1 mb-1 py-1.5 px-3 text-sm bg-orange-400 rounded-md flex items-center text-slate-900 gap-x-1 hover:bg-orange-500 transition cursor-pointer">
                        <div className="truncate text-xs font-semibold capitalize">
                          More
                        </div>
                      </div>
                    </Link>
                </div>
              </div>

              <div className="flex flex-col space-y-2">
                <div>
                  <span className="text-lg font-semibold uppercase">D</span>
                </div>
                <div className="flex flex-wrap justify-left mx-auto w-full md:w-12/12  items-center">
                  {tags.map((data, index) => (
                    <Link href="/" key={index}>
                      <div className="mr-1 mt-1 mb-1 py-1.5 px-3 text-sm bg-[#f1f5f9] border border-slate-300 rounded-md flex items-center text-slate-900 gap-x-1 hover:bg-slate-200 transition cursor-pointer">
                        <div className="truncate text-xs font-semibold capitalize">
                          {data}
                        </div>
                      </div>
                    </Link>
                  ))}
                   <Link href="/">
                      <div className="mr-1 mt-1 mb-1 py-1.5 px-3 text-sm bg-orange-400 rounded-md flex items-center text-slate-900 gap-x-1 hover:bg-orange-500 transition cursor-pointer">
                        <div className="truncate text-xs font-semibold capitalize">
                          More
                        </div>
                      </div>
                    </Link>
                </div>
              </div>

              <div className="flex flex-col space-y-2">
                <div>
                  <span className="text-lg font-semibold uppercase">E</span>
                </div>
                <div className="flex flex-wrap justify-left mx-auto w-full md:w-12/12  items-center">
                  {tags.map((data, index) => (
                    <Link href="/" key={index}>
                      <div className="mr-1 mt-1 mb-1 py-1.5 px-3 text-sm bg-[#f1f5f9] border border-slate-300 rounded-md flex items-center text-slate-900 gap-x-1 hover:bg-slate-200 transition cursor-pointer">
                        <div className="truncate text-xs font-semibold capitalize">
                          {data}
                        </div>
                      </div>
                    </Link>
                  ))}
                   <Link href="/">
                      <div className="mr-1 mt-1 mb-1 py-1.5 px-3 text-sm bg-orange-400 rounded-md flex items-center text-slate-900 gap-x-1 hover:bg-orange-500 transition cursor-pointer">
                        <div className="truncate text-xs font-semibold capitalize">
                          More
                        </div>
                      </div>
                    </Link>
                </div>
              </div>

              <div className="flex flex-col space-y-2">
                <div>
                  <span className="text-lg font-semibold uppercase">F</span>
                </div>
                <div className="flex flex-wrap justify-left mx-auto w-full md:w-12/12  items-center">
                  {tags.map((data, index) => (
                    <Link href="/" key={index}>
                      <div className="mr-1 mt-1 mb-1 py-1.5 px-3 text-sm bg-[#f1f5f9] border border-slate-300 rounded-md flex items-center text-slate-900 gap-x-1 hover:bg-slate-200 transition cursor-pointer">
                        <div className="truncate text-xs font-semibold capitalize">
                          {data}
                        </div>
                      </div>
                    </Link>
                  ))}
                   <Link href="/">
                      <div className="mr-1 mt-1 mb-1 py-1.5 px-3 text-sm bg-orange-400 rounded-md flex items-center text-slate-900 gap-x-1 hover:bg-orange-500 transition cursor-pointer">
                        <div className="truncate text-xs font-semibold capitalize">
                          More
                        </div>
                      </div>
                    </Link>
                </div>
              </div>

              <div className="flex flex-col space-y-2">
                <div>
                  <span className="text-lg font-semibold uppercase">G</span>
                </div>
                <div className="flex flex-wrap justify-left mx-auto w-full md:w-12/12  items-center">
                  {tags.map((data, index) => (
                    <Link href="/" key={index}>
                      <div className="mr-1 mt-1 mb-1 py-1.5 px-3 text-sm bg-[#f1f5f9] border border-slate-300 rounded-md flex items-center text-slate-900 gap-x-1 hover:bg-slate-200 transition cursor-pointer">
                        <div className="truncate text-xs font-semibold capitalize">
                          {data}
                        </div>
                      </div>
                    </Link>
                  ))}
                   <Link href="/">
                      <div className="mr-1 mt-1 mb-1 py-1.5 px-3 text-sm bg-orange-400 rounded-md flex items-center text-slate-900 gap-x-1 hover:bg-orange-500 transition cursor-pointer">
                        <div className="truncate text-xs font-semibold capitalize">
                          More
                        </div>
                      </div>
                    </Link>
                </div>
              </div>

              <div className="flex flex-col space-y-2">
                <div>
                  <span className="text-lg font-semibold uppercase">H</span>
                </div>
                <div className="flex flex-wrap justify-left mx-auto w-full md:w-12/12  items-center">
                  {tags.map((data, index) => (
                    <Link href="/" key={index}>
                      <div className="mr-1 mt-1 mb-1 py-1.5 px-3 text-sm bg-[#f1f5f9] border border-slate-300 rounded-md flex items-center text-slate-900 gap-x-1 hover:bg-slate-200 transition cursor-pointer">
                        <div className="truncate text-xs font-semibold capitalize">
                          {data}
                        </div>
                      </div>
                    </Link>
                  ))}
                   <Link href="/">
                      <div className="mr-1 mt-1 mb-1 py-1.5 px-3 text-sm bg-orange-400 rounded-md flex items-center text-slate-900 gap-x-1 hover:bg-orange-500 transition cursor-pointer">
                        <div className="truncate text-xs font-semibold capitalize">
                          More
                        </div>
                      </div>
                    </Link>
                </div>
              </div>

              <div className="flex flex-col space-y-2">
                <div>
                  <span className="text-lg font-semibold uppercase">I</span>
                </div>
                <div className="flex flex-wrap justify-left mx-auto w-full md:w-12/12  items-center">
                  {tags.map((data, index) => (
                    <Link href="/" key={index}>
                      <div className="mr-1 mt-1 mb-1 py-1.5 px-3 text-sm bg-[#f1f5f9] border border-slate-300 rounded-md flex items-center text-slate-900 gap-x-1 hover:bg-slate-200 transition cursor-pointer">
                        <div className="truncate text-xs font-semibold capitalize">
                          {data}
                        </div>
                      </div>
                    </Link>
                  ))}
                   <Link href="/">
                      <div className="mr-1 mt-1 mb-1 py-1.5 px-3 text-sm bg-orange-400 rounded-md flex items-center text-slate-900 gap-x-1 hover:bg-orange-500 transition cursor-pointer">
                        <div className="truncate text-xs font-semibold capitalize">
                          More
                        </div>
                      </div>
                    </Link>
                </div>
              </div>

              <div className="flex flex-col space-y-2">
                <div>
                  <span className="text-lg font-semibold uppercase">J</span>
                </div>
                <div className="flex flex-wrap justify-left mx-auto w-full md:w-12/12  items-center">
                  {tags.map((data, index) => (
                    <Link href="/" key={index}>
                      <div className="mr-1 mt-1 mb-1 py-1.5 px-3 text-sm bg-[#f1f5f9] border border-slate-300 rounded-md flex items-center text-slate-900 gap-x-1 hover:bg-slate-200 transition cursor-pointer">
                        <div className="truncate text-xs font-semibold capitalize">
                          {data}
                        </div>
                      </div>
                    </Link>
                  ))}
                   <Link href="/">
                      <div className="mr-1 mt-1 mb-1 py-1.5 px-3 text-sm bg-orange-400 rounded-md flex items-center text-slate-900 gap-x-1 hover:bg-orange-500 transition cursor-pointer">
                        <div className="truncate text-xs font-semibold capitalize">
                          More
                        </div>
                      </div>
                    </Link>
                </div>
              </div>

              <div className="flex flex-col space-y-2">
                <div>
                  <span className="text-lg font-semibold uppercase">K</span>
                </div>
                <div className="flex flex-wrap justify-left mx-auto w-full md:w-12/12  items-center">
                  {tags.map((data, index) => (
                    <Link href="/" key={index}>
                      <div className="mr-1 mt-1 mb-1 py-1.5 px-3 text-sm bg-[#f1f5f9] border border-slate-300 rounded-md flex items-center text-slate-900 gap-x-1 hover:bg-slate-200 transition cursor-pointer">
                        <div className="truncate text-xs font-semibold capitalize">
                          {data}
                        </div>
                      </div>
                    </Link>
                  ))}
                   <Link href="/">
                      <div className="mr-1 mt-1 mb-1 py-1.5 px-3 text-sm bg-orange-400 rounded-md flex items-center text-slate-900 gap-x-1 hover:bg-orange-500 transition cursor-pointer">
                        <div className="truncate text-xs font-semibold capitalize">
                          More
                        </div>
                      </div>
                    </Link>
                </div>
              </div>

              <div className="flex flex-col space-y-2">
                <div>
                  <span className="text-lg font-semibold uppercase">L</span>
                </div>
                <div className="flex flex-wrap justify-left mx-auto w-full md:w-12/12  items-center">
                  {tags.map((data, index) => (
                    <Link href="/" key={index}>
                      <div className="mr-1 mt-1 mb-1 py-1.5 px-3 text-sm bg-[#f1f5f9] border border-slate-300 rounded-md flex items-center text-slate-900 gap-x-1 hover:bg-slate-200 transition cursor-pointer">
                        <div className="truncate text-xs font-semibold capitalize">
                          {data}
                        </div>
                      </div>
                    </Link>
                  ))}
                   <Link href="/">
                      <div className="mr-1 mt-1 mb-1 py-1.5 px-3 text-sm bg-orange-400 rounded-md flex items-center text-slate-900 gap-x-1 hover:bg-orange-500 transition cursor-pointer">
                        <div className="truncate text-xs font-semibold capitalize">
                          More
                        </div>
                      </div>
                    </Link>
                </div>
              </div>

            </div>
          </div>
        </div>
        <SubscribeForm />
      </main>

      <Footer />
    </>
  );
}
