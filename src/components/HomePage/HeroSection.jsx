import React from "react";
import Image from "next/image";
export default function HeroSection({ heroHeader, heroImage }) {
  return (
    <div className="border-b-6 my-30 h-fit">
      {/* <!-- SVG Background --> */}
      <span class="[&>svg]:absolute [&>svg]:-z-10 [&>svg]:hidden [&>svg]:h-[560px] [&>svg]:w-full [&>svg]:lg:block">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          class="absolute top-[60px] hidden h-[580px] w-full opacity-20 transition-opacity duration-300 dark:opacity-0 lg:block"
        >
          <defs>
            <linearGradient id="sw-gradient-light" x1="0" x2="0" y1="1" y2="0">
              <stop stop-color="hsl(209, 92.2%, 92.1%)" offset="0%"></stop>
              <stop stop-color="hsl(209, 92.2%, 99.1%)" offset="100%"></stop>
            </linearGradient>
          </defs>
          <path
            fill="url(#sw-gradient-light)"
            d="M -0.664 3.46 C -0.664 3.46 405.288 15.475 461.728 21.285 C 601.037 35.625 672.268 76.086 701.056 97.646 C 756.056 138.838 797.267 216.257 857.745 245.156 C 885.704 258.516 980.334 280.547 1048.511 268.826 C 1121.622 256.256 1199.864 226.267 1214.176 220.176 C 1241.273 208.643 1280.201 191.509 1343.494 179.436 C 1434.325 162.111 1439.504 196.099 1439.503 183.204 C 1439.502 161.288 1440 0 1440 0 L 1360 0 C 1280 0 1120 0 960 0 C 800 0 640 0 480 0 C 320 0 160 0 80 0 L 0 0 L -0.664 3.46 Z"
          ></path>
        </svg>
        <svg
          data-name="Layer 2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          class="absolute top-[60px] hidden h-[580px] w-full opacity-30 transition-opacity duration-300 dark:opacity-100 lg:block"
        >
          <defs>
            <linearGradient id="sw-gradient-dark" x1="0" x2="0" y1="1" y2="0">
              <stop stop-color="hsl(240, 4%, 28%)" offset="0%"></stop>
              <stop stop-color="hsl(0, 0%, 15%)" offset="100%"></stop>
            </linearGradient>
          </defs>
          <path
            fill="url(#sw-gradient-dark)"
            d="M -0.664 3.46 C -0.664 3.46 405.288 15.475 461.728 21.285 C 601.037 35.625 672.268 76.086 701.056 97.646 C 756.056 138.838 797.267 216.257 857.745 245.156 C 885.704 258.516 980.334 280.547 1048.511 268.826 C 1121.622 256.256 1199.864 226.267 1214.176 220.176 C 1241.273 208.643 1280.201 191.509 1343.494 179.436 C 1434.325 162.111 1439.504 196.099 1439.503 183.204 C 1439.502 161.288 1440 0 1440 0 L 1360 0 C 1280 0 1120 0 960 0 C 800 0 640 0 480 0 C 320 0 160 0 80 0 L 0 0 L -0.664 3.46 Z"
          ></path>
        </svg>
      </span>
      {/* <!-- SVG Background --> */}

      {/* <!-- Jumbotron --> */}
      <div class="px-6 py-8 text-center md:px-12 lg:my-12 lg:text-left">
        <div class="w-100 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
          <div class="grid items-center gap-12 lg:grid-cols-2">
            <div class="mt-8 flex-wrap lg:mt-0">
              <h1 class="z-10 mb-16 text-5xl font-bold tracking-tight md:text-5xl 2xl:text-7xl">
                {heroHeader}
              </h1>
              <a
                class="mb-2 inline-block rounded bg-primary px-12 pb-3.5 pt-4 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] md:mb-0 md:mr-2"
                data-te-ripple-init
                data-te-ripple-color="light"
                href="#!"
                role="button"
              >
                Get started
              </a>
              <a
                class="inline-block rounded px-12 pb-3.5 pt-4 text-sm font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 dark:hover:bg-neutral-700 dark:hover:bg-opacity-60"
                data-te-ripple-init
                data-te-ripple-color="light"
                href="#!"
                role="button"
              >
                Learn more
              </a>
            </div>
            <div class="mx-auto mb-12 max-h-fit lg:mb-0">
              <Image
                src={`https:${heroImage}`}
                class=" rounded-lg opacity-70 shadow-lg dark:shadow-black/20"
                alt=""
                width={600}
                height={300}
              />
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Jumbotron --> */}
    </div>
  );
}
