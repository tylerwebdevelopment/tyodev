import Memoji from "@/assets/memoji.png";
import Image from "next/image";
const Hero = () => {
  return (
    <section className="relative w-full min-h-[85vh] bg-page-background overflow-hidden">
      {/* Grid Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
        linear-gradient(to right, #1d2229 1px, transparent 1px),
        linear-gradient(to bottom, #1d2229 1px, transparent 1px)
      `,
          backgroundSize: "32px 32px",
          WebkitMaskImage:
            "radial-gradient(ellipse 90% 70% at 50% 0%, black 70%, transparent 100%)",
          maskImage:
            "radial-gradient(ellipse 90% 70% at 50% 0%, black 70%, transparent 100%)",
        }}
      />

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-32 pb-20 text-center">
        <div className="p-5">
          <p>Hi! I&apos;m Tyler </p>
          <Image
            src={Memoji}
            className="w-45 h-45"
            alt="Memoji Looking over laptop"
          />
          <h1>Frontend Developer Building</h1>
          <h1>
            <span className="">Clean</span>, Interactive Web Experiences
          </h1>
          <p>
            I Build fast, modern web applications using React, Next.js, and
            thoughful UI Design
          </p>
        </div>
      </div>
    </section>
  );
};
export default Hero;
