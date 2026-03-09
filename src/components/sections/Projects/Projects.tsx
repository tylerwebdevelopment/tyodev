"use client";
import { BrandCircle } from "@/components/custom";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiBetterauth,
  SiPrisma,
} from "react-icons/si";

const Projects = () => {
  return (
    <section className="max-w-md px-4 sm:px-0 pt-8 z-50 pb-10 space-y-6 mx-auto">
      <h1 className="text-lg tracking-widest uppercase font-thin text-text-muted text-center">
        Upcoming Projects
      </h1>

      <div
        className="rounded-lg relative space-y-4 drop-shadow-2xl hover:shadow-[0_0_15px_rgba(16,185,129,0.15)]
transition-shadow duration-300 drop-shadow-emerald-300/10 w-full overflow-hidden border-gradient-before bg-border-default"
      >
        {/* <div className="inline-flex gap-1">
          <span className="before:content-[''] before:block before:size-4 before:bg-destructive-600 before:rounded-full"></span>
          <span className="before:content-[''] before:block before:size-4 before:bg-amber-500 before:rounded-full"></span>
          <span className="before:content-[''] before:block before:size-4 before:bg-success-600 before:rounded-full"></span>
        </div> */}

        <div className="p-[2px]">
          <div className="p-4 rounded-lg space-y-4 relative bg-surface-elevated">
            <div className="flex justify-center items-center flex-col gap-1.5">
              <h3 className="text-2xl text-center font-bold tracking-widest">
                <span className="text-emerald-200">Walkly</span>
                <span className="text-white/85">.fit</span>
              </h3>
              <div className="">
                <div className="flex items-center gap-2 text-xs px-2 py-1 rounded-md bg-amber-500/10 text-amber-400">
                  <span className="size-2 rounded-full bg-amber-400 animate-pulse"></span>
                  Under Construction
                </div>
              </div>
            </div>
            <div className="max-w-sm mx-auto">
              <p className="text-text-muted text-center text-sm leading-7">
                <span className="text-emerald-200">Walkly</span>
                <span className="text-white/85">.fit</span> combines social
                media and fitness in one platform. Track your steps, compete
                with friends in fun challenges, and share photos and updates
                from your walks to stay motivated and connected
              </p>
              <div className="mt-8">
                <p className="text-center text-text-main/90 tracking-widest py-4 text-lg font-bold">
                  Built With
                </p>
                <div className="inline-flex items-center w-full justify-center gap-5">
                  <BrandCircle
                    icon={SiReact}
                    brandColor="var(--react)"
                    tooltipContent="React"
                  />
                  <BrandCircle
                    icon={SiNextdotjs}
                    brandColor="var(--next)"
                    tooltipContent="Next.js"
                  />
                  <BrandCircle
                    icon={SiTailwindcss}
                    brandColor="var(--tailwind)"
                    tooltipContent="Tailwind Css"
                  />
                  <BrandCircle
                    icon={SiBetterauth}
                    brandColor="var(--betterAuth)"
                    tooltipContent="Better Auth"
                  />
                  <BrandCircle
                    icon={SiPrisma}
                    brandColor="var(--prisma)"
                    tooltipContent="Prisma"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
