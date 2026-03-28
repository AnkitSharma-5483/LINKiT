"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Movingvideo() {
  const trackRef = useRef(null);
  const velocityRef = useRef(0);
  const yRef = useRef(0);
  const requestRef = useRef(null);

  const cards = [
    {
      src: "https://i.pinimg.com/originals/9a/50/1d/9a501d15dc1ab967459aa653f887648b.gif",
      rounded: "rounded-[15%]",
    },
    {
      src: "https://i.pinimg.com/originals/02/18/11/0218110c161e73224dbba67222bbb97d.gif",
      rounded: "rounded-[15%]",
    },
    {
      src: "https://i.pinimg.com/originals/99/a9/47/99a94752829c86d6eeb5f42e5096758f.gif",
      rounded: "rounded-[15%]",
    },
    {
      src: "https://i.pinimg.com/originals/37/80/58/37805829459705706ff0af744ab3fbc0.gif",
      rounded: "rounded-[15%]",
    },
    {
      src: "https://i.pinimg.com/originals/9f/6f/65/9f6f65e43ab187719f14d2ad51a9f042.gif",
      rounded: "rounded-[15%]",
    },
    {
      src: "https://i.pinimg.com/originals/d1/f4/8c/d1f48c464a7056ee7b01595e9c670f07.gif",
      rounded: "rounded-[15%]",
    },
  ];

  useEffect(() => {
    const track = trackRef.current;
    const totalHeight = track.scrollHeight / 2;

    const lerp = (start, end, amt) => start + (end - start) * amt;

    const baseSpeed = 6; // ⬆️ Increased from 2 to 6 for faster upward motion

    const animate = () => {
      velocityRef.current *= 0.9; // slightly less damping for smoother acceleration
      yRef.current = lerp(
        yRef.current,
        yRef.current - baseSpeed - velocityRef.current,
        0.25 // slightly snappier interpolation
      );

      // ensure continuous looping from top (0)
      yRef.current = gsap.utils.wrap(-totalHeight, 0, yRef.current);

      // start animation from top (no offset)
      track.style.transform = `translateY(${yRef.current}px)`;

      requestRef.current = requestAnimationFrame(animate);
    };

    // start immediately at top position (0)
    yRef.current = 0;
    track.style.transform = "translateY(0px)";
    animate();

    const handleScroll = (e) => {
      velocityRef.current += e.deltaY * 0.1; // ⬆️ increased sensitivity to scroll
      velocityRef.current = Math.max(Math.min(velocityRef.current, 20), -20);
    };

    window.addEventListener("wheel", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("wheel", handleScroll);
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <div className="overflow-hidden w-full h-[588px] sm:h-200 lg:h-[1040px] flex justify-center items-start">
      <div ref={trackRef} className="flex flex-col gap-4">
        {[...cards, ...cards].map((card, i) => (
          <div key={i} className="flex">
            <a
              href="#"
              className={`bg-lime-300 h-65 w-65 sm:h-56 sm:w-56 md:h-73 md:w-73 lg:h-105 lg:w-105 xl:h-150 xl:w-150 ${card.rounded} shadow transition overflow-hidden`}
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
