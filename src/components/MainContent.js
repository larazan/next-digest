import React from "react";
import Link from "next/link";
import Pagination from "./Pagination";

const MainContent = () => {
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

  const quotesData = [
    "Tak ada hal yang lebih membahagiakan seorang anak ketika bisa membuat kedua orangtuanya menangis bahagia, kan?",
    "Berteriak-teriak di depan kuburan memang bukan hal lazim.",
    "Cha, kalau kamu memang nggak tahan hidup bareng aku, ya aku bisa apa? Tapi, kalau alasan kamu mau berpisah denganku agar aku bahagia? please, don?t do that. Percuma. Aku udah milih untuk bersama kamu. Aku udah janji sama kamu untuk mencintai kamu dan aku akan menepatinya, Cha.",
    "Cinta bisa membuat tindakan apa pun menjadi terasa benar.",
    "Dia boleh menjadi pemuja rahasiamu. Namun, aku akan selalu menjadi penggemarmu yang nomor satu. Dia harus tahu itu.",
    "Hari yang buruk bisa dimulai kapan saja.",
    "Kamu harus berani mengambil resiko apa pun ketika kamu memutuskan untuk jatuh cinta.",
    "Kita tidak terbiasa membiarkan waktu hilang begitu saja tanpa kita tahu, selalu ada cerita di tiap menit kita, bukan?",
    "Lama atau sebentar tidak bisa ditentukan. Ada yang butuh waktu bertahun-tahun, ada juga yang dalam hitungan hari sudah yakin akan seseorang yang dicintainya.",
    "Masa lalu tinggal sejarah. Hidup itu sekarang. Bukan pula besok.",
    "Memang itu gunanya cinta, kan? Mengubah siapa saja menjadi lebih baik.",
    "Membiarkannya terbang, bukan berarti hatinya tidak disisimu.",
    "Mencintai itu nggak perlu rumit. Kuncinya ketulusan.",
    "Meskipun raga kita berjarak, namun hati kita selalu bersama? Hatiku dan hatimu?",
    "Mungkin, kau akan ragu ketika cinta yang kau dapatkan masih separuh hati ketika kau terima. Ke mana pun kau pergi, masa lalu akan menjadi kepingan cerita yang mengusik dan mengganggu perasaanmu.\n\n\n\n",
  ];

  return (
    <>
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
            <div className="flex items-center gap-x-2 overflow-x-auto pb-2">
              <a href="/">
                <div className="py-2 px-3 text-sm rounded-md flex items-center gap-x-1 hover:bg-slate-200 transition cursor-pointer border-sky-700 bg-sky-500/10 text-sky-800">
                  <div className="truncate text-xs font-semibold">All</div>
                </div>
              </a>
              {tags.map((data, index) => (
                <Link href="/" key={index}>
                  <div className="py-2 px-3 text-sm bg-[#f1f5f9] rounded-md flex items-center gap-x-1 hover:bg-slate-200 transition cursor-pointer">
                    <div className="truncate text-xs font-semibold capitalize">
                      {data}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div>
              {/* <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
                <a href="/projects/duolingo-clone">
                  <div className="group hover:bg-muted border transition overflow-hidden rounded-lg h-full flex flex-col">
                    <div className="flex-1">
                      
                      <div className="flex flex-col pt-2 px-3">
                        <div className="text-sm md:text-base font-medium group-hover:text-sky-700 transition line-clamp-2">
                          Duolingo Clone
                        </div>
                        <div className="my-3 flex items-center gap-x-2 text-xs">
                          <div className="flex items-center gap-x-1 text-slate-500">
                            <div className="rounded-full flex items-center justify-center bg-sky-100 p-1">
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
                                className="lucide lucide-book-open text-sky-700 h-4 w-4"
                              >
                                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                              </svg>
                            </div>
                            <span>12 Chapters</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="px-3 pb-3">
                      <p className="text-sm font-medium text-slate-700">
                        Early access
                      </p>
                    </div>
                  </div>
                </a>
              </div> */}
              <div className="py-10  columns-1 md:columns-2 lg:columns-3 ">
                <div className="mb-4 rounded bg-white border group flex flex-col overflow-hidden justify-center shadow-md items-center cursor-zoom-in">
                  <div className="flex-grow py-2 lg:py-4 md:py-4 px-4">
                    <svg
                      width="38"
                      height="39"
                      viewBox="0 0 38 39"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.293 16.233c-.353 0-.692.054-1.03.103.11-.367.222-.74.403-1.077.18-.487.462-.91.743-1.336.234-.46.647-.773.951-1.167.318-.383.752-.638 1.096-.956.337-.333.779-.499 1.13-.733.368-.21.688-.444 1.03-.554l.853-.352.75-.312-.768-3.068-.945.228c-.302.076-.671.164-1.09.27-.43.08-.887.297-1.397.494-.504.225-1.086.377-1.628.738-.545.345-1.173.634-1.727 1.096-.537.477-1.185.89-1.663 1.496-.522.567-1.038 1.162-1.439 1.84-.464.646-.779 1.355-1.112 2.057-.3.701-.543 1.418-.74 2.115a19.112 19.112 0 0 0-.608 3.859 19.722 19.722 0 0 0 .044 2.766c.024.323.068.636.1.853l.04.266.04-.01a7.125 7.125 0 1 0 6.967-8.616Zm17.417 0c-.353 0-.692.054-1.03.103.11-.367.222-.74.403-1.077.18-.487.462-.91.742-1.336.235-.46.648-.773.952-1.167.318-.383.752-.638 1.095-.956.338-.333.78-.499 1.131-.733.367-.21.687-.444 1.03-.554l.853-.352.75-.312-.768-3.068-.945.228c-.302.076-.671.164-1.091.27-.43.08-.887.297-1.396.494-.502.227-1.087.377-1.628.74-.545.345-1.173.633-1.728 1.096-.536.476-1.184.89-1.662 1.494-.523.567-1.039 1.162-1.44 1.84-.463.646-.778 1.355-1.11 2.057a17.313 17.313 0 0 0-.742 2.115 19.108 19.108 0 0 0-.608 3.859 19.713 19.713 0 0 0 .044 2.766c.024.323.069.636.1.853l.04.266.041-.01a7.126 7.126 0 1 0 6.967-8.616Z"
                        fill="#FF6D42"
                      ></path>
                    </svg>
                    <p className="leading-tight md:leading-snug text-black text-center text-base md:text-xl  font-medium group-hover:text-sky-700 transition">
                      When we deny our emotion, it owns us. When we own our
                      emotion, we can rebuild and find our way through the pain.
                    </p>
                    <div className=" px-2 py-4 flex justify-end">
                      <button className=" flex justify-between space-x-6 md:space-x-2">
                        <div className="flex space-x-2 ">
                          <span className="flex items-center justify-center text-sm text-[#171717BF] font-semibold">
                            Author
                          </span>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="mb-4 rounded bg-white border group flex flex-col overflow-hidden justify-center shadow-md items-center cursor-zoom-in">
                  <div className="flex-grow py-2 lg:py-4 md:py-4 px-4">
                    <svg
                      width="38"
                      height="39"
                      viewBox="0 0 38 39"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.293 16.233c-.353 0-.692.054-1.03.103.11-.367.222-.74.403-1.077.18-.487.462-.91.743-1.336.234-.46.647-.773.951-1.167.318-.383.752-.638 1.096-.956.337-.333.779-.499 1.13-.733.368-.21.688-.444 1.03-.554l.853-.352.75-.312-.768-3.068-.945.228c-.302.076-.671.164-1.09.27-.43.08-.887.297-1.397.494-.504.225-1.086.377-1.628.738-.545.345-1.173.634-1.727 1.096-.537.477-1.185.89-1.663 1.496-.522.567-1.038 1.162-1.439 1.84-.464.646-.779 1.355-1.112 2.057-.3.701-.543 1.418-.74 2.115a19.112 19.112 0 0 0-.608 3.859 19.722 19.722 0 0 0 .044 2.766c.024.323.068.636.1.853l.04.266.04-.01a7.125 7.125 0 1 0 6.967-8.616Zm17.417 0c-.353 0-.692.054-1.03.103.11-.367.222-.74.403-1.077.18-.487.462-.91.742-1.336.235-.46.648-.773.952-1.167.318-.383.752-.638 1.095-.956.338-.333.78-.499 1.131-.733.367-.21.687-.444 1.03-.554l.853-.352.75-.312-.768-3.068-.945.228c-.302.076-.671.164-1.091.27-.43.08-.887.297-1.396.494-.502.227-1.087.377-1.628.74-.545.345-1.173.633-1.728 1.096-.536.476-1.184.89-1.662 1.494-.523.567-1.039 1.162-1.44 1.84-.463.646-.778 1.355-1.11 2.057a17.313 17.313 0 0 0-.742 2.115 19.108 19.108 0 0 0-.608 3.859 19.713 19.713 0 0 0 .044 2.766c.024.323.069.636.1.853l.04.266.041-.01a7.126 7.126 0 1 0 6.967-8.616Z"
                        fill="#FF6D42"
                      ></path>
                    </svg>
                    <p className="leading-tight md:leading-snug text-black text-center text-base md:text-xl font-medium group-hover:text-sky-700 transition">
                      You’ll be on your way up! You’ll be seeing great sights!
                      You’ll join the high fliers who soar to high heights.
                    </p>
                    <div className=" px-2 py-4 flex justify-end">
                      <button className=" flex justify-between space-x-6 md:space-x-2">
                        <div className="flex space-x-2 ">
                          <span className="flex items-center justify-center text-sm text-[#171717BF] font-semibold">
                            Author
                          </span>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="mb-4 rounded bg-white border group flex flex-col overflow-hidden justify-center shadow-md items-center cursor-zoom-in">
                  <div className="flex-grow py-2 lg:py-4 md:py-4 px-4">
                    <svg
                      width="38"
                      height="39"
                      viewBox="0 0 38 39"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.293 16.233c-.353 0-.692.054-1.03.103.11-.367.222-.74.403-1.077.18-.487.462-.91.743-1.336.234-.46.647-.773.951-1.167.318-.383.752-.638 1.096-.956.337-.333.779-.499 1.13-.733.368-.21.688-.444 1.03-.554l.853-.352.75-.312-.768-3.068-.945.228c-.302.076-.671.164-1.09.27-.43.08-.887.297-1.397.494-.504.225-1.086.377-1.628.738-.545.345-1.173.634-1.727 1.096-.537.477-1.185.89-1.663 1.496-.522.567-1.038 1.162-1.439 1.84-.464.646-.779 1.355-1.112 2.057-.3.701-.543 1.418-.74 2.115a19.112 19.112 0 0 0-.608 3.859 19.722 19.722 0 0 0 .044 2.766c.024.323.068.636.1.853l.04.266.04-.01a7.125 7.125 0 1 0 6.967-8.616Zm17.417 0c-.353 0-.692.054-1.03.103.11-.367.222-.74.403-1.077.18-.487.462-.91.742-1.336.235-.46.648-.773.952-1.167.318-.383.752-.638 1.095-.956.338-.333.78-.499 1.131-.733.367-.21.687-.444 1.03-.554l.853-.352.75-.312-.768-3.068-.945.228c-.302.076-.671.164-1.091.27-.43.08-.887.297-1.396.494-.502.227-1.087.377-1.628.74-.545.345-1.173.633-1.728 1.096-.536.476-1.184.89-1.662 1.494-.523.567-1.039 1.162-1.44 1.84-.463.646-.778 1.355-1.11 2.057a17.313 17.313 0 0 0-.742 2.115 19.108 19.108 0 0 0-.608 3.859 19.713 19.713 0 0 0 .044 2.766c.024.323.069.636.1.853l.04.266.041-.01a7.126 7.126 0 1 0 6.967-8.616Z"
                        fill="#FF6D42"
                      ></path>
                    </svg>
                    <p className="leading-tight md:leading-snug text-black text-center text-base md:text-xl font-medium group-hover:text-sky-700 transition">
                      It’s a troublesome world. All the people who are in it are
                      troubled with troubles almost every minute. You ought to
                      be thankful, a whole heaping lot, for the places and
                      people you’re lucky you’re not.
                    </p>
                    <div className=" px-2 py-4 flex justify-end">
                      <button className=" flex justify-between space-x-6 md:space-x-2">
                        <div className="flex space-x-2 ">
                          <span className="flex items-center justify-center text-sm text-[#171717BF] font-semibold">
                            Author
                          </span>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
                {quotesData.map((data, index) => (
                  <div
                    className="mb-4 rounded bg-white border group flex flex-col overflow-hidden justify-center shadow-md items-center cursor-zoom-in"
                    key={index}
                  >
                    <div className="flex-grow py-2 lg:py-4 md:py-4 px-4">
                      <svg
                        width="38"
                        height="39"
                        viewBox="0 0 38 39"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.293 16.233c-.353 0-.692.054-1.03.103.11-.367.222-.74.403-1.077.18-.487.462-.91.743-1.336.234-.46.647-.773.951-1.167.318-.383.752-.638 1.096-.956.337-.333.779-.499 1.13-.733.368-.21.688-.444 1.03-.554l.853-.352.75-.312-.768-3.068-.945.228c-.302.076-.671.164-1.09.27-.43.08-.887.297-1.397.494-.504.225-1.086.377-1.628.738-.545.345-1.173.634-1.727 1.096-.537.477-1.185.89-1.663 1.496-.522.567-1.038 1.162-1.439 1.84-.464.646-.779 1.355-1.112 2.057-.3.701-.543 1.418-.74 2.115a19.112 19.112 0 0 0-.608 3.859 19.722 19.722 0 0 0 .044 2.766c.024.323.068.636.1.853l.04.266.04-.01a7.125 7.125 0 1 0 6.967-8.616Zm17.417 0c-.353 0-.692.054-1.03.103.11-.367.222-.74.403-1.077.18-.487.462-.91.742-1.336.235-.46.648-.773.952-1.167.318-.383.752-.638 1.095-.956.338-.333.78-.499 1.131-.733.367-.21.687-.444 1.03-.554l.853-.352.75-.312-.768-3.068-.945.228c-.302.076-.671.164-1.091.27-.43.08-.887.297-1.396.494-.502.227-1.087.377-1.628.74-.545.345-1.173.633-1.728 1.096-.536.476-1.184.89-1.662 1.494-.523.567-1.039 1.162-1.44 1.84-.463.646-.778 1.355-1.11 2.057a17.313 17.313 0 0 0-.742 2.115 19.108 19.108 0 0 0-.608 3.859 19.713 19.713 0 0 0 .044 2.766c.024.323.069.636.1.853l.04.266.041-.01a7.126 7.126 0 1 0 6.967-8.616Z"
                          fill="#FF6D42"
                        ></path>
                      </svg>
                      <p className="leading-tight md:leading-snug text-black text-center text-base md:text-xl  font-medium group-hover:text-sky-700 transition">
                        {data}
                      </p>
                      <div className=" px-2 py-4 flex justify-end">
                        <button className=" flex justify-between space-x-6 md:space-x-2">
                          <div className="flex space-x-2 ">
                            <span className="flex items-center justify-center text-sm text-[#171717BF] font-semibold">
                              Author
                            </span>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <Pagination />
          </div>
        </div>
      </main>

    </>
  );
};

export default MainContent;
