"use client";
import Link from "next/link";
import Button, {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui";
import { Menu } from "lucide-react";
import Logo from "@/components/custom/svg/Logo";

const NavigationBar = () => {
  type NavigationItem = {
    href: string;
    label: string;
    description?: string;
  };

  const NavigationMenuLinks: {
    href: string;
    label: string;
    submenu?: {
      title: string;
      item: NavigationItem[];
    }[];
  }[] = [
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
      submenu: [
        {
          title: "Applications",
          item: [
            {
              href: "/projects",
              label: "Full-Stack Apps",
              description: "Complete Apps with frontend and backend",
            },
          ],
        },
        {
          title: "UI & Components",
          item: [
            {
              href: "/projects",
              label: "Custom Components",
              description: "Custom Built UI elements and components",
            },
          ],
        },
        {
          title: "Creative Work",
          item: [
            {
              href: "/projects",
              label: "UI Designs",
              description: "Collection of visual designs",
            },
          ],
        },
      ],
    },
    {
      href: "/contact",
      label: "Contact",
    },
  ];

  const ListItem = ({
    title,
    children,
    href,
    ...props
  }: React.ComponentPropsWithoutRef<"li"> & { href: string }) => {
    return (
      <li {...props}>
        <NavigationMenuLink asChild>
          <Link href={href}>
            <div>
              <p className="font-bold font-sans text-foreground/80">{title}</p>
              <div>{children}</div>
            </div>
          </Link>
        </NavigationMenuLink>
      </li>
    );
  };

  return (
    <nav
      className="px-2 py-1 flex w-full max-w-[1550] z-50 sticky top-0 bg-background border-b border-border items-center"
      id="applicationNavigationBar"
    >
      {/* Brand Logo */}
      {/* Navigation Left */}
      {/* Mobile Shift To Center */}
      <div id="navigationLeft" className="w-fit">
        <Link href="/">
          <Logo className="h-10 hover:fill-primary-400 w-fit transition-colors duration-300 fill-primary-500" />
        </Link>
      </div>

      {/* Desktop Navigation Center */}
      {/* Navigation Center */}

      <div className="z-50 mx-auto w-full" id="navigationCenter">
        <NavigationMenu className="hidden md:flex md:mx-auto">
          <NavigationMenuList className="flex gap-4">
            {NavigationMenuLinks.map((index, k) => (
              <NavigationMenuItem key={k}>
                {index.submenu ? (
                  <>
                    <NavigationMenuTrigger>{index.label}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="w-130 px-4 py-2">
                        <div className="grid grid-cols-2 gap-4">
                          {index.submenu.map((submenu, k) => (
                            <div key={k} className="flex flex-col gap-2">
                              <h1 className="text-lg text-center text-foreground/90 py-2 border-b border-border">
                                {submenu.title}
                              </h1>
                              {submenu.item.map((item, k) => (
                                <ListItem
                                  className={`flex flex-col hover:bg-accent transition-colors duration-300 py-2 px-4 rounded-lg text-sm`}
                                  href={item.href}
                                  key={k}
                                  title={item.label}
                                >
                                  <p className="text-xs text-muted-foreground">
                                    {item.description}
                                  </p>
                                </ListItem>
                              ))}
                            </div>
                          ))}
                        </div>
                      </ul>
                    </NavigationMenuContent>
                  </>
                ) : (
                  <Link
                    className="h-9 px-4 py-2 hover:bg-accent transition-colors duration-300 rounded-lg"
                    href={index.href}
                  >
                    {index.label}
                  </Link>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Mobile Trigger & Desktop CTA */}
      {/* NavigationLeft */}
      <div className="ml-auto w-fit" id="navigationRight">
        {/* Sheet For Mobile Menu */}
        <Button className="hidden md:flex" size="sm">
          Request Quote
        </Button>
        <div className="md:hidden flex">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant={"ghost"} size={"icon"}>
                <Menu strokeWidth={3} className="text-accent-foreground/75" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle className="text-accent-foreground/85 text-center font-sans tracking-wide">
                  Site Navigation
                </SheetTitle>
              </SheetHeader>
              <div
                className="grid grid-cols-1 justify-items-center"
                id="mobileSheetContent"
              >
                <ul
                  id="mobileSheetList"
                  className="mt-8 flex-col flex space-y-8"
                >
                  {NavigationMenuLinks.map((item, index) => (
                    <Link
                      href={item.href}
                      key={index}
                      className="h-9 rounded-lg hover:bg-accent flex items-center justify-center transition-colors duration-300 tracking-tight text-lg"
                    >
                      {item.label}
                    </Link>
                  ))}
                  <Button variant="default">Request Free Quote</Button>
                </ul>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
