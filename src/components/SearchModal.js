import React, { useRef, useEffect } from 'react';
import Link from "next/link";
import Transition from "@/utils/Transition";

function SearchModal({
  id,
  searchId,
  modalOpen,
  setModalOpen
}) {

  const modalContent = useRef(null);
  const searchInput = useRef(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!modalOpen || modalContent.current.contains(target)) return
      setModalOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!modalOpen || keyCode !== 27) return;
      setModalOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  useEffect(() => {
    modalOpen && searchInput.current.focus();
  }, [modalOpen]);

  return (
    <>
      {/* Modal backdrop */}
      <Transition
        className="fixed inset-0 bg-slate-900 bg-opacity-30 z-60 transition-opacity"
        show={modalOpen}
        enter="transition ease-out duration-200"
        enterStart="opacity-0"
        enterEnd="opacity-100"
        leave="transition ease-out duration-100"
        leaveStart="opacity-100"
        leaveEnd="opacity-0"
        aria-hidden="true"
      />
      {/* Modal dialog */}
      <Transition
        id={id}
        className="fixed inset-0 z-50 overflow-hidden flex items-start top-20 mb-4 justify-center transform px-4 sm:px-6"
        role="dialog"
        aria-modal="true"
        show={modalOpen}
        enter="transition ease-in-out duration-200"
        enterStart="opacity-0 translate-y-4"
        enterEnd="opacity-100 translate-y-0"
        leave="transition ease-in-out duration-200"
        leaveStart="opacity-100 translate-y-0"
        leaveEnd="opacity-0 translate-y-4"
      >
        <div ref={modalContent} className="bg-white overflow-auto max-w-2xl w-full max-h-full rounded-lg shadow-lg">
          {/* Search form */}
          <form className="border-b">
            <div className="relative">
              <label htmlFor={searchId} className="sr-only">Search</label>
              <input id={searchId} className="w-full border-0 focus:ring-transparent placeholder-slate-400 appearance-none py-3 pl-10 pr-4 outline-none bg-gray-100 text-[#9cb3c9]" type="search" placeholder="Search Quote or People..." ref={searchInput} />
              <button className="absolute inset-0 right-auto group" type="submit" aria-label="Search">
                <svg className="w-4 h-4 shrink-0 fill-current text-slate-400 group-hover:text-slate-500 ml-4 mr-2" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z" />
                  <path d="M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z" />
                </svg>
              </button>
            </div>
          </form>
          <div className="py-3 md:py-6 px-6">
            {/* Recent searches */}
            <div className="mb-3 last:mb-0">
              <div className="text-md font-semibold text-slate-500 capitalize px-2 mb-3">Recent searches</div>
              <ul className="w-full flex flex-col space-y-3">
                <li className="flex justify-between items-center cursor-pointer w-full hover:text-indigo-500 pb-1 border-b">
                  <span className="text-sm leading-tight md:leading-normal">
                    25 New Mom Gift Baskets That Are All About Her
                  </span>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                      />
                    </svg>
                  </div>
                </li>
                <li className="flex justify-between items-center cursor-pointer w-full hover:text-indigo-500 pb-1 border-b">
                  <span className="text-sm leading-tight md:leading-normal">
                    33 Meditation Gifts to Help Find Your Inner Zen Master
                  </span>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                      />
                    </svg>
                  </div>
                </li>
                <li className="flex justify-between items-center cursor-pointer w-full hover:text-indigo-500 pb-1 border-b">
                  <span className="text-sm leading-tight md:leading-normal">
                    25 New Mom Gift Baskets That Are All About Her
                  </span>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                      />
                    </svg>
                  </div>
                </li>
                <li className="flex justify-between items-center cursor-pointer w-full hover:text-indigo-500 pb-1 border-b">
                  <span className="text-sm leading-tight md:leading-normal">
                    33 Meditation Gifts to Help Find Your Inner Zen Master
                  </span>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                      />
                    </svg>
                  </div>
                </li>
              </ul>
            </div>
            {/* Recent pages */}
            <div className="mb-3 last:mb-0">
              <div className="text-md font-semibold text-slate-500 capitalize px-2 mb-3">Recent pages</div>
              <ul className="w-full flex flex-col space-y-3">
                <li className="flex justify-between items-center cursor-pointer w-full hover:text-indigo-500 pb-1 border-b">
                  <span className="text-sm leading-tight md:leading-normal">
                    25 New Mom Gift Baskets That Are All About Her
                  </span>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                      />
                    </svg>
                  </div>
                </li>
                <li className="flex justify-between items-center cursor-pointer w-full hover:text-indigo-500 pb-1 border-b">
                  <span className="text-sm leading-tight md:leading-normal">
                    33 Meditation Gifts to Help Find Your Inner Zen Master
                  </span>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                      />
                    </svg>
                  </div>
                </li>
                <li className="flex justify-between items-center cursor-pointer w-full hover:text-indigo-500 pb-1 border-b">
                  <span className="text-sm leading-tight md:leading-normal">
                    25 New Mom Gift Baskets That Are All About Her
                  </span>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                      />
                    </svg>
                  </div>
                </li>
                <li className="flex justify-between items-center cursor-pointer w-full hover:text-indigo-500 pb-1 border-b">
                  <span className="text-sm leading-tight md:leading-normal">
                    33 Meditation Gifts to Help Find Your Inner Zen Master
                  </span>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                      />
                    </svg>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Transition>
    </>
  );
}

export default SearchModal;