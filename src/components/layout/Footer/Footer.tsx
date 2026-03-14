import Link from "next/link";
import React from "react";
import { Copyright } from "lucide-react";
import { handleIconLoadError } from "@/lib/functions/iconLoad";
import { SiCodepen, SiFrontendmentor, SiGithub } from "react-icons/si";

const Footer = () => {
  const socialLinks = [
    {
      icon: <SiFrontendmentor />,
      href: "https://www.frontendmentor.io/profile/tylerwebdevelopment",
      label: "Frontend Mentor",
    },
    {
      icon: <SiGithub />,
      href: "https://github.com/tylerwebdevelopment",
      label: "Github",
    },
    {
      icon: <SiCodepen />,
      href: "https://codepen.io/tylerwebdevelopment",
      label: "Codepen",
    },
  ];
  const CurrentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-4 pt-6 space-y-4 px-8 flex flex-col gap-6 bg-surface z-99">
      {/* top */}
      <div className="flex flex-col w-full gap-1.5 justify-center items-center">
        <h3 className="text-2xl tracking-widest font-mono font-extralight text-text-main">
          <span className="text-primary-600">{`<`}</span>TyoDev{" "}
          <span className="text-primary-600">{`/>`}</span>
        </h3>
        <p className="text-text-muted text-sm">
          Building clean, modern web experiences.
        </p>
      </div>
      {/* Middle */}
      <div className="inline-flex w-full justify-around">
        {socialLinks.map((link, i) => (
          <div key={i} className="text-sm">
            <Link href={link.href} className="inline-flex gap-1.5 items-center hover:text-primary-600 transition-all duration-300 hover:underline underline-offset-2">
              <span>{link.icon}</span>
              {link.label}
            </Link>
          </div>
        ))}
      </div>
      {/* Bottom(Break Grid for copyright) */}
      <div className="flex flex-col w-full gap-2 justify-center items-center">
        <p className="text-xs text-text-muted">
          Built with Next.js, Tailwind, Motion & Resend
        </p>
        <p className="inline-flex gap-1 text-xs items-center">
          <Copyright className="size-2.5" />
          {CurrentYear ? CurrentYear : "2026"} TyoDev All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
