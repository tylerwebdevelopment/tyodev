"use client";
import { useContext, useEffect, useRef } from "react";
import { Projects, Hero, About, Contact } from "@/components/sections/";
import { ScrollContext } from "@/lib/context/ScrollContext";

export const HomePage = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const { setScrollCallbacks, setActive } = useContext(ScrollContext);

  useEffect(() => {
    if (!aboutRef?.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive?.("/#about");
          } else {
            if (window.location.pathname === "/") setActive?.("/");
          }
        });
      },
      {
        threshold: .9,
      },
    );
    observer.observe(aboutRef.current);

    return () => observer.disconnect();
  }, [aboutRef]);

  useEffect(() => {
    if (!setScrollCallbacks) return;
    setScrollCallbacks((prev) => ({
      ...prev,
      ScrollToAbout: () => {
        aboutRef.current?.scrollIntoView({ behavior: "smooth" });
      },
    }));
  }, [aboutRef, setScrollCallbacks]);
  return (
    <>
      <Hero />
      <Projects />
      <About ref={aboutRef} />
      <Contact />
    </>
  );
};
export default HomePage;
