"use client";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { motion } from "motion/react";
import Button, { Skeleton } from "@/components/ui";
import { ScrollContext } from "@/lib/context/ScrollContext";
import { useAuth } from "@/lib/context/AuthContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/DropdownMenu";
import { LogOut } from "lucide-react";
import { toast } from "sonner";
import { redirect } from "next/navigation";
interface NavigationBarProps {
  active: string;
  setActive: React.Dispatch<React.SetStateAction<string>>;
}

const NavigationBar = ({ active, setActive }: NavigationBarProps) => {
  const { user, loading, signOut } = useAuth();

  const getFirstName = (name: string) => {
    const array = name.split(" ");
    if (array.length > 0) {
      return array[0];
    } else {
      return name;
    }
  };

  const handleSignOut = async () => {
    signOut()
      .then(() => {
        toast.success("Signed Out", {
          position: "top-center",
          richColors: true,
        });
      })
      .finally(() => {
        redirect("/");
      });
  };

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
    <div className="fixed min-w-max w-fit mx-auto top-4 inset-x-0 left-0 right-0 flex justify-center z-50">
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

            {loading && user ? (
              <Skeleton className="w-full h-4 rounded-md" />
            ) : user?.isAdmin ? (
              <DropdownMenu modal={false}>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant={"ghost"}
                    className="focus-visible:border-0! outline-0! ring-0!"
                    size={"sm"}
                  >
                    {user ? getFirstName(user?.name) : null}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuGroup>
                    <DropdownMenuItem
                      onClick={handleSignOut}
                      variant="destructive"
                    >
                      <LogOut />
                      Sign Out
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : null}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavigationBar;
