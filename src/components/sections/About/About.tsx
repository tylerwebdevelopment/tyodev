"use client";
import Image from "next/image";
import MemojiSmiling from "@/assets/memoji-smiling.png";
import { forwardRef } from "react";

const About = forwardRef<HTMLDivElement | null>((props, ref) => {
  return (
    <section
      ref={ref}
      id="about"
      className="max-w-2xl mx-auto py-16 px-8 text-center space-y-8"
    >
      <h1 className="text-lg tracking-widest uppercase font-thin text-text-muted">
        About Me
      </h1>
      <div className="flex flex-col items-center space-y-6">
        {/* Optional Memoji/Profile Image */}

        <div className="bg-surface ring-2 ring-primary-500/50 hover:ring-primary-500 transition-shadow duration-300 rounded-full shadow-xlshadow-primary-500/20 h-32 w-32 flex justify-center items-center overflow-hidden">
          <Image src={MemojiSmiling} alt="Memoji Smiling For About Section" />
        </div>

        <p className="text-text-main leading-7">
          I&apos;ve been<span className="text-primary-600"> passionate</span>{" "}
          about programming for over 12 years. I first fell in love with
          technology and computers when I was younger, and what started as a
          hobby has grown into something I take{" "}
          <span className="text-primary-600">serious</span> pride in. I love
          building things that are not just functional but also
          <span className="text-primary-600"> clean</span>,{" "}
          <span className="text-primary-600">intuitive</span>, and
          <span className="text-primary-600"> enjoyable</span> to use.
        </p>
        <p className="text-text-main leading-7">
          I&apos;m currently pursuing a Bachelor&apos;s in
          <span className="text-primary-600"> Computer Science </span>
          while starting my own web development business. Every project I work
          on is a chance to challenge myself, learn something new, and create
          something meaningful. Currently 24, living in{" "}
          <span className="text-primary-600">Cleburne, Texas</span>, I&apos;m
          excited to continue growing as a developer and share my work with the
          world.
        </p>
      </div>
    </section>
  );
});

About.displayName = "About";

export default About;
