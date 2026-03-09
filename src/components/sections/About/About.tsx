import Image from "next/image";
import MemojiWaving from "@/assets/memoji-waving.png";

const About = () => {
  return (
    <section className="max-w-2xl mx-auto py-16 px-4 text-center space-y-6">
      <h1 className="text-lg tracking-widest uppercase font-thin text-text-muted">
        About Me
      </h1>
      <div className="flex flex-col items-center space-y-4">
        {/* Optional Memoji/Profile Image */}

        <Image src={MemojiWaving} alt="Memoji Waving For About Section" className="w-32 h-32 rounded-full shadow-md" />

        <p className="text-text-main leading-7">
          I&apos;ve been passionate about programming for over 12 years. I first fell
          in love with technology and computers when I was younger, and what
          started as a hobby has grown into something I take serious pride in. I
          love building things that are not just functional but also clean,
          intuitive, and enjoyable to use.
        </p>
        <p className="text-text-main leading-7">
          I&apos;m currently pursuing a Bachelor&apos;s in Computer Science while starting
          my own web development business. Every project I work on is a chance
          to challenge myself, learn something new, and create something
          meaningful. Currently 24, living in Cleburne, Texas, I&apos;m excited to continue
          growing as a developer and share my work with the world.
        </p>
      </div>
    </section>
  );
};

export default About;
