import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <>
      <div class="mt-6 sm:max-w-xl">
        <h1 class="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-slate-200 sm:text-5xl">
          Load testing and stress tests for websites, APIs and servers.
        </h1>
        <p class="mt-6 text-xl text-gray-500 dark:text-slate-300">
          LoadForge uses your cloud account to rapidly scale large numbers of
          simulated users to load test your website, store, API, or application
          for cheap - just cents per test!
        </p>
      </div>
    </>
  );
}
