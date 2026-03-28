import Link from "next/link";
import React from "react";
import { Copyright } from "lucide-react";
import { handleIconLoadError } from "@/lib/functions/iconLoad";
import { SiCodepen, SiFrontendmentor, SiGithub } from "react-icons/si";
import { Logo } from "@/components/custom";

const Footer = () => {
  const socialLinks = [
    {
      icon: <SiFrontendmentor className="size-6" />,
      href: "https://www.frontendmentor.io/profile/tylerwebdevelopment",
      label: "Frontend Mentor",
    },
    {
      icon: <SiGithub className="size-6" />,
      href: "https://github.com/tylerwebdevelopment",
      label: "Github",
    },
    {
      icon: <SiCodepen className="size-6" />,
      href: "https://codepen.io/tylerwebdevelopment",
      label: "Codepen",
    },
  ];
  const CurrentYear = new Date().getFullYear();

  return (
    <footer className="w-full pt-8 pb-4 space-y-8 px-8 sm:space-y-12 flex flex-col gap-4 bg-background border-t z-10 border-border">
      {/* top */}
      <div className="flex flex-col w-full gap-4 justify-center items-center">
        <Logo className="h-15 max-h-15 text-primary-500" />
        <p className="text-muted-foreground text-md sm:text-lg! sm:max-w-md text-center">
          Building clean, modern web experiences.
        </p>
      </div>
      {/* Middle */}
      <div className="flex flex-col sm:flex-row sm:justify-around sm:max-w-xl sm:w-full mx-auto gap-12 max-w-fit">
        {socialLinks.map((link, i) => (
          <div key={i} className="text-foreground/75">
            <Link href={link.href} className="flex flex-col gap-1.5 items-center hover:text-primary-600 transition-all duration-300 hover:underline underline-offset-2">
              <span>{link.icon}</span>
              {link.label}
            </Link>
          </div>
        ))}
      </div>
      {/* Bottom(Break Grid for copyright) */}
      <div className="flex flex-col w-full justify-center items-center">
        <p className="text-muted-foreground text-xs! text-center">
          Built with Next.js, Tailwind, Motion & Resend
        </p>
        <p className="inline-flex gap-1 text-muted-foreground text-xs! items-center">
          <Copyright className="size-2.5" />
          {CurrentYear ? CurrentYear : "2026"} TyoDev All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
