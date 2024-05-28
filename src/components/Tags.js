import React, { useEffect, useState } from 'react'
import Link from 'next/link';

export default function Tags() {
    const [showMore, setShowMore] = useState(false);
    
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
      <div
        className={`flex flex-col w-full mt-2 px-6 py-1 transition  ${
          showMore ? "duration-500 ease-in-out bg-pink-50" : ""
        } `}
      >
        <div
          className={`flex items-center pt-3 mb-1 gap-x-2 gap-y-2 ${
            showMore ? "flex-wrap" : "overflow-x-auto"
          } pb-2`}
        >
          <Link href="/">
            <div className="py-1.5 px-3 text-sm rounded-md flex items-center gap-x-1 transition cursor-pointer border-sky-700 bg-blue-300 text-sky-700">
              <div className="truncate text-xs font-semibold">All</div>
            </div>
          </Link>
          {tags.map((data, index) => (
            <Link href="/" key={index}>
              <div className="py-1.5 px-3 text-sm bg-[#f1f5f9] border border-slate-300 rounded-md flex items-center text-slate-900 gap-x-1 hover:bg-slate-200 transition cursor-pointer">
                <div className="truncate text-xs font-semibold capitalize">
                  {data}
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="flex  mx-auto justify-center w-11/12">
          <button
            className="flex items-center px-2 py-1 space-x-1 text-black rounded-md tracking-tight text-[13px] font-medium"
            onClick={() => setShowMore(!showMore)}
          >
            <span>{showMore ? "Show less" : "Show more"}</span>
            {showMore ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 15.75 7.5-7.5 7.5 7.5"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
    </>
  );
}
