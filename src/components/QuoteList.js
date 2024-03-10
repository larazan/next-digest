import React from 'react'

const QuoteList = () => {
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
    </>
  )
}

export default QuoteList