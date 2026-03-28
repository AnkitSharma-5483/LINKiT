"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function MovingCards() {
  const trackRef = useRef(null);
  const velocityRef = useRef(0);
  const xRef = useRef(0);
  const requestRef = useRef(null);

  const cards = [
    {
      src: "https://cdn.prod.website-files.com/666255f7f2126f4e8cec6f8f/66634cb2449d48431e937786_funkynutmeg.webp",
      rounded: "rounded-full",
      width: "w-2xs",
    },
    {
      src: "https://cdn.prod.website-files.com/666255f7f2126f4e8cec6f8f/66634cb1449d48431e937716_laclippers.webp",
      rounded: "rounded-[15%]",
      width: "w-2xs",
    },
    {
      src: "https://cdn.prod.website-files.com/666255f7f2126f4e8cec6f8f/66634cb2449d48431e9377da_tonyhawk.webp",
      rounded: "rounded-[60px]",
      width: "w-xl",
    },
    {
      src: "https://cdn.prod.website-files.com/666255f7f2126f4e8cec6f8f/66634cb1449d48431e9376d8_pharrell.webp",
      rounded: "rounded-full",
      width: "w-2xs",
    },
    {
      src: "https://cdn.prod.website-files.com/666255f7f2126f4e8cec6f8f/66634cb2449d48431e9377ba_selena-gomez.webp",
      rounded: "rounded-[15%]",
      width: "w-2xs",
    },
  ];

  useEffect(() => {
    const track = trackRef.current;
    const totalWidth = track.scrollWidth / 2;

    const lerp = (start, end, amt) => start + (end - start) * amt;

    const baseSpeed = 3; // adjust this to make it faster

    const animate = () => {
      velocityRef.current *= 0.92;

      // smooth movement using lerp, higher factor for faster motion
      xRef.current = lerp(
        xRef.current,
        xRef.current - baseSpeed - velocityRef.current,
        0.2
      );

      xRef.current = gsap.utils.wrap(-totalWidth, 0, xRef.current);

      track.style.transform = `translateX(${xRef.current}px)`;
      requestRef.current = requestAnimationFrame(animate);
    };

    animate();

    const handleScroll = (e) => {
      velocityRef.current += e.deltaY * 0.05; // increase sensitivity for scroll
      velocityRef.current = Math.max(Math.min(velocityRef.current, 10), -10);
    };

    window.addEventListener("wheel", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("wheel", handleScroll);
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  // return (
  //   <div className="overflow-hidden w-full h-100 flex items-center">
  //     <div ref={trackRef} className="flex gap-4 whitespace-nowrap">
  //       {[...cards, ...cards].map((card, i) => (
  //         <div key={i} className={`flex ${card.width}`}>
  //           <a
  //             href="#"
  //             className={`bg-purple-300 h-100 ${card.rounded} shadow transition flex-1 overflow-hidden`}
  //           >
  //             <img
  //               src={card.src}
  //               alt={`card-${i}`}
  //               className="w-full h-full object-cover scale-100"
  //             />
  //           </a>
  //         </div>
  //       ))}
  //     </div>
  //   </div>
  // );



  // there is a error here which is about the card which is jumpstart after some time **fix it
  return (
    <div className="overflow-hidden w-full h-[160px] sm:h-[200px] lg:h-100 flex items-center">
      <div ref={trackRef} className="flex gap-2 sm:gap-3 lg:gap-4 whitespace-nowrap">
        {[...cards, ...cards].map((card, i) => (
          <div key={i} className="flex w-[120px] sm:w-[160px] lg:w-2xs">
            <a
              href="#"
              className={`bg-purple-300 h-[140px] sm:h-[180px] lg:h-100 ${card.rounded} shadow transition flex-1 overflow-hidden`}
            >
              <img
                src={card.src}
                alt={`card-${i}`}
                className="w-full h-full object-cover"
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );

}
