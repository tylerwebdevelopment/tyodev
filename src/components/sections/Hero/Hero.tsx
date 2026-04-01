import { HeroMobileSvg, HeroDesktopComponents } from "@/components/custom/svg";
import LineArrowDown from "@/components/custom/svg/LineArrowDown";
import Button from "@/components/ui";
import { ArrowDownCircle, ArrowRight, Check, Send } from "lucide-react";

const heroCardli = [
  "Custom Web Development",
  "Mobile First Design",
  "Modern UI/UX Design Practices",
  "Full Stack Applications",
  "Custom Components and Features",
  "Performance and Optimization",
];

const Hero = () => {
  return (
    <div className="min-h-screen w-full z-10 relative">
      {/* Violet Storm Background with Top Glow */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(37, 99, 239, 0.25), transparent 90%)",
        }}
      />
      {/* Your Content/Components */}
      <section className="px-4 relative z-60 sm:px-0 sm:h-screen max-w-[1532px] min-[1532px]:max-w-[1532px] min-[1532px]:mx-auto overflow-hidden sm:bg-primary-200 hero-section-gradient z-50 py-4 sm:py-0">
        {/* Mobile View */}
        <div className="space-y-8 relative sm:bg-primary-300 lg:grid lg:grid-cols-2">
          <div className="block sm:hidden max-w-1/2 w-full mx-auto bg-linear-to-br md:order-first from-0% to-90% from-primary-400 to-primary-200 shadow-accent shadow-xl p-4 rounded-xl">
            <HeroMobileSvg className="text-primary-500 w-full" />
          </div>
          <div className="hidden sm:block sm:w-full lg:order-last lg:place-content-center lg:-translate-x-60 w-full z-10 lg:w-screen overflow-hidden">
            <HeroDesktopComponents className="text-primary-600 w-screen lg:w-screen sm:max-w-[1024px]" />
          </div>

          <div className="sm:absolute z-50 lg:flex lg:flex-col xl:gap-0 sm:grid xl:translate-y-3 xl:translate-x-5 sm:gap-2 sm:px-2 lg:relative lg:order-first sm:items-center lg:gap-3 lg:translate-y-0 sm:grid-cols-2 sm:w-full sm:bottom-0 sm:translate-y-4/6 sm:justify-items-center">
            {/* First Main Card */}
            <div className="flex flex-col space-y-2 max-w-md lg:max-w-md xl:border-b-0 xl:rounded-tr-lg xl:rounded-tl-lg xl:z-50 xl:shadow-none xl:max-w-xl xl:rounded-none xl:translate-y-0 lg:space-y-0 lg:py-5 lg:px-10 mx-auto xl:mx-0 gap-2 sm:gap-6 lg:mr-auto lg:ml-5 lg:mt-4 lg:translate-y-10 lg:translate-x-0 sm:max-w-sm sm:bg-surface sm:py-4 sm:rounded-xl sm:border-border sm:border sm:shadow-xl items-center text-center">
              <h1 className="font-heading text-hero text-foreground/75 font-bold tracking-tightest">
                <span className="text-primary-500/75">Modern</span> Websites
                that grow your business
              </h1>
              <p className="text-muted-foreground text-md">
                I create custom, responsive web experiences designed to attract
                more customers, boost engagement, and reflect your brand
                professionally.
              </p>
              <div className="flex flex-col xl:pb-2 sm:flex-row sm:gap-4 gap-3 mt-3 sm:mt-2">
                <Button size="sm" className="sm:rounded-full lg:rounded-lg">
                  View Projects <ArrowRight />
                </Button>
                <Button
                  size="sm"
                  className="sm:rounded-full lg:rounded-lg"
                  variant="secondary"
                >
                  Contact <Send />
                </Button>
              </div>
            </div>
            {/* Second Card */}
            <div className="hidden sm:flex sm:flex-col xl:rounded-none xl:bg-surface-muted xl:border-t-2 xl:pt-5 sm:gap-3 lg:max-w-xl xl:rounded-br-lg xl:rounded-bl-lg lg:ml-auto xl:ml-0 sm:order-last sm:max-w-sm sm:w-full sm:h-full lg:translate-x-80 lg:translate-y-10 xl:translate-x-0 xl:translate-y-0 sm:bg-surface sm:py-4 px-4 sm:rounded-xl sm:border-border sm:border sm:shadow-xl">
              <h1 className="text-xl font-bold text-hero font-heading text-foreground/75 tracking-wide text-center">
                Built For Your{" "}
                <span className="text-primary-500/75">Business</span>
              </h1>
              <ul className="lg:mx-auto lg:h-full lg:py-4 lg:w-full">
                <div className="flex flex-col gap-4 lg:grid xl:flex xl:pt-1 xl:place-items-start xl:gap-6 lg:h-full lg:grid-cols-2 lg:max-w-xl lg:w-fit lg:mx-auto lg:items-center">
                  {heroCardli.map((k, i) => (
                    <div key={i}>
                      <li className="flex items-center lg:text-sm gap-2">
                        <Check className="size-4 text-success" />
                        <p>{k}</p>
                      </li>
                    </div>
                  ))}
                </div>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Hero;
