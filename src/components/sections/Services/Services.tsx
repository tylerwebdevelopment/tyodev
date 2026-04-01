import {
  Braces,
  ChevronsLeftRightEllipsis,
  RefreshCw,
  Smartphone,
} from "lucide-react";
import React from "react";

const cardComponents = [
  {
    title: "Web Development",
    icon: <Braces className="size-15 mx-auto" strokeWidth={1} />,
    footer:
      "Tailored websites built to match your business goals and provide a unique, professional online presence.",
  },
  {
    title: "Responsive Design",
    icon: <Smartphone className="size-15 mx-auto" strokeWidth={1} />,
    footer:
      "Fully optimized websites that look and perform flawlessly across mobile, tablet, and desktop devices.",
  },
  {
    title: "Full Redesign",
    icon: <RefreshCw className="size-15 mx-auto" strokeWidth={1} />,
    footer:
      "Transform outdated websites into modern, high-performing experiences that better represent your business.",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen w-full z-10 relative">
      {/*  Diagonal Cross Grid Background */}
      <div
        className="absolute inset-0 -z-10 opacity-35"
        style={{
          backgroundImage: `
        linear-gradient(45deg, transparent 49%, var(--color-border) 49%, var(--color-border) 51%, transparent 51%),
        linear-gradient(-45deg, transparent 49%, var(--color-border) 49%, var(--color-border) 51%, transparent 51%)
      `,
          backgroundSize: "40px 40px",
        }}
      />
      {/* Your Content/Components */}
      <section className="sm:space-y-16 space-y-8 py-32">
        <h2 className="text-foreground/75 tracking-tightest max-w-xs sm:max-w-lg mx-auto font-heading text-center text-2xl font-bold">
          Services Designed For Your Business
        </h2>
        <div className="px-4 grid sm:grid-cols-3 grid-cols-1 gap-8 items-stretch">
          {cardComponents.map((card, i) => (
            <div
              className="bg-surface hover:border-primary-500 hover:drop-shadow-xl transition-shadows duration-300 text-center flex mx-auto flex-col max-w-xs border h-full gap-4 border-border rounded-lg py-4 px-4"
              key={i}
            >
              <span className="w-full text-primary-500 pb-4 pt-4">
                {card.icon}
              </span>

              {/* THIS is the important fix */}
              <div className="flex flex-col gap-2 h-full">
                <h3 className="font-bold tracking-tightest text-center font-heading text-foreground/75">
                  {card.title}
                </h3>

                <p className="text-sm leading-5 text-muted-foreground mt-2 grow">
                  {card.footer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
