"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import Button from "@/components/ui";

const NavigationBar = () => {
  const [active, setActive] = useState<string>("/");
  const [scrolled, setScrolled] = useState<boolean>(false);

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

  const links = [
    {
      href: "/",
      label: "Home",
    },
    {
      href: "/about",
      label: "About",
    },
    {
      href: "/projects",
      label: "Projects",
    },
  ];

  return (
    <div className="fixed top-4 inset-x-0 left-0 right-0 flex justify-center z-50">
      <nav
        className={` navigation-box-shadow transition-all duration-300 px-4 py-2 rounded-full ${scrolled ? "bg-surface-elevated/25 backdrop-blur-md border border-border-default/20" : "bg-surface-elevated/95 border border-border-default/30 backdrop-blur-sm"}`}
      >
        <div>
          <ul className="flex place-items-center gap-6">
            {links.map((link) => (
              <div key={link.href} className="relative">
                <Link
                  href={link.href}
                  onClick={() => setActive(link.href)}
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
              </div>
            ))}
            <Button className="rounded-full">Contact</Button>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavigationBar;
