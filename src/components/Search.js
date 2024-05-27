import React, { useEffect, useState } from 'react'
import SearchModal from "./SearchModal";

export default function Search() {
    const [searchModalOpen, setSearchModalOpen] = useState(false);

  return (
    <>
        <form className="flex items-center relative">
              <div 
                className="flex w-full items-center rounded-lg bg-gray-100 h-12 border px-1 py-3"
                onClick={(e) => {
                    e.stopPropagation();
                    setSearchModalOpen(true);
                  }}
              >
                <button
                  className="static inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-transparent text-gray-400 h-10 px-2 py-2 "
                  type="submit"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="h-5 w-5"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                  </svg>
                </button>
                <input
                  className="relative flex h-12 bg-transparent px-1 py-3 text-md ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 w-full lg:w-[600px] focus-visible:ring-transparent"
                  placeholder="Search for a Quote or People"
                />
              </div>
            </form>

            <SearchModal 
                id="search-modal" 
                searchId="search" 
                modalOpen={searchModalOpen} 
                setModalOpen={setSearchModalOpen} 
            />
    </>
  )
}
