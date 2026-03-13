"use client";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { motion } from "motion/react";
import Button from "@/components/ui";
import { ScrollContext } from "@/lib/context/ScrollContext";
import path from "path";

interface NavigationBarProps {
  active: string;
  setActive: React.Dispatch<React.SetStateAction<string>>;
}

const NavigationBar = ({ active, setActive }: NavigationBarProps) => {
  const [scrolled, setScrolled] = useState<boolean>(false);

  const { ScrollToAbout } = useContext(ScrollContext);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // About Section Observer

  const links = [
    {
      href: "/",
      label: "Home",
    },
    {
      href: "/#about",
      label: "About",
    },
    {
      href: "/projects",
      label: "Projects",
    },
  ];

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    linkHref: string,
  ) => {
    const isHome = window.location.pathname === "/";

    if (linkHref === "/#about" && isHome && ScrollToAbout) {
      e.preventDefault();
      ScrollToAbout?.();
      setActive(linkHref);
    } else if (linkHref === "/" && isHome) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      setActive(linkHref);
    } else {
      setActive(linkHref);
    }
  };

  return (
    <div className="fixed top-4 inset-x-0 left-0 right-0 flex justify-center z-50">
      <nav
        className={` navigation-box-shadow transition-all duration-300 px-4 py-2 rounded-full ${scrolled ? "bg-surface-elevated/25 backdrop-blur-md border border-border-default/20" : "bg-surface-elevated/95 border border-border-default/30 backdrop-blur-sm"}`}
      >
        <div>
          <ul className="flex place-items-center gap-6">
            {links.map((link) => (
              <li key={link.href} className="relative">
                <Link
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  className={`nav-item ${active === link.href ? "active" : "text-text-main transition-colors duration-300 hover:text-primary-800"}`}
                >
                  {link.label}
                </Link>
                {active === link.href && (
                  <motion.div
                    layoutId="magic-line"
                    className="absolute -bottom-px w-full left-0 h-0.5 rounded-full bg-primary-500"
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 30,
                    }}
                  />
                )}
              </li>
            ))}
            <Button className="rounded-full" size={"sm"} variant={"outline"}>
              Contact
            </Button>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavigationBar;
