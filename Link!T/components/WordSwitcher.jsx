"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function WordSwitcher() {
  const words = ["creators", "influencers", "small businesses", "athletes", "models", "monetizers", "health educators", "streamers", "vloggers", "fitness coaches", "ecommerce sellers", "retailers", "products", "wellness leaders", "musicians", "bands", "podcasters", "fashion designers", "culture creators", "merch sellers", "writers", "DJs", "creators", "influencers", "small businesses"];
  const wordRefs = useRef([]);

  useEffect(() => {
    // Hide all except the first word
    gsap.set(wordRefs.current.slice(1), { opacity: 0 });

    const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });

    words.forEach((_, i) => {
      const next = wordRefs.current[i + 1] || wordRefs.current[0];
      tl.to(wordRefs.current[i], {
        opacity: 0,
        duration: 0.6,
        delay: 1.5,
        ease: "power2.out",
      });
      tl.to(next, {
        opacity: 1,
        duration: 0.6,
        ease: "power2.in",
      }, "<"); // "<" = start at same time as previous ends
    });

    return () => tl.kill(); // Cleanup on unmount
  }, []);

  return (
    <div className="text-lg sm:text-3xl lg:text-5xl font-extrabold gap-2 justify-center mt-10">
      <span className="text-center">The only link in bio trusted by 70M+</span>
      <div className=" text-sky-600 relative w-[18ch]">
        {words.map((word, i) => (
          <span
            key={i}
            ref={(el) => (wordRefs.current[i] = el)}
            className="absolute left-0 top-0"
          >
            {word}
          </span>
        ))}
      </div>
    </div>
  );
}
