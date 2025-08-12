// AchievementsSection.jsx
"use client";
import React, { useEffect, useRef, useState } from "react";

const achievementsList = [
  { metric: "Projects", value: "10", postfix: "+", prefix: "~" },
  { metric: "Certifications", value: "3" },
  { metric: "Years of Experience", value: "3", postfix: "+"},
];

// Simple hook to detect when an element is on-screen
function useOnScreen(ref, rootMargin = "0px") {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsIntersecting(entry.isIntersecting),
      { rootMargin }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, rootMargin]);

  return isIntersecting;
}

// Lightweight animated number (requestAnimationFrame)
const AnimatedNumber = ({ value = 0, duration = 1500, start = false, className = "" }) => {
  const target = Number(String(value).replace(/,/g, "")) || 0;
  const [display, setDisplay] = useState(0);
  const rafRef = useRef(null);
  const startRef = useRef(null);

  useEffect(() => {
    if (!start) return;

    const easeOut = (t) => 1 - Math.pow(1 - t, 3); // nice easing
    const step = (timestamp) => {
      if (!startRef.current) startRef.current = timestamp;
      const elapsed = timestamp - startRef.current;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOut(progress);
      const current = Math.floor(eased * target);
      setDisplay(current);
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step);
      } else {
        setDisplay(target);
      }
    };

    rafRef.current = requestAnimationFrame(step);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      startRef.current = null;
    };
  }, [start, target, duration]);

  const formatted = new Intl.NumberFormat("en-US").format(display);
  return <span className={className}>{formatted}</span>;
};

export default function AchievementsSection() {
  const containerRef = useRef(null);
  // start when 30% visible; you can tweak rootMargin instead
  const inView = useOnScreen(containerRef, "-30%");

  return (
    <section ref={containerRef} className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-8 sm:px-16 flex flex-col sm:flex-row items-center justify-between">
        {achievementsList.map((achievement, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
          >
            <h2 className="text-white text-3xl md:text-4xl font-bold flex items-center">
              {achievement.prefix}
              <AnimatedNumber
                value={achievement.value}
                start={inView}
                duration={1400 + index * 250}
                className="mx-1 text-white text-3xl md:text-4xl font-bold"
              />
              {achievement.postfix}
            </h2>
            <p className="text-[#ADB7BE] text-base mt-1">{achievement.metric}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
