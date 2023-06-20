import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function Notice() {
  const [show, setShow] = useState(true);

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <>
      {show ? (
        <div className="flex items-start text-orange-500 max-w-2xl px-6 py-4 bg-orange-400 bg-opacity-10 text-sm sm:text-base rounded-lg sm:rounded-xl">
          <span>
            ⓘ Now&amp;Me is not a crisis or suicide helpline. If you or anyone
            you know requires immediate help, please reach out to the nearest
            emergency services.
            <br /> You can find professional help in your country{" "}
            <a
              className="border-b border-x-orange-500 hover:font-medium"
              href="https://www.iasp.info/crisis-centres-helplines"
              target="_blank"
              rel="noreferrer"
            >
              here.
            </a>
          </span>
          <button className="cursor-pointer" onClick={handleClick}>
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      ) : (
        <>
         
        </>
      )}
    </>
  );
}
