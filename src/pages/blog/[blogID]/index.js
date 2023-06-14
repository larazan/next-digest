import React, { Fragment } from 'react'
import Image from 'next/image'
import Link from "next/link";
import { useRouter } from 'next/router'
// import Rincian from '@/components/Rincian';

import yatim from '@/img/yatim.jpg'
import adam from '@/img/adam.jpg'

const Detail = () => {

  const router = useRouter()

  const handleClick = (e, path) => {
    e.preventDefault()
    router.push(path)
  }

  const donorClick = (e, path) => {
    e.preventDefault()
    router.push(path)
  }

  const danaClick = (e, path) => {
    e.preventDefault()
    router.push(path)
  }

  const newsClick = (e, path) => {
    e.preventDefault()
    router.push(path)
  }

  return (
    <Fragment>
    <main className='my-0 mx-auto min-h-screen max-w-480 overflow-x-hidden bg-gray-100'>
      <div className="flex min-h-screen">
        <div className="flex flex-row w-full">
          <div className="flex flex-1 flex-col items-center justify-center px-10 relative">
            <div className="flex flex-1 flex-col  max-w-md bg-white pb-18">
              <div class="max-w-480">
                <Image
                  data-testid="campaign-banner-image"
                  alt="Infaq Yatim: Kebahagiaan untuk 500 anak-anak Yatim"
                  srcset={yatim}
                  src={yatim}
                  width="480"
                  height="270"
                  decoding="async"
                  data-nimg="1"
                  class="h-auto max-h-[270px] w-full"
                  style={{ color: 'transparent' }}
                />
              </div>

              <div class="px-4 pb-4">
                <h1
                  data-testid="campaign-info__title"
                  class="mb-3 font-bold line-clamp-3 text-lg text-gray-900"
                >
                  Infaq Yatim: Kebahagiaan untuk 500 anak-anak Yatim
                </h1>
                <span
                  data-testid="campaign-info__donation-received"
                  class="mb-px inline-block text-base font-semibold text-cerulean60"
                >
                  Rp1.074.106.809
                </span>
                <div class="flex justify-between">
                  <div data-testid="campaign-info__donation-goal" class="mb-3 text-xs">
                    Terkumpul dari
                    <span class="ml-2 font-semibold text-sm text-gray-900">Rp1.100.000.000</span>
                  </div>
                  <div class="text-sm text-gray-900" data-testid="donation-days-to-go">
                    <span>1030</span>
                    <span>&nbsp;hari</span>
                  </div>
                </div>
                <svg data-testid="progressBarFiller" width="100%" height="5">
                  <rect x="0" rx="3" width="100%" height="100%" fill="#E8E8E8"></rect>
                  <rect x="0" rx="3" width="97.646075%" height="100%" fill="#10A8E5"></rect>
                </svg>
                <div class="mt-4 grid grid-cols-3 text-sm">
                  
                  <button>
                    <div class="flex flex-col items-center">
                      <div class="mb-1.5 flex items-center">
                        <div class="h-5 w-5">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            role="img"
                          >
                            <path
                              d="M8.687 4.121c1.03.228 1.895.754 2.633 1.5.226.228.474.435.68.623.25-.232.53-.487.806-.747 1.088-1.025 2.364-1.571 3.877-1.483 1.045.06 1.97.442 2.71 1.18 1.438 1.435 1.918 3.15 1.411 5.122-.26 1.008-.742 1.914-1.322 2.77-.906 1.336-2.018 2.49-3.207 3.574-1.146 1.045-2.367 1.998-3.616 2.916a.993.993 0 0 1-1.168.004l-2.11-1.514c-1.375-1.084-2.659-2.266-3.8-3.596-.747-.87-1.41-1.799-1.901-2.84-.36-.76-.608-1.551-.667-2.394-.08-1.151.22-2.202.856-3.162C4.971 4.415 6.74 3.692 8.687 4.121Z"
                              fill="#10A8E5"
                            ></path>
                          </svg>
                        </div>
                        <span class="ml-2 inline-block text-body font-semibold">74.605</span>
                      </div>
                      Donasi
                    </div>
                  </button>
                 
                  <button class="border-x border-mercury">
                    <div class="flex flex-col items-center">
                      <div class="mb-1.5 flex w-[96px] items-center justify-center">
                        <div class="h-5 w-5">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            role="img"
                          >
                            <path
                              d="M17.354 21H18a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3h-.646A4.482 4.482 0 0 1 18.5 6v12a4.484 4.484 0 0 1-1.146 3Z"
                              fill="#10A8E5"
                            ></path>
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M10.25 3a.75.75 0 0 1 .75-.75h3A3.75 3.75 0 0 1 17.75 6v12A3.75 3.75 0 0 1 14 21.75H6A3.75 3.75 0 0 1 2.25 18v-7a.75.75 0 0 1 1.5 0v7A2.25 2.25 0 0 0 6 20.25h8A2.25 2.25 0 0 0 16.25 18V6A2.25 2.25 0 0 0 14 3.75h-3a.75.75 0 0 1-.75-.75Z"
                              fill="#6A6A6A"
                            ></path>
                            <path
                              d="M9.5 15.5h2.75a.75.75 0 0 0 0-1.5H9.5a.75.75 0 0 0 0 1.5ZM14.25 18.5H9.5a.75.75 0 0 1 0-1.5h4.75a.75.75 0 0 1 0 1.5ZM5.75 15.5h.5a.75.75 0 0 0 0-1.5h-.5a.75.75 0 0 0 0 1.5ZM7 17.75a.75.75 0 0 1-.75.75h-.5a.75.75 0 0 1 0-1.5h.5a.75.75 0 0 1 .75.75Z"
                              fill="#6A6A6A"
                            ></path>
                            <path d="M6 9H3l6-6v3a3 3 0 0 1-3 3Z" fill="#10A8E5"></path>
                          </svg>
                        </div>
                        <span class="ml-2 inline-block text-body font-semibold">16</span>
                      </div>
                      Kabar Terbaru
                    </div>
                  </button>
                  <button class="bg-gold">
                    <div class="flex flex-col items-center">
                      <div class="mb-1.5 flex w-[96px] items-center justify-center">
                        <div class="h-5 w-5">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            role="img"
                            class="mt-0.5"
                          >
                            <path
                              d="M21 13.65a1 1 0 1 0-2 0v2a2 2 0 0 1-2 2h-5.5l.6-.45a1 1 0 1 0-1.2-1.6l-3 2.25a1 1 0 0 0 0 1.6l3 2.25a1 1 0 0 0 1.2-1.6l-.6-.45H17a4 4 0 0 0 4-4v-2Z"
                              fill="#10A8E5"
                            ></path>
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M5 3.75A2.25 2.25 0 0 0 2.75 6v6A2.25 2.25 0 0 0 5 14.25h2.5a.75.75 0 0 1 0 1.5H5A3.75 3.75 0 0 1 1.25 12V6A3.75 3.75 0 0 1 5 2.25h14A3.75 3.75 0 0 1 22.75 6v6a.75.75 0 0 1-1.5 0V6A2.25 2.25 0 0 0 19 3.75H5ZM13.75 15a.75.75 0 0 1 .75-.75H17a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75Z"
                              fill="#6A6A6A"
                            ></path>
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M12 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                              fill="#6A6A6A"
                            ></path>
                          </svg>
                        </div>
                        <span class="ml-2 inline-block text-body font-semibold">16 kali</span>
                      </div>
                      Pencairan Dana
                    </div>
                  </button>
                </div>
              </div>

              <hr class="inset-x-0 m-0 mx-auto h-2 max-w-480 border-0 bg-gray-200" />

              <div class="px-4">
                <h2 class="m-0 mb-2.5 text-base font-bold text-gray-900 capitalize">Informasi Penggalangan Dana</h2>
                <div class="mb-2 rounded border border-mercury px-3 pt-3 pb-4">
                  <h3 data-testid="campaigner-title" class="mb-3.5 block text-sm text-gray-900 font-semibold">
                    Penggalang Dana
                  </h3>
                  <a
                    class="flex text-mineshaft60"
                    href="/orang-baik/01d5a844bf1409e4bc6581cf39ea52fd"
                  >
                    <div data-testid="campaigner-avatar" class="shrink-0">
                      <div
                        class="mr-3 rounded-full bg-coal relative"
                        style={{ width: '50px', height: '50px'}}
                      >
                        <Image
                          alt="Yuk Peduli"
                          srcset={adam}
                          src={adam}
                          width="50"
                          height="50"
                          decoding="async"
                          data-nimg="1"
                          class="w-full h-full rounded-full object-cover object-center"
                          loading="lazy"
                          style={{ color: 'transparent' }}
                        />
                      </div>
                    </div>
                    <div class="ml-3">
                      <div class="-mb-0.5 text-body">
                        <strong data-testid="campaigner-name" className='text-sm text-gray-900'>Yuk Peduli</strong>
                        <div class="inline-flex">
                          <div class="relative">
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 19 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              role="img"
                              data-testid="verified-campaigner-badge"
                              class="ml-2 inline-block"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M10.407 1.689c-.293-1.585-2.471-1.585-2.764 0-.207 1.124-1.517 1.577-2.328.804l-.126-.12c-1.121-1.068-2.83.273-2.157 1.693.485 1.021-.316 2.195-1.402 2.052l-.103-.014C.031 5.906-.607 8.022.73 8.751c.967.528.967 1.97 0 2.498-1.336.729-.698 2.845.798 2.647l.103-.014c1.086-.143 1.887 1.03 1.402 2.052-.674 1.42 1.036 2.761 2.157 1.693l.126-.12c.81-.773 2.12-.32 2.328.804.293 1.585 2.471 1.585 2.764 0 .207-1.124 1.517-1.577 2.328-.804l.126.12c1.121 1.068 2.83-.273 2.157-1.693-.485-1.021.316-2.195 1.402-2.052l.103.014c1.496.198 2.134-1.918.798-2.647-.968-.528-.968-1.97 0-2.498 1.336-.729.698-2.845-.798-2.647l-.103.014c-1.086.143-1.887-1.03-1.402-2.052.673-1.42-1.036-2.761-2.157-1.692l-.126.12c-.81.772-2.12.32-2.328-.805Zm1.534 5.665c.452.337.544.975.204 1.424L9.21 12.443a1.026 1.026 0 0 1-1.543.109L6 10.814c-.4-.397-.4-1.042 0-1.44a1.029 1.029 0 0 1 1.449 0l.83.909 2.228-2.726c.339-.45.98-.54 1.434-.203Z"
                                fill="#10A8E5"
                              ></path>
                            </svg>
                          </div>
                          <svg
                            width="26"
                            height="26"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            role="img"
                            data-testid="organization-badge"
                            class="ml-1 inline-block"
                          >
                            <path
                              d="M9.706 11.998c0 .804-.203 1.422-.608 1.854-.406.432-.988.648-1.745.648-.757 0-1.339-.216-1.744-.648C5.203 13.42 5 12.8 5 11.992c0-.809.203-1.426.609-1.85.407-.428.991-.642 1.75-.642.76 0 1.34.215 1.742.645.403.43.605 1.047.605 1.853Zm-3.607 0c0 .543.105.952.314 1.226.21.275.523.412.94.412.836 0 1.254-.546 1.254-1.638 0-1.094-.416-1.64-1.247-1.64-.417 0-.732.138-.943.414-.212.275-.318.684-.318 1.226ZM11.71 11.533c0 .11.089.2.2.2h.137c.332 0 .576-.055.734-.163.158-.109.237-.28.237-.512 0-.23-.082-.394-.244-.492-.16-.097-.409-.146-.747-.146h-.118a.2.2 0 0 0-.2.2v.913Zm.2 1.037a.2.2 0 0 0-.2.2v1.14a.524.524 0 0 1-1.049 0v-3.834a.5.5 0 0 1 .5-.5h.94c.672 0 1.17.121 1.491.363.323.239.484.603.484 1.093 0 .285-.08.54-.24.764a1.492 1.492 0 0 1-.463.412c-.109.064-.151.206-.08.31.32.468.587.86.802 1.172a.475.475 0 0 1-.39.744.469.469 0 0 1-.396-.218l-.983-1.553a.2.2 0 0 0-.169-.093h-.248ZM17.04 12.135c0-.237.191-.429.428-.429H18.5a.5.5 0 0 1 .5.5v1.654c0 .217-.14.412-.35.466a5.758 5.758 0 0 1-1.408.174c-.746 0-1.316-.215-1.71-.645-.393-.431-.589-1.05-.589-1.857 0-.784.228-1.395.683-1.833.458-.44 1.09-.658 1.9-.658.362 0 .715.05 1.058.152.23.068.334.326.24.547-.097.23-.367.327-.607.257a2.488 2.488 0 0 0-.698-.1c-.453 0-.816.15-1.088.45-.273.298-.41.7-.41 1.205 0 .527.11.93.328 1.21.221.276.541.415.96.415.086 0 .173-.004.26-.01.238-.02.407-.229.407-.468v-.446a.156.156 0 0 0-.156-.156h-.352a.429.429 0 0 1-.429-.428Z"
                              fill="#10A8E5"
                            ></path>
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M5.464 10.003C5.92 9.526 6.562 9.3 7.36 9.3c.798 0 1.438.227 1.887.708.45.479.66 1.152.66 1.99 0 .837-.212 1.51-.664 1.991-.453.483-1.094.711-1.89.711-.796 0-1.437-.228-1.89-.71-.452-.482-.663-1.158-.663-1.998 0-.84.211-1.514.664-1.989Zm3.637.142C8.7 9.715 8.119 9.5 7.36 9.5c-.76 0-1.343.214-1.751.641-.406.425-.609 1.042-.609 1.85 0 .81.203 1.43.609 1.861.405.432.987.648 1.744.648s1.339-.216 1.745-.648c.405-.432.608-1.05.608-1.854 0-.806-.202-1.424-.605-1.853Zm-2.526.749c-.173.225-.276.583-.276 1.104 0 .523.102.88.273 1.105.164.215.412.333.781.333.37 0 .62-.118.782-.33.17-.224.272-.582.272-1.108 0-.527-.1-.886-.27-1.11-.163-.213-.41-.33-.777-.33-.369 0-.618.119-.785.336Zm6.095-.157c-.112-.068-.316-.117-.643-.117h-.118v.913h.138c.317 0 .513-.054.62-.128.092-.063.15-.164.15-.347 0-.178-.058-.267-.146-.32ZM14 11.912h-.001a1.69 1.69 0 0 1-.524.469.033.033 0 0 0-.015.02.01.01 0 0 0-.001.004l.801 1.172a.675.675 0 0 1-.554 1.057.668.668 0 0 1-.565-.311l-.983-1.553h-.248v1.14a.724.724 0 0 1-1.448 0v-3.834a.7.7 0 0 1 .7-.7h.94c.689 0 1.238.123 1.61.402.385.286.565.717.565 1.254 0 .325-.092.621-.277.88Zm-.407-1.973c-.322-.242-.819-.363-1.49-.363h-.94a.5.5 0 0 0-.5.5v3.834a.524.524 0 1 0 1.047 0v-1.14c0-.11.09-.2.2-.2h.248a.2.2 0 0 1 .169.093l.983 1.553a.469.469 0 0 0 .396.218c.38 0 .605-.43.39-.744-.215-.313-.483-.704-.802-1.172-.071-.104-.029-.246.08-.31.19-.111.345-.249.463-.412.16-.224.24-.479.24-.764 0-.49-.161-.854-.484-1.093Zm1.792 4.052v-.001c-.437-.48-.64-1.155-.64-1.992 0-.824.24-1.493.743-1.977.505-.484 1.193-.714 2.039-.714.381 0 .753.053 1.115.16.36.107.501.5.367.817-.145.342-.531.463-.847.37a2.287 2.287 0 0 0-.642-.09c-.404 0-.71.13-.94.383-.232.254-.357.603-.357 1.071 0 .503.104.855.284 1.086.176.22.433.339.804.339.08 0 .161-.003.243-.01.12-.01.223-.118.223-.268v-.402h-.308a.629.629 0 1 1 0-1.257H18.5a.7.7 0 0 1 .7.7v1.654a.676.676 0 0 1-.5.66 5.953 5.953 0 0 1-1.458.18c-.785 0-1.416-.227-1.858-.71Zm2.717.446c.176-.025.359-.062.549-.111a.476.476 0 0 0 .35-.466v-1.654a.5.5 0 0 0-.5-.5h-1.032a.429.429 0 0 0 0 .857h.352c.086 0 .156.07.156.156v.446c0 .24-.17.449-.407.468-.087.007-.174.01-.26.01-.419 0-.739-.139-.96-.415-.218-.28-.327-.682-.327-1.21 0-.505.136-.907.409-1.206.272-.299.635-.448 1.088-.448.238 0 .47.033.698.099.24.07.51-.027.607-.257.094-.221-.01-.479-.24-.547a3.714 3.714 0 0 0-1.058-.152c-.81 0-1.442.219-1.9.658-.455.438-.683 1.05-.683 1.833 0 .807.196 1.426.588 1.857.395.43.965.645 1.711.645.293 0 .58-.021.859-.063ZM6.099 11.998c0 .543.105.952.314 1.226.21.275.523.412.94.412.836 0 1.254-.546 1.254-1.638 0-1.094-.415-1.64-1.247-1.64-.417 0-.732.138-.943.415-.212.274-.318.683-.318 1.225Zm5.61-.465c0 .11.09.2.2.2h.138c.332 0 .576-.055.734-.163.158-.109.237-.28.237-.512 0-.23-.082-.394-.244-.492-.16-.097-.409-.146-.747-.146h-.118a.2.2 0 0 0-.2.2v.913Z"
                              fill="#10A8E5"
                            ></path>
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M17.5 7h-11a5 5 0 0 0 0 10h11a5 5 0 0 0 0-10Zm-11-1.5a6.5 6.5 0 0 0 0 13h11a6.5 6.5 0 1 0 0-13h-11Z"
                              fill="#10A8E5"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <span
                        class="text-xs text-gray-800"
                        data-testid="campaigner-identity-verification-status"
                      >
                        Identitas terverifikasi
                      </span>
                    </div>
                  </a>
                </div>
                <button
                  data-testid="budget-plan"
                  class="mb-2 flex w-full justify-between rounded border border-mercury px-4 py-3 text-left  shadow-lg"
                >
                  <div class="flex items-center">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      class="mr-2"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4.952 6.204 15.5 3.15c1.5-.497 3.14.306 3.5 1.49l.883 2.139a3.392 3.392 0 0 0-1.133-.193H5.25c-.467 0-.912.094-1.316.264.264-.294.61-.522 1.018-.646Z"
                        fill="#10A8E5"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6 8.75A2.25 2.25 0 0 0 3.75 11v6.315A2.25 2.25 0 0 0 6 19.565h4.964a.75.75 0 1 1 0 1.5H6a3.75 3.75 0 0 1-3.75-3.75V11A3.75 3.75 0 0 1 6 7.25h12A3.75 3.75 0 0 1 21.75 11v2.717a.75.75 0 0 1-1.5 0V11A2.25 2.25 0 0 0 18 8.75H6Z"
                        fill="#6A6A6A"
                      ></path>
                      <path
                        d="M11.377 17.087A2.54 2.54 0 0 1 9 14.546 2.539 2.539 0 0 1 11.531 12c1.114 0 2.06.724 2.399 1.73-.93.27-2.553 1.69-2.553 3.357Z"
                        fill="#6A6A6A"
                      ></path>
                      <path
                        d="M15.07 16.935v.641h.283c.209 0 .34-.114.34-.324 0-.199-.075-.317-.403-.317h-.22ZM17.895 17.613c-.194 0-.376.14-.376.468 0 .228.123.453.376.453.2 0 .376-.162.376-.453 0-.284-.153-.468-.376-.468Z"
                        fill="#10A8E5"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M16.5 22a3.935 3.935 0 0 0 3.938-3.932 3.935 3.935 0 0 0-3.938-3.932 3.935 3.935 0 0 0-3.938 3.932A3.935 3.935 0 0 0 16.5 22Zm-1.755-2.984a.326.326 0 0 1-.326-.325v-1.808a.5.5 0 0 1 .5-.5h.427c.272 0 .402.018.517.062.302.115.492.383.492.767 0 .28-.134.585-.399.718v.007s.038.048.101.159l.254.452a.314.314 0 1 1-.551.302l-.384-.721h-.306v.562c0 .18-.146.325-.325.325Zm2.47.737a.322.322 0 0 1-.322-.322v-2.026c0-.158.128-.286.286-.286h.078a.21.21 0 0 1 .21.218h.007s.175-.262.58-.262c.522 0 .865.405.865.995 0 .6-.384.99-.894.99-.313 0-.488-.18-.488-.18h-.007s.007.066.007.162v.389a.322.322 0 0 1-.322.322Z"
                        fill="#10A8E5"
                      ></path>
                    </svg>
                    <span class="text-sm text-gray-900 font-semibold">Rincian penggunaan dana</span>
                  </div>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    class="mt-1.5"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6.389 2.389a1.327 1.327 0 0 1 1.876 0l8.673 8.673a1.326 1.326 0 0 1 0 1.876l-8.673 8.673a1.327 1.327 0 0 1-1.876-1.876L14.124 12 6.389 4.265a1.327 1.327 0 0 1 0-1.876Z"
                      fill="#6A6A6A"
                    ></path>
                  </svg>
                </button>
              </div>

              <hr class="inset-x-0 m-0 mx-auto h-2 max-w-480 border-0 bg-coal"></hr>

              <div class="jsx-2626428841 px-4 pb-4">
                <button
                  data-testid="budget-plan"
                  class="flex w-full justify-between border-mercury py-4 text-left"
                >
                  <div class="jsx-2626428841">
                    <h4
                      data-testid="latest-news-section-title"
                      class="m-0  text-gray-900 font-bold"
                    >
                      Cerita Penggalangan Dana
                    </h4>
                    <span class="mt-2 inline-block text-xs text-tundora">
                      08 Feb 2022
                    </span>
                  </div>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    class="mt-1.5"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6.389 2.389a1.327 1.327 0 0 1 1.876 0l8.673 8.673a1.326 1.326 0 0 1 0 1.876l-8.673 8.673a1.327 1.327 0 0 1-1.876-1.876L14.124 12 6.389 4.265a1.327 1.327 0 0 1 0-1.876Z"
                      fill="#6A6A6A"
                    ></path>
                  </svg>
                </button>
                <div class="jsx-2626428841 cd-story__container break-words bg-opacity ">
                  <div class="jsx-2626428841 cd-collapsible__content--collapsed">
                    <div class="jsx-2626428841 cd-collapsible__content">
                      <div class="jsx-2626428841 cd-story__content text-mineshaft80">
                        <p class="ql-align-justify">
                          Kasih sayang dan suasana kehangatan keluarga mungkin sering kita rasakan,
                          namun hal itu tentu sangat berbeda bagi anak-anak yatim dhuafa, mereka
                          yang sejak lahir terpaksa harus kehilangan sosok orangtua membuat mereka
                          tidak pernah merasakan bagaimana kasih sayang dan suasana kehangatan
                          ketika berada di rumah
                        </p>
                        <p class="ql-align-justify">
                          <br />
                        </p>
                        <p class="ql-align-justify">
                          Tak jarang juga anak-anak yatim dhuafa harus menanggung beban yang lebih
                          berat lagi karena terpaksa tidak bisa menggapai keinginan dan cita-citanya
                          dan harus bekerja demi bisa membantu memenuhi kebutuhan sehari-harinya
                        </p>
                        <p class="ql-align-justify">
                          <br />
                        </p>
                        <p class="ql-align-justify">
                          Oleh karena itu kami mengajak kepada Orang Baik untuk ikut memberikan
                          kebahagiaan kepada adik-adik yatim dhuafa supaya mereka bisa merasakan
                          kasih sayang melalui kepedulian kita
                        </p>
                        <p class="ql-align-justify">
                          <br />
                        </p>
                        <p class="ql-align-justify">
                          Selain itu, menyantuni anak-anak yatim dhuafa yang mengalami kekurangan
                          dan membutuhkan uluran bantuan kita akan mendapatkan pahala yang
                          berlipatganda oleh Allah SWT dan&nbsp;Allah SWT juga akan memberi rezeki
                          begitu luas kepada hamba-Nya yang mau berbagi, menyantuni, dan menyisihkan
                          sebagian rezekinya kepada orang yang membutuhkan.
                        </p>
                        <p class="ql-align-justify">
                          <br />
                        </p>
                        <p class="ql-align-justify">
                          "Kasihilah anak yatim, usaplah mukanya, dan berilah makan dari makananmu,
                          niscaya hatimu menjadi lunak dan kebutuhanmu akan terpenuhi.” (HR
                          Thobroni)
                        </p>
                        <p>
                          Sumber foto:&nbsp;
                          <a href="https://www.centurybank.com.np/saving-account/century-chhori-bachat-khata">
                            lin
                          </a>
                          k
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <Link href={''}>
                <button
                  data-testid="baca-selengkapnya-button"
                  class="text-cerulean50 text-sm font-light"
                  onClick={(e) => handleClick(e, "campaign/x/story")}
                >
                  Baca selengkapnya
                </button>
                </Link>
              </div>

              <hr class="inset-x-0 m-0 mx-auto h-2 max-w-480 border-0 bg-coal"></hr>

              <div id="latest-news" class="px-4">
                <hr class="my-0 border-t-0 bg-coal" />
                <Link href={''}>
                <button
                  data-testid="budget-plan"
                  class="flex w-full justify-between border-mercury py-4 text-left"
                  onClick={(e) => newsClick(e, "campaign/x/latest-news")}
                >
                  <div>
                    <div class="flex items-center">
                      <h4 data-testid="latest-news-section-title" class="m-0 text-gray-900 font-bold">
                        Kabar Terbaru
                      </h4>
                      <span class="ml-4 inline-block rounded-full bg-cerulean10 px-3 py-0.5 text-xs font-semibold text-cerulean50">
                        16
                      </span>
                    </div>
                    <div class="mt-2 flex items-center text-sm text-onyx">
                      <span className='text-xs font-light'>Terakhir update</span>
                      <div class="mx-2 h-1 w-1 rounded-full bg-gray-600"></div>
                      <span className='text-xs font-semibold'>25 Januari 2023</span>
                    </div>
                  </div>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    class="mt-1.5"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6.389 2.389a1.327 1.327 0 0 1 1.876 0l8.673 8.673a1.326 1.326 0 0 1 0 1.876l-8.673 8.673a1.327 1.327 0 0 1-1.876-1.876L14.124 12 6.389 4.265a1.327 1.327 0 0 1 0-1.876Z"
                      fill="#6A6A6A"
                    ></path>
                  </svg>
                </button>
                </Link>
              </div>
              <div id="disbursement" class="px-4">
                <hr class="my-0 border-b-0.5 bg-[#fafafa]" />
                <Link href={''}>
                <button
                  data-testid="budget-plan"
                  class="flex w-full justify-between border-mercury py-4 text-left"
                  onClick={(e) => danaClick(e, "campaign/x/pencairan-dana")}
                >
                  <div>
                    <div class="flex items-center">
                      <h4 data-testid="latest-news-section-title" class="m-0 text-gray-900 font-bold">
                        Pencairan Dana
                      </h4>
                      <span class="ml-4 inline-block rounded-full bg-cerulean10 px-3 py-0.5 text-xs font-semibold text-cerulean50">
                        16
                      </span>
                    </div>
                    <div class="mt-2 flex items-center text-sm text-onyx">
                      <span className='text-xs font-light'>Terakhir pencairan dana</span>
                      <div class="mx-2 h-1 w-1 rounded-full bg-gray-600"></div>
                      <span className='text-xs font-semibold'>30 Januari 2023</span>
                    </div>
                  </div>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    class="mt-1.5"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6.389 2.389a1.327 1.327 0 0 1 1.876 0l8.673 8.673a1.326 1.326 0 0 1 0 1.876l-8.673 8.673a1.327 1.327 0 0 1-1.876-1.876L14.124 12 6.389 4.265a1.327 1.327 0 0 1 0-1.876Z"
                      fill="#6A6A6A"
                    ></path>
                  </svg>
                </button>
                </Link>
              </div>
              
              <div class="px-4">
                <hr class="my-0 border-b-0.5 bg-[#fafafa]" />
                <button
                  data-testid="fundraiser"
                  class="flex w-full justify-between border-mercury py-4 text-left"
                >
                  <div class="flex items-center">
                    <h4 data-testid="latest-news-section-title" class="m-0 text-gray-900 font-bold">
                      Fundraiser
                    </h4>
                    <span class="ml-4 inline-block rounded-full bg-cerulean10 px-3 py-0.5 text-xs font-semibold text-cerulean50">
                      3
                    </span>
                  </div>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    class="mt-1.5"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6.389 2.389a1.327 1.327 0 0 1 1.876 0l8.673 8.673a1.326 1.326 0 0 1 0 1.876l-8.673 8.673a1.327 1.327 0 0 1-1.876-1.876L14.124 12 6.389 4.265a1.327 1.327 0 0 1 0-1.876Z"
                      fill="#6A6A6A"
                    ></path>
                  </svg>
                </button>
              </div>
              <div class="break break-words bg-white p-4 pt-0 ">
                <div id="donation">
                  <hr class="my-0 border-b-0.5 bg-[#fafafa]" />
                  <Link href={''}>
                  <button
                    data-testid="budget-plan"
                    class="flex w-full justify-between border-mercury py-4 text-left"
                    onClick={(e) => donorClick(e, "campaign/x/donors")}
                  >
                    <div class="flex items-center">
                      <h4 data-testid="latest-news-section-title" class="m-0 text-gray-900 font-bold">
                        Donasi
                      </h4>
                      <span class="ml-4 inline-block rounded-full bg-cerulean10 px-3 py-0.5 text-xs font-semibold text-cerulean50">
                        74605
                      </span>
                    </div>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      class="mt-1.5"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6.389 2.389a1.327 1.327 0 0 1 1.876 0l8.673 8.673a1.326 1.326 0 0 1 0 1.876l-8.673 8.673a1.327 1.327 0 0 1-1.876-1.876L14.124 12 6.389 4.265a1.327 1.327 0 0 1 0-1.876Z"
                        fill="#6A6A6A"
                      ></path>
                    </svg>
                  </button>
                  </Link>
                </div>
                <div class="mb-2 flex rounded bg-green-200 p-4">
                  <div>
                    <div
                      class="mr-3 rounded-full bg-coal relative"
                      style={{ width: '50px', height: '50px'}}
                    >
                      <Image
                        alt="Orang Baik"
                        srcset={adam}
                        src={adam}
                        width="50"
                        height="50"
                        decoding="async"
                        data-nimg="1"
                        class="w-full h-full rounded-full object-cover object-center"
                        loading="lazy"
                        style={{color: 'transparent'}}
                      />
                    </div>
                  </div>
                  <div class="ml-5 flex flex-1 flex-col">
                    <span class="text-sm text-gray-900 font-semibold">Orang Baik</span>
                    <span data-testid="donation-amounts" class="text-sm">
                      Berdonasi sebesar{' '}
                      <strong data-testid="total-donation" class="font-bold text-gray-900">
                        Rp15.000
                      </strong>
                    </span>
                    <span class="mt-1 text-xs">22 menit yang lalu</span>
                  </div>
                </div>
                <div class="mb-2 flex rounded bg-green-200 p-4">
                  <div>
                    <div
                      class="mr-3 rounded-full bg-coal relative"
                      style={{ width: '50px', height: '50px'}}
                    >
                      <Image
                        alt="Orang Baik"
                        srcset={adam}
                        src={adam}
                        width="50"
                        height="50"
                        decoding="async"
                        data-nimg="1"
                        class="w-full h-full rounded-full object-cover object-center"
                        loading="lazy"
                        style={{color: 'transparent'}}
                      />
                    </div>
                  </div>
                  <div class="ml-5 flex flex-1 flex-col">
                    <span class="text-sm text-gray-900 font-semibold">Orang Baik</span>
                    <span data-testid="donation-amounts" class="text-sm">
                      Berdonasi sebesar{' '}
                      <strong data-testid="total-donation" class="font-bold text-gray-900">
                        Rp15.000
                      </strong>
                    </span>
                    <span class="mt-1 text-xs">22 menit yang lalu</span>
                  </div>
                </div>
                <div class="mb-2 flex rounded bg-green-200 p-4">
                  <div>
                    <div
                      class="mr-3 rounded-full bg-coal relative"
                      style={{ width: '50px', height: '50px'}}
                    >
                     <Image
                        alt="Orang Baik"
                        srcset={adam}
                        src={adam}
                        width="50"
                        height="50"
                        decoding="async"
                        data-nimg="1"
                        class="w-full h-full rounded-full object-cover object-center"
                        loading="lazy"
                        style={{ color: 'transparent'}}
                      />
                    </div>
                  </div>
                  <div class="ml-5 flex flex-1 flex-col">
                    <span class="text-sm text-gray-900 font-semibold">Orang Baik</span>
                    <span data-testid="donation-amounts" class="text-sm">
                      Berdonasi sebesar{' '}
                      <strong data-testid="total-donation" class="font-bold text-gray-900">
                        Rp15.000
                      </strong>
                    </span>
                    <span class="mt-1 text-xs">22 menit yang lalu</span>
                  </div>
                </div>
              </div>

              <div class=" jhMGHw">
                <div id="navbar_home" class="style__NavigationMenuItem-sc-__sc-byevaw-1 iuFesm">
                  <div class="style__NavMenuIconContainer-sc-__sc-byevaw-2 dNJXHl">
                    <img
                      alt="home"
                      src="https://assets.kitabisa.cc/images/home/bottom-navigation/home_navbar_active.svg"
                      class="style__NavMenuIcon-sc-__sc-byevaw-3 bGlUUP"
                    />
                  </div>
                  <span class="style__NavText-sc-__sc-byevaw-4 jqTHXz">Donasi</span>
                </div>
                <div
                  id="navbar_galang-dana"
                  class="style__NavigationMenuItem-sc-__sc-byevaw-1 iuFesm"
                >
                  <div class="style__NavMenuIconContainer-sc-__sc-byevaw-2 dNJXHl">
                    <img
                      alt="galang-dana"
                      src="https://assets.kitabisa.cc/images/home/bottom-navigation/plus_navbar.svg"
                      class="style__NavMenuIcon-sc-__sc-byevaw-3 bGlUUP"
                    />
                  </div>
                  <span class="style__NavText-sc-__sc-byevaw-4 ksYxNl">Galang Dana</span>
                </div>
                <div
                  id="navbar_my-donations"
                  class="style__NavigationMenuItem-sc-__sc-byevaw-1 iuFesm"
                >
                  <div class="style__NavMenuIconContainer-sc-__sc-byevaw-2 dNJXHl">
                    <img
                      alt="my-donations"
                      src="https://assets.kitabisa.cc/images/home/bottom-navigation/donasi_navbar.svg"
                      class="style__NavMenuIcon-sc-__sc-byevaw-3 bGlUUP"
                    />
                  </div>
                  <span class="style__NavText-sc-__sc-byevaw-4 ksYxNl">Donasi Saya</span>
                </div>
                <div id="navbar_inbox" class="style__NavigationMenuItem-sc-__sc-byevaw-1 iuFesm">
                  <div class="style__NavMenuIconContainer-sc-__sc-byevaw-2 dNJXHl">
                    <img
                      alt="inbox"
                      src="https://assets.kitabisa.cc/images/home/bottom-navigation/inbox_navbar.svg"
                      class="style__NavMenuIcon-sc-__sc-byevaw-3 bGlUUP"
                    />
                  </div>
                  <span class="style__NavText-sc-__sc-byevaw-4 ksYxNl">Inbox</span>
                </div>
                <div id="navbar_account" class="style__NavigationMenuItem-sc-__sc-byevaw-1 iuFesm">
                  <div class="style__NavMenuIconContainer-sc-__sc-byevaw-2 dNJXHl">
                    <img
                      alt="account"
                      src="https://assets.kitabisa.cc/images/home/bottom-navigation/account_navbar.svg"
                      class="style__NavMenuIcon-sc-__sc-byevaw-3 bGlUUP"
                    />
                  </div>
                  <span class="style__NavText-sc-__sc-byevaw-4 ksYxNl">Akun</span>
                </div>
              </div>

              
            </div>
          </div>
        </div>
      </div>
      
    </main>
    {/* <Rincian /> */}
    </Fragment>
  )
}

export default Detail
