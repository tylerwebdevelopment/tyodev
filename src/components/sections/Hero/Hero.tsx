import Memoji from "@/assets/memoji.png";
import Button from "@/components/ui";
import Image from "next/image";
import { CircleArrowRight } from "lucide-react";
const Hero = () => {
  return (
    <section className="relative w-full min-h-[65vh] bg-page-background overflow-hidden">
      {/* Grid Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
        linear-gradient(to right, #1d2229 1px, transparent 1px),
        linear-gradient(to bottom, #1d2229 1px, transparent 1px)
      `,
          backgroundSize: "32px 32px",
          WebkitMaskImage: `radial-gradient(ellipse 90% 60% at 50% 0%, black 70%, transparent 100%)`,

          maskImage:
            "radial-gradient(ellipse 90% 60% at 50% 0%, black 30%, transparent 100%)",
        }}
      />

      {/* Hero Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 pt-32 pb-20 text-center">
        <div className="space-y-3">
          <div className="p-5 max-w-md space-x-1 space-y-0.5 mx-auto">
            <div>
              <p className="text-md text-text-main relative bg-surface-elevated py-1 before:w-[25px] before:content-[''] before:bg-surface-elevated before:block before:absolute before:-bottom-[.8px] before:h-1 before:z-10 before:right-1/2 before:translate-x-1/2 border border-border-default rounded-full px-4 before:content-[''] before: max-w-fit mx-auto ">
                Hi I&apos;m{" "}
                <span className="font-bold text-primary-600">Tyler</span>{" "}
                <span className="emoji-wave">👋</span>
                <span className="fill-triangle border-triangle -z-10 inline-flex items-center justify-center absolute left-1/2 -translate-x-1/2 -bottom-[12.8px]"></span>
              </p>
            </div>
            <Image
              src={Memoji}
              className="w-40 h-40 mx-auto"
              alt="Memoji Looking over laptop"
              loading="eager"
            />
            <div>
              <div className="inline-flex items-center bg-surface-elevated rounded-full pr-4 pl-0.5 border border-border-default/20 py-0.5">
                <span className="before:content-[''] border border-border-default/30 before:block before:relative before:size-2 before:bg-success-500 before:border before:border-success-100 bg-surface/40 size-6.5 inline-flex justify-center items-center rounded-full before:rounded-full after:content-[''] after:size-4 after:bg-success-500/20 after:rounded-full after:absolute after:animate-caret-blink after:animation-duration-[3000ms]" />
                <p className="text-text-muted text-sm pl-2">
                  Available For Projects
                </p>
              </div>
            </div>
          </div>
          <div className="tracking-tight py-3">
            <h1 className="text-2xl font-bold">
              Full Stack Developer Building
            </h1>
            <h1 className="text-2xl font-bold">
              <span className="animated-gradient-text">Clean</span>, Interactive
              Web Experiences
            </h1>
            <p className="text-base mt-2 text-text-muted tracking-wider">
              I Build fast, modern web applications using React, Next.js, and
              thoughtful UI Design
            </p>
          </div>
          <div className="py-9">
            <Button
              variant={"default"}
              className="text-lg font-bold tracking-tightest"
              size={"lg"}
            >
              Lets Connect
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
