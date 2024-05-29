import React from "react";
import Link from "next/link";
import Image from "next/image";

import quote1 from "@/img/quote1.png";
import quote2 from "@/img/quote2.png";
import quote3 from "@/img/quote3.png";
import quote4 from "@/img/quote4.png";

export default function HomeSection() {
  return (
    <>
      <div className="flex py-8 md:py-20 relative">
        <div className="flex flex-col gap-y-24 md:gap-y-32 mx-auto max-w-6xl">
          <div className="">
            <div className="grid grid-cols-1 mx-auto md:grid-cols-2 gap-x-12 gap-y-6">
              <div className="image false my-auto">
                <Image
                  width="400"
                  height="400"
                  className="rounded-xl md:w-3/4 mx-auto"
                  src={quote1}
                />
              </div>
              <div className="flex flex-col gap-y-4 mx-auto my-auto">
                <h2 className="text-black font-extrabold text-3xl md:text-4xl mb-2 text-left">
                  The Future of Quote Creation
                </h2>
                <div className="flex flex-col gap-y-4">
                  <div className="flex gap-x-4 max-w-2xl">
                    
                    <div>
                      <h3 className="text-md md:text-lg text-gray-700 font-bold mb-1">
                        Embracing AI Quotes
                      </h3>
                      <p className="md:text-lg mb-4 text-gray-600">
                        Using AI into the realm of quote creation marks a
                        transformative shift. Our AI Quote Generator can
                        intuitively produce quotes that resonate with
                        contemporary themes and ideas, making it an invaluable
                        tool for modern communicators.
                      </p>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="grid grid-cols-1 mx-auto md:grid-cols-2 gap-x-12 gap-y-6">
              <div className="image md:order-2 my-auto">
                <Image
                  width="400"
                  height="400"
                  className="rounded-xl md:w-3/4 mx-auto"
                  src={quote2}
                />
              </div>
              <div className="flex flex-col gap-y-4 mx-auto my-auto">
                <h2 className="text-black font-extrabold text-3xl md:text-4xl mb-2 text-left">
                  Personalized Quotes in Seconds
                </h2>
                <div className="flex flex-col gap-y-4">
                  <div className="flex gap-x-4 max-w-2xl">
                    
                    <div>
                      <h3 className="text-md md:text-lg text-gray-700 font-bold mb-1">
                        Real Time Quote Generation
                      </h3>
                      <p className="md:text-lg mb-4 text-gray-600">
                        The speed and efficiency of our AI Quote Generator are
                        unmatched. Providing real-time, personalized quotes, it
                        caters to the fast-paced needs of today&apos;s users,
                        delivering quality content without the wait.
                      </p>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="grid grid-cols-1 mx-auto md:grid-cols-2 gap-x-12 gap-y-6">
              <div className="image false my-auto">
                <Image
                  width="400"
                  height="400"
                  className="rounded-xl md:w-3/4 mx-auto"
                  src={quote3}
                />
              </div>
              <div className="flex flex-col gap-y-4 mx-auto my-auto">
                <h2 className="text-black font-extrabold text-3xl md:text-4xl mb-2 text-left">
                  Enhancing Creativity with AI
                </h2>
                <div className="flex flex-col gap-y-4">
                  <div className="flex gap-x-4 max-w-2xl">
                    
                    <div>
                      <h3 className="text-md md:text-lg text-gray-700 font-bold mb-1">
                        Breaking Creative Boundaries
                      </h3>
                      <p className="md:text-lg mb-4 text-gray-600">
                        Our AI Quote Generator is not just a tool but a catalyst
                        for breaking creative boundaries. It encourages users to
                        explore new realms of thought and expression, pushing
                        the limits of conventional quote-making.
                      </p>
                    </div>
                  </div>
                 
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="grid grid-cols-1 mx-auto md:grid-cols-2 gap-x-12 gap-y-6">
              <div className="image md:order-2 my-auto">
                <Image
                  width="400"
                  height="400"
                  className="rounded-xl md:w-3/4 mx-auto"
                  src={quote4}
                />
              </div>
              <div className="flex flex-col gap-y-4 mx-auto my-auto">
                <h2 className="text-black font-extrabold text-3xl md:text-4xl mb-2 text-left">
                  Easy Access to Inspirational Quotes
                </h2>
                <div className="flex flex-col gap-y-4">
                  <div className="flex gap-x-4 max-w-2xl">
                    
                    <div>
                      <h3 className="text-md md:text-lg text-gray-700 font-bold mb-1">
                        A Library of Quotes at Your Disposal
                      </h3>
                      <p className="md:text-lg mb-4 text-gray-600">
                        Our AI Quote Generator functions like a vast library,
                        offering easy access to a wide range of inspirational
                        quotes. Whether you&apos;re looking for wisdom, humor,
                        or motivation, the generator provides an extensive
                        collection to choose from.
                      </p>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
