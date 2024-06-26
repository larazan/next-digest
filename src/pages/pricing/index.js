import React from "react";
import Head from "next/head";
import Link from "next/link";

import Header from "@/components/Header";

import GoTop from "@/components/GoTop";
import Sidebar from "@/components/Sidebar";
import Bottom from "@/components/Bottom";

export default function Pricing() {
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
        <div className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-2xl sm:text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Simple, one-time payment
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                On top of 131+ hours of free video content and 15+ free
                real-world projects, for those who want to take their coding
                skills to the next level, there is more.
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 xl:mx-0 xl:flex xl:max-w-none">
              <div className="p-8 sm:p-10 xl:flex-auto">
                <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                  Lifetime plan
                </h3>
                <p className="mt-6 text-base leading-7 text-gray-600">
                  Get access to all current and future content, including all
                  courses, additional content, code challenges, and more.
                </p>
                <div className="mt-10 flex items-center gap-x-4">
                  <h4 className="flex-none text-sm font-semibold leading-6 text-sky-700">
                    What&lsquo;s included 👍
                  </h4>
                  <div className="h-px flex-auto bg-gray-100"></div>
                </div>
                <ul
                  role="list"
                  className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
                >
                  <li className="flex gap-x-3">
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
                      className="lucide lucide-check-circle h-6 w-5 flex-none text-sky-700"
                      aria-hidden="true"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <path d="m9 11 3 3L22 4"></path>
                    </svg>
                    All courses
                  </li>
                  <li className="flex gap-x-3">
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
                      className="lucide lucide-check-circle h-6 w-5 flex-none text-sky-700"
                      aria-hidden="true"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <path d="m9 11 3 3L22 4"></path>
                    </svg>
                    All additional content
                  </li>
                  <li className="flex gap-x-3">
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
                      className="lucide lucide-check-circle h-6 w-5 flex-none text-sky-700"
                      aria-hidden="true"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <path d="m9 11 3 3L22 4"></path>
                    </svg>
                    Code challenges
                  </li>
                  <li className="flex gap-x-3">
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
                      className="lucide lucide-check-circle h-6 w-5 flex-none text-sky-700"
                      aria-hidden="true"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <path d="m9 11 3 3L22 4"></path>
                    </svg>
                    Private community
                  </li>
                  <li className="flex gap-x-3">
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
                      className="lucide lucide-check-circle h-6 w-5 flex-none text-sky-700"
                      aria-hidden="true"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <path d="m9 11 3 3L22 4"></path>
                    </svg>
                    Group call events
                  </li>
                  <li className="flex gap-x-3">
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
                      className="lucide lucide-check-circle h-6 w-5 flex-none text-sky-700"
                      aria-hidden="true"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <path d="m9 11 3 3L22 4"></path>
                    </svg>
                    Priority support
                  </li>
                  <li className="flex gap-x-3">
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
                      className="lucide lucide-check-circle h-6 w-5 flex-none text-sky-700"
                      aria-hidden="true"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <path d="m9 11 3 3L22 4"></path>
                    </svg>
                    Lifetime access
                  </li>
                  <li className="flex gap-x-3">
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
                      className="lucide lucide-check-circle h-6 w-5 flex-none text-sky-700"
                      aria-hidden="true"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <path d="m9 11 3 3L22 4"></path>
                    </svg>
                    Early access to content
                  </li>
                </ul>
                <div className="mt-10 flex items-center gap-x-4">
                  <h4 className="flex-none text-sm font-semibold leading-6 text-rose-700">
                    What&lsquo;s not included 👎
                  </h4>
                  <div className="h-px flex-auto bg-gray-100"></div>
                </div>
                <ul
                  role="list"
                  className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
                >
                  <li className="flex gap-x-3">
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
                      className="lucide lucide-xcircle h-6 w-5 flex-none text-rose-700"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m15 9-6 6"></path>
                      <path d="m9 9 6 6"></path>
                    </svg>
                    Private coaching
                  </li>
                  <li className="flex gap-x-3">
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
                      className="lucide lucide-xcircle h-6 w-5 flex-none text-rose-700"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m15 9-6 6"></path>
                      <path d="m9 9 6 6"></path>
                    </svg>
                    Consulting services
                  </li>
                  <li className="flex gap-x-3">
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
                      className="lucide lucide-xcircle h-6 w-5 flex-none text-rose-700"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m15 9-6 6"></path>
                      <path d="m9 9 6 6"></path>
                    </svg>
                    Development services
                  </li>
                  <li className="flex gap-x-3">
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
                      className="lucide lucide-xcircle h-6 w-5 flex-none text-rose-700"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m15 9-6 6"></path>
                      <path d="m9 9 6 6"></path>
                    </svg>
                    Antonio on-demand
                  </li>
                </ul>
              </div>
              <div className="-mt-2 p-2 xl:mt-0 xl:w-full xl:max-w-md xl:flex-shrink-0">
                <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 xl:flex xl:flex-col xl:justify-center xl:py-16 xl:h-full">
                  <div className="relative mx-auto max-w-xs px-8">
                    <p className="text-base font-semibold text-gray-600">
                      Early access - 50% off
                    </p>
                    <div className="mt-6">
                      <p className="flex items-baseline justify-center gap-x-2">
                        <span className="text-5xl font-bold tracking-tight text-gray-900">
                          $499
                        </span>
                        <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                          USD
                        </span>
                      </p>
                      <p className="mt-2 flex items-baseline justify-center gap-x-2 opacity-75">
                        <span className="text-2xl font-bold tracking-tight text-gray-900 line-through">
                          $999
                        </span>
                        <span className="text-xs font-semibold leading-6 tracking-wide text-gray-600">
                          USD
                        </span>
                      </p>
                    </div>
                    <button className="inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-sky-700 text-white hover:bg-sky-700/80 h-9 rounded-md px-3 mt-10 w-full">
                      Pre-order now
                    </button>
                    <p className="mt-6 text-xs leading-5 text-gray-600">
                      One time payment. No recurring fees.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-auto max-w-7xl divide-y divide-gray-900/10 mt-16">
              <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
                Frequently asked questions
              </h2>
              <dl className="mt-10 space-y-8 divide-y divide-gray-900/10">
                <div className="pt-8 xl:grid xl:grid-cols-12 xl:gap-8">
                  <dt className="text-base font-semibold leading-7 text-gray-900 xl:col-span-5">
                    What courses &amp; additional content are included?
                  </dt>
                  <dd className="mt-4 xl:col-span-7 xl:mt-0">
                    <p className="text-base leading-7 text-gray-600">
                      Currently available courses and additional content are
                      listed on the home page. More content will be added in the
                      future. Premium members will have all future content
                      available for free, and before anyone else.
                    </p>
                  </dd>
                </div>
                <div className="pt-8 xl:grid xl:grid-cols-12 xl:gap-8">
                  <dt className="text-base font-semibold leading-7 text-gray-900 xl:col-span-5">
                    What is the private community?
                  </dt>
                  <dd className="mt-4 xl:col-span-7 xl:mt-0">
                    <p className="text-base leading-7 text-gray-600">
                      Private community is a Discord server where premium
                      members can interact with each other, ask questions, and
                      get help from other members and Antonio. It&lsquo;s a great
                      place to network and learn from others.
                    </p>
                  </dd>
                </div>
                <div className="pt-8 xl:grid xl:grid-cols-12 xl:gap-8">
                  <dt className="text-base font-semibold leading-7 text-gray-900 xl:col-span-5">
                    What are coding challenges?
                  </dt>
                  <dd className="mt-4 xl:col-span-7 xl:mt-0">
                    <p className="text-base leading-7 text-gray-600">
                      Currently only available in private community&lsquo;s discord,
                      coding challenges are small projects to help you practice
                      and improve your coding skills. Similar to LeetCode, but
                      with a focus on real-world problems.
                    </p>
                  </dd>
                </div>
                <div className="pt-8 xl:grid xl:grid-cols-12 xl:gap-8">
                  <dt className="text-base font-semibold leading-7 text-gray-900 xl:col-span-5">
                    What are group call events?
                  </dt>
                  <dd className="mt-4 xl:col-span-7 xl:mt-0">
                    <p className="text-base leading-7 text-gray-600">
                      Group call events are interactive project-building
                      workshops or live coding sessions led by Antonio or
                      community experts, they are recorded and exclusively
                      available to premium members.
                    </p>
                  </dd>
                </div>
                <div className="pt-8 xl:grid xl:grid-cols-12 xl:gap-8">
                  <dt className="text-base font-semibold leading-7 text-gray-900 xl:col-span-5">
                    Are there any discounts?
                  </dt>
                  <dd className="mt-4 xl:col-span-7 xl:mt-0">
                    <p className="text-base leading-7 text-gray-600">
                      Right now the price is 50% off for early access members.
                      This is a limited time offer. Once the early access period
                      ends, the price will go back to $999. PPP and student
                      discounts will be available in the future.
                    </p>
                  </dd>
                </div>
                <div className="pt-8 xl:grid xl:grid-cols-12 xl:gap-8">
                  <dt className="text-base font-semibold leading-7 text-gray-900 xl:col-span-5">
                    Is there a monthly subscription?
                  </dt>
                  <dd className="mt-4 xl:col-span-7 xl:mt-0">
                    <p className="text-base leading-7 text-gray-600">
                      Monthly subscription will exist, but not available at the
                      moment.
                    </p>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </main>

      <Sidebar />

      <Bottom />
    </>
  );
}
