import React from 'react'
import Image from 'next/image'

import campaign1 from '@/img/campaign1.jpg'
import campaign2 from '@/img/campaign2.jpg'
import campaign3 from '@/img/campaign3.jpg'
import campaign4 from '@/img/campaign4.jpg'

const index = () => {
  return (
    <>
      <main className="my-0 mx-auto min-h-screen max-w-480 overflow-x-hidden bg-gray-100">
        <div className="flex min-h-screen">
          <div className="flex flex-row w-full">
            <div className="flex flex-1 flex-col items-center justify-center px-10 relative">
              <div className="flex flex-1 flex-col  max-w-md bg-white pb-18">
                <main class="style__Main-sc-__sc-18nwpis-0 inRNKg">
                  <div class="my-0 flex justify-around">
                    <div
                      aria-hidden="true"
                      data-testid="category-donation-list-button"
                      class="flex w-full cursor-pointer items-center justify-center border-r border-solid border-[#e8e8e8] p-[0.5em] text-center text-[12px] font-semibold"
                    >
                      <span class="mr-[5px]">
                        <img
                          src="https://assets.kitabisa.cc/images/icons/icon_category.svg"
                          alt="category"
                        />
                      </span>
                      Kategori
                    </div>
                    <div
                      aria-hidden="true"
                      data-testid="sort-donation-list-button"
                      class="flex w-full cursor-pointer items-center justify-center p-[0.5em] text-center text-[12px] font-semibold"
                    >
                      <span class="mr-[5px]">
                        <img
                          src="https://assets.kitabisa.cc/images/icons/icon_sort.svg"
                          alt="sort"
                        />
                      </span>
                      Urutkan
                    </div>
                    <div
                      aria-hidden="true"
                      data-testid="filter-donation-list-button"
                      class="flex w-full cursor-pointer items-center justify-center border-l border-solid border-[#e8e8e8] p-[0.5em] text-center text-[12px] font-semibold"
                    >
                      <span>
                        <img
                          src="https://assets.kitabisa.cc/images/icons/icon_filter.svg"
                          alt="filter"
                        />
                      </span>
                      Filter
                    </div>
                  </div>
                  <div class="box-shadow my-[8px] mx-[-16px] border-b border-solid border-[#e8e8e8]"></div>
                  <div class="mt-[0.5em]">
                    <div class="infinite-scroll-component__outerdiv">
                      <div class="infinite-scroll-component" style="height: auto; overflow: auto;">
                        <div>
                          <a
                            data-testid="card-list-campaign"
                            class="text-tundora no-underline"
                            href="/campaign/yukinfaqyatim"
                            id="347492-347492"
                          >
                            <div class="my-[1em] mx-[0em] flex items-center bg-white leading-[1.25em]">
                              <figure class="m-0 mr-5 flex aspect-[16/9] h-fit flex-1 items-center justify-center">
                                <img
                                  alt="Infaq Yatim: Kebahagiaan untuk 500 anak-anak Yatim"
                                  srcset="
                                        /_next/image?url=https%3A%2F%2Fimgix.kitabisa.com%2Fmaster%2Fb380d3ff-8748-11ec-a3fc-52b309a993ab_FDC998DEA99A7DAD.png&amp;w=256&amp;q=75 1x,
                                        /_next/image?url=https%3A%2F%2Fimgix.kitabisa.com%2Fmaster%2Fb380d3ff-8748-11ec-a3fc-52b309a993ab_FDC998DEA99A7DAD.png&amp;w=640&amp;q=75 2x
                                    "
                                  src="https://kitabisa.com/_next/image?url=https%3A%2F%2Fimgix.kitabisa.com%2Fmaster%2Fb380d3ff-8748-11ec-a3fc-52b309a993ab_FDC998DEA99A7DAD.png&amp;w=640&amp;q=75"
                                  width="256"
                                  height="144"
                                  decoding="async"
                                  data-nimg="1"
                                  class="h-full w-full rounded object-fill"
                                  loading="lazy"
                                  style="color: transparent;"
                                />
                              </figure>
                              <div class="flex max-w-[45%] flex-1 flex-col justify-between">
                                <span
                                  class="my-[0.25em] mx-[0em] overflow-hidden break-words text-sm font-semibold text-tundora"
                                  style="display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 2;"
                                >
                                  Infaq Yatim: Kebahagiaan untuk 500 anak-anak Yatim
                                </span>
                                <div class="my-[0.25em] mx-[0em] flex w-full items-center align-middle text-xs text-[rgba(0,0,0,0.9)]">
                                  <span class="overflow-hidden text-ellipsis whitespace-nowrap">
                                    Yuk Peduli
                                  </span>
                                  <img
                                    class="ml-[0.25em] h-3"
                                    src="https://assets.kitabisa.cc/images/icons/icon__verified-org.svg"
                                    alt="icon__badge"
                                    width="31"
                                    height="12"
                                    fetchpriority="low"
                                    decoding="auto"
                                  />
                                </div>
                                <div class="mx-[0em] my-[0.25em]">
                                  <div
                                    data-testid="progressBar"
                                    class="style__Track-sc-__sc-15i3suc-0 clbcke"
                                  >
                                    <div
                                      color="primary"
                                      data-testid="progressBarFiller"
                                      class="style__Filler-sc-__sc-15i3suc-1 hBvphP"
                                    ></div>
                                  </div>
                                </div>
                                <div class="my-[0.25em] mx-[0em] flex w-full justify-between">
                                  <div class="flex flex-col">
                                    <span class="text-xs font-normal text-tundora">Terkumpul</span>
                                    <span class="text-sm font-bold">Rp 1.081.292.402</span>
                                  </div>
                                  <div class="flex flex-col text-right">
                                    <span class="text-xs font-normal text-tundora">Sisa hari</span>
                                    <span class="text-sm">
                                      <strong> 1027 </strong>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="h-px bg-mercury"></div>
                          </a>
                        </div>
                        <div>
                          <a
                            data-testid="card-list-campaign"
                            class="text-tundora no-underline"
                            href="/campaign/bantumasjidpq2"
                            id="254856-254856"
                          >
                            <div class="my-[1em] mx-[0em] flex items-center bg-white leading-[1.25em]">
                              <figure class="m-0 mr-5 flex aspect-[16/9] h-fit flex-1 items-center justify-center">
                                <img
                                  alt="Bantu selesaikan masjid pondok quran 2 yg tertunda"
                                  srcset="
                                        /_next/image?url=https%3A%2F%2Fimgix.kitabisa.com%2Fa8526eda-a1db-4479-8c77-33ac65e7cd3a.jpg%3Far%3D16%253A9%26w%3D214%26auto%3Dcompress%26fm%3Dpjpg%26cs%3Dtinysrgb%26fit%3Dscale&amp;w=256&amp;q=75 1x,
                                        /_next/image?url=https%3A%2F%2Fimgix.kitabisa.com%2Fa8526eda-a1db-4479-8c77-33ac65e7cd3a.jpg%3Far%3D16%253A9%26w%3D214%26auto%3Dcompress%26fm%3Dpjpg%26cs%3Dtinysrgb%26fit%3Dscale&amp;w=640&amp;q=75 2x
                                    "
                                  src="https://kitabisa.com/_next/image?url=https%3A%2F%2Fimgix.kitabisa.com%2Fa8526eda-a1db-4479-8c77-33ac65e7cd3a.jpg%3Far%3D16%253A9%26w%3D214%26auto%3Dcompress%26fm%3Dpjpg%26cs%3Dtinysrgb%26fit%3Dscale&amp;w=640&amp;q=75"
                                  width="256"
                                  height="144"
                                  decoding="async"
                                  data-nimg="1"
                                  class="h-full w-full rounded object-fill"
                                  loading="lazy"
                                  style="color: transparent;"
                                />
                              </figure>
                              <div class="flex max-w-[45%] flex-1 flex-col justify-between">
                                <span
                                  class="my-[0.25em] mx-[0em] overflow-hidden break-words text-sm font-semibold text-tundora"
                                  style="display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 2;"
                                >
                                  Bantu selesaikan masjid pondok quran 2 yg tertunda
                                </span>
                                <div class="my-[0.25em] mx-[0em] flex w-full items-center align-middle text-xs text-[rgba(0,0,0,0.9)]">
                                  <span class="overflow-hidden text-ellipsis whitespace-nowrap">
                                    Infaq Berkah Qurani
                                  </span>
                                  <img
                                    class="ml-[0.25em] h-3"
                                    src="https://assets.kitabisa.cc/images/icons/icon__verified-org.svg"
                                    alt="icon__badge"
                                    width="31"
                                    height="12"
                                    fetchpriority="low"
                                    decoding="auto"
                                  />
                                </div>
                                <div class="mx-[0em] my-[0.25em]">
                                  <div
                                    data-testid="progressBar"
                                    class="style__Track-sc-__sc-15i3suc-0 clbcke"
                                  >
                                    <div
                                      color="primary"
                                      data-testid="progressBarFiller"
                                      class="style__Filler-sc-__sc-15i3suc-1 bVCyZU"
                                    ></div>
                                  </div>
                                </div>
                                <div class="my-[0.25em] mx-[0em] flex w-full justify-between">
                                  <div class="flex flex-col">
                                    <span class="text-xs font-normal text-tundora">Terkumpul</span>
                                    <span class="text-sm font-bold">Rp 1.121.768.782</span>
                                  </div>
                                  <div class="flex flex-col text-right">
                                    <span class="text-xs font-normal text-tundora">Sisa hari</span>
                                    <span class="text-sm">
                                      <strong> 327 </strong>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="h-px bg-mercury"></div>
                          </a>
                        </div>
                        <div>
                          <a
                            data-testid="card-list-campaign"
                            class="text-tundora no-underline"
                            href="/campaign/masjidalfatihalbaqili"
                            id="258957-258957"
                          >
                            <div class="my-[1em] mx-[0em] flex items-center bg-white leading-[1.25em]">
                              <figure class="m-0 mr-5 flex aspect-[16/9] h-fit flex-1 items-center justify-center">
                                <img
                                  alt="Pahala Mengalir Selamanya! Ayo Beramal Jariyah"
                                  srcset="
                                        /_next/image?url=https%3A%2F%2Fimgix.kitabisa.com%2F76d66d4f-6f84-4dee-b00c-7e4693d60d61.jpg%3Far%3D16%253A9%26w%3D214%26auto%3Dcompress%26fm%3Dpjpg%26cs%3Dtinysrgb%26fit%3Dscale&amp;w=256&amp;q=75 1x,
                                        /_next/image?url=https%3A%2F%2Fimgix.kitabisa.com%2F76d66d4f-6f84-4dee-b00c-7e4693d60d61.jpg%3Far%3D16%253A9%26w%3D214%26auto%3Dcompress%26fm%3Dpjpg%26cs%3Dtinysrgb%26fit%3Dscale&amp;w=640&amp;q=75 2x
                                    "
                                  src="https://kitabisa.com/_next/image?url=https%3A%2F%2Fimgix.kitabisa.com%2F76d66d4f-6f84-4dee-b00c-7e4693d60d61.jpg%3Far%3D16%253A9%26w%3D214%26auto%3Dcompress%26fm%3Dpjpg%26cs%3Dtinysrgb%26fit%3Dscale&amp;w=640&amp;q=75"
                                  width="256"
                                  height="144"
                                  decoding="async"
                                  data-nimg="1"
                                  class="h-full w-full rounded object-fill"
                                  loading="lazy"
                                  style="color: transparent;"
                                />
                              </figure>
                              <div class="flex max-w-[45%] flex-1 flex-col justify-between">
                                <span
                                  class="my-[0.25em] mx-[0em] overflow-hidden break-words text-sm font-semibold text-tundora"
                                  style="display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 2;"
                                >
                                  Pahala Mengalir Selamanya! Ayo Beramal Jariyah
                                </span>
                                <div class="my-[0.25em] mx-[0em] flex w-full items-center align-middle text-xs text-[rgba(0,0,0,0.9)]">
                                  <span class="overflow-hidden text-ellipsis whitespace-nowrap">
                                    Yayasan Majelis Al Fatih Albaqili
                                  </span>
                                  <img
                                    class="ml-[0.25em] h-3"
                                    src="https://assets.kitabisa.cc/images/icons/icon__verified-org.svg"
                                    alt="icon__badge"
                                    width="31"
                                    height="12"
                                    fetchpriority="low"
                                    decoding="auto"
                                  />
                                </div>
                                <div class="mx-[0em] my-[0.25em]">
                                  <div
                                    data-testid="progressBar"
                                    class="style__Track-sc-__sc-15i3suc-0 clbcke"
                                  >
                                    <div
                                      color="primary"
                                      data-testid="progressBarFiller"
                                      class="style__Filler-sc-__sc-15i3suc-1 fMNdHy"
                                    ></div>
                                  </div>
                                </div>
                                <div class="my-[0.25em] mx-[0em] flex w-full justify-between">
                                  <div class="flex flex-col">
                                    <span class="text-xs font-normal text-tundora">Terkumpul</span>
                                    <span class="text-sm font-bold">Rp 456.950.355</span>
                                  </div>
                                  <div class="flex flex-col text-right">
                                    <span class="text-xs font-normal text-tundora">Sisa hari</span>
                                    <span class="text-sm">
                                      <strong> 9 </strong>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="h-px bg-mercury"></div>
                          </a>
                        </div>
                        <div>
                          <a
                            data-testid="card-list-campaign"
                            class="text-tundora no-underline"
                            href="/campaign/bantumasjidterdampakbencana"
                            id="378212-378212"
                          >
                            <div class="my-[1em] mx-[0em] flex items-center bg-white leading-[1.25em]">
                              <figure class="m-0 mr-5 flex aspect-[16/9] h-fit flex-1 items-center justify-center">
                                <img
                                  alt="Bekal Akhirat Quran Untuk Masjid Terdampak Bencana"
                                  srcset="
                                        /_next/image?url=https%3A%2F%2Fimgix.kitabisa.com%2Fe33ddc41-fb6c-4e78-a35f-5316d1e9a281.jpg%3Far%3D16%253A9%26w%3D214%26auto%3Dcompress%26fm%3Dpjpg%26cs%3Dtinysrgb%26fit%3Dscale&amp;w=256&amp;q=75 1x,
                                        /_next/image?url=https%3A%2F%2Fimgix.kitabisa.com%2Fe33ddc41-fb6c-4e78-a35f-5316d1e9a281.jpg%3Far%3D16%253A9%26w%3D214%26auto%3Dcompress%26fm%3Dpjpg%26cs%3Dtinysrgb%26fit%3Dscale&amp;w=640&amp;q=75 2x
                                    "
                                  src="https://kitabisa.com/_next/image?url=https%3A%2F%2Fimgix.kitabisa.com%2Fe33ddc41-fb6c-4e78-a35f-5316d1e9a281.jpg%3Far%3D16%253A9%26w%3D214%26auto%3Dcompress%26fm%3Dpjpg%26cs%3Dtinysrgb%26fit%3Dscale&amp;w=640&amp;q=75"
                                  width="256"
                                  height="144"
                                  decoding="async"
                                  data-nimg="1"
                                  class="h-full w-full rounded object-fill"
                                  loading="lazy"
                                  style="color: transparent;"
                                />
                              </figure>
                              <div class="flex max-w-[45%] flex-1 flex-col justify-between">
                                <span
                                  class="my-[0.25em] mx-[0em] overflow-hidden break-words text-sm font-semibold text-tundora"
                                  style="display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 2;"
                                >
                                  Bekal Akhirat Quran Untuk Masjid Terdampak Bencana
                                </span>
                                <div class="my-[0.25em] mx-[0em] flex w-full items-center align-middle text-xs text-[rgba(0,0,0,0.9)]">
                                  <span class="overflow-hidden text-ellipsis whitespace-nowrap">
                                    Masjid Nusantara
                                  </span>
                                  <img
                                    class="ml-[0.25em] h-3"
                                    src="https://assets.kitabisa.cc/images/icons/icon__verified-org.svg"
                                    alt="icon__badge"
                                    width="31"
                                    height="12"
                                    fetchpriority="low"
                                    decoding="auto"
                                  />
                                </div>
                                <div class="mx-[0em] my-[0.25em]">
                                  <div
                                    data-testid="progressBar"
                                    class="style__Track-sc-__sc-15i3suc-0 clbcke"
                                  >
                                    <div
                                      color="primary"
                                      data-testid="progressBarFiller"
                                      class="style__Filler-sc-__sc-15i3suc-1 jUYxLh"
                                    ></div>
                                  </div>
                                </div>
                                <div class="my-[0.25em] mx-[0em] flex w-full justify-between">
                                  <div class="flex flex-col">
                                    <span class="text-xs font-normal text-tundora">Terkumpul</span>
                                    <span class="text-sm font-bold">Rp 375.909.631</span>
                                  </div>
                                  <div class="flex flex-col text-right">
                                    <span class="text-xs font-normal text-tundora">Sisa hari</span>
                                    <span class="text-sm">
                                      <strong> 82 </strong>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="h-px bg-mercury"></div>
                          </a>
                        </div>
                       
                       
                      </div>
                    </div>
                  </div>
                </main>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default index
