"use client";
import React from "react";

export default function PlayLogo({ className = "inline-flex items-center gap-2 text-white h-6 sm:h-6 xl:h-10 w-28 sm:w-28 xl:w-40" }){
  return (
    <a
      href="https://play.google.com/store/apps/details?id=ee.linktr.admin&hl=en_US"
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        className="m-3 h-5 sm:h-5 xl:h-10 w-5 sm:w-5 xl:w-10"
      >
        <linearGradient id="a" x1="47.617" x2="151.189" y1="247.989" y2="344.212" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#00a0ff" />
          <stop offset=".26" stopColor="#00beff" />
          <stop offset=".51" stopColor="#00d2ff" />
          <stop offset=".76" stopColor="#00dfff" />
          <stop offset="1" stopColor="#00e3ff" />
        </linearGradient>
        <linearGradient id="b" x1="123.396" x2="230.836" y1="161.131" y2="270.404" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#ffe000" />
          <stop offset=".41" stopColor="#ffbd00" />
          <stop offset=".78" stopColor="#ffa500" />
          <stop offset="1" stopColor="#ff9c00" />
        </linearGradient>
        <linearGradient id="c" x1="84.918" x2="197.513" y1="125.666" y2="233.066" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#ff3a44" />
          <stop offset="1" stopColor="#c31162" />
        </linearGradient>
        <linearGradient id="d" x1="28.725" x2="135.96" y1="280.002" y2="389.384" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#32a071" />
          <stop offset=".48" stopColor="#15cf74" />
          <stop offset="1" stopColor="#00f076" />
        </linearGradient>
        <path
          fill="url(#a)"
          d="M47.617 25.632C44.832 28.383 43 33.395 43 39.574V472.42c0 6.178 1.832 11.189 4.617 13.942l.686.596 218.21-218.21v-.596L48.303 25.037z"
        />
        <path
          fill="url(#b)"
          d="M358.9 306.668 266.513 255v-.596l92.387-51.668.286.286 109.108 62.449c32.229 18.372 32.229 48.436 0 66.809l-109.394 61.863z"
        />
        <path
          fill="url(#c)"
          d="m358.9 306.668-92.387-52.264L48.303 486.962c10.373 9.495 25.174 10.078 43.264-.894L358.9 306.668z"
        />
        <path
          fill="url(#d)"
          d="M358.9 203.722 91.567 25.037C73.477 13.97 58.676 14.554 48.303 24.05L266.513 254.99l92.387-51.268z"
        />
      </svg>
      <div className="text-left">
        <p className="xl:text-[10px] text-[5px] sm:text-[5px] leading-none">GET IT ON</p>
        <p className="xl:text-[20px] text-[10px] sm:text-[10px] font-semibold xl:-mt-1 mt-0.3 sm:mt-0.3">Google Play</p>
      </div>
    </a>
  );
};

