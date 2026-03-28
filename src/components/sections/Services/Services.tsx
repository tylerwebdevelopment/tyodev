import { Braces, ChevronsLeftRightEllipsis, RefreshCw, Smartphone } from "lucide-react";
import React from "react";

const cardComponents = [
  {
    title: "Custom Web Development",
    icon: (
      <Braces className="size-15 mx-auto" strokeWidth={1} />
    ),
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
    <section className="space-y-10 py-20">
      <h1 className="text-foreground/75 tracking-tightest max-w-xs mx-auto font-heading text-center text-2xl font-bold">
        Services Designed For Your Business
      </h1>
      <div className="px-4 flex flex-col sm:grid sm:grid-cols-3 items-center gap-6">
        {cardComponents.map((card, i) => (
          <div
            className="bg-surface max-w-xs border h-full border-border rounded-lg py-4 px-4"
            key={i}
          >
            <span className="w-full text-primary-500">{card.icon}</span>
            <div className="flex flex-col">
              <div>
                <h3 className="text-lg font-bold tracking-tightest text-center font-heading text-foreground/75">
                  {card.title}
                </h3>
              </div>
              <div className="text-sm leading-5 w-full text-muted-foreground">
                <p>{card.footer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
