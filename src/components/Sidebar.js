import React from "react";

const Sidebar = () => {
  return (
    <>
      <div className="hidden lg:flex pt-[60px] h-full w-72 flex-col fixed inset-y-0 z-[48]">
        <div className="h-full flex flex-col bg-white border-r">
          <div className="flex flex-col w-full flex-1">
            <div className="flex flex-col w-full space-y-1.5 p-3 pt-10">
              <button className="flex w-full text-sm items-center py-3.5 px-3 hover:bg-[#f1f5f9] rounded-lg transition-background group bg-[#f1f5f9] text-primary font-medium">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-compass h-5 w-5 mr-2 text-primary animate-spin-once"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
                </svg>
                Browse
              </button>
              <button className="flex w-full text-sm text-[#f1f5f9]-foreground items-center py-3.5 px-3 hover:bg-[#f1f5f9] rounded-lg transition-background group">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-trophy text-[#f1f5f9]-foreground h-5 w-5 mr-2"
                >
                  <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                  <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                  <path d="M4 22h16"></path>
                  <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
                  <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
                  <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
                </svg>
                Leaderboard
              </button>
              <button className="flex w-full text-sm text-[#f1f5f9]-foreground items-center py-3.5 px-3 hover:bg-[#f1f5f9] rounded-lg transition-background group">
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="text-[#f1f5f9]-foreground h-5 w-5 mr-2"
                  height="22"
                  width="22"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M8 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"></path>
                  <path d="M14 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"></path>
                  <path d="M15.5 17c0 1 1.5 3 2 3c1.5 0 2.833 -1.667 3.5 -3c.667 -1.667 .5 -5.833 -1.5 -11.5c-1.457 -1.015 -3 -1.34 -4.5 -1.5l-.972 1.923a11.913 11.913 0 0 0 -4.053 0l-.975 -1.923c-1.5 .16 -3.043 .485 -4.5 1.5c-2 5.667 -2.167 9.833 -1.5 11.5c.667 1.333 2 3 3.5 3c.5 0 2 -2 2 -3"></path>
                  <path d="M7 16.5c3.5 1 6.5 1 10 0"></path>
                </svg>
                Discord
              </button>
              <button className="flex w-full text-sm text-[#f1f5f9]-foreground items-center py-3.5 px-3 hover:bg-[#f1f5f9] rounded-lg transition-background group">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-calendar text-[#f1f5f9]-foreground h-5 w-5 mr-2"
                >
                  <path d="M8 2v4"></path>
                  <path d="M16 2v4"></path>
                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                  <path d="M3 10h18"></path>
                </svg>
                Events
                <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-sky-500/10 text-sky-800 ml-auto">
                  New
                </div>
              </button>
              <button className="flex w-full text-sm text-[#f1f5f9]-foreground items-center py-3.5 px-3 hover:bg-[#f1f5f9] rounded-lg transition-background group">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-code text-[#f1f5f9]-foreground h-5 w-5 mr-2"
                >
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
                Problems
                <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-sky-500/10 text-sky-800 ml-auto">
                  New
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
