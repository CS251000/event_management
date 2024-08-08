"use client"
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Bars3Icon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const features = [
  {
    title: "Website Builder",
    href: "/webbuild",
    description: "Create instant website personalized for your event",
  },
  {
    title: "Sponsorship Management",
    href: "/",
    description: "Manage your Sponsorship easily and efficiently",
  },
  {
    title: "Participation Manager",
    href: "/",
    description: "tbd",
  },
];

const solutions = [
  {
    title: "Virtual Events",
    href: "/",
    description: "Conduct quick virtual events and speaker sessions",
  },
  {
    title: "Offline Events",
    href: "/",
    description: "Conduct offline events with ease",
  },
];

function ListItem({ title, href, description }) {
  return (
    <li>
      <a
        href={href}
        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-gray-100"
      >
        <div className="text-sm font-medium leading-none">{title}</div>
        <p className="line-clamp-2 text-sm leading-snug text-gray-400">
          {description}
        </p>
      </a>
    </li>
  );
}

export default function MobileNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const handleBack = () => {
    if (solutionsOpen) setSolutionsOpen(false);
    else if (featuresOpen) setFeaturesOpen(false);
    else setMobileMenuOpen(false);
  };

  return (
    <>
      <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
        <SheetTrigger asChild>
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-100"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </SheetTrigger>
        <SheetContent>
          <div className="flex items-center justify-between p-4">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt="logo"
                src="/assets/images/logo2.png"
                className="h-20 w-30"
              />
            </a>
            <button
              type="button"
              onClick={handleBack}
              className="-m-2.5 rounded-md p-2.5 text-gray-100"
            >
              <span className="sr-only">Close menu</span>
              <ArrowLeftIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-100/10">
              <div className="space-y-2 py-6">
                {!featuresOpen && !solutionsOpen && (
                  <>
                    <button
                      className="block w-full text-left -mx-3 rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-100 hover:bg-gray-800"
                      onClick={() => setFeaturesOpen(true)}
                    >
                      Features
                    </button>
                    <button
                      className="block w-full text-left -mx-3 rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-100 hover:bg-gray-800"
                      onClick={() => setSolutionsOpen(true)}
                    >
                      Solutions
                    </button>
                    <button
                      className="block w-full text-left -mx-3 rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-100 hover:bg-gray-800"
                    >
                      About Us
                    </button>
                  </>
                )}
                {featuresOpen && (
                  <ul className="space-y-2 py-6">
                    {features.map((feature) => (
                      <ListItem
                        key={feature.title}
                        title={feature.title}
                        href={feature.href}
                        description={feature.description}
                      />
                    ))}
                  </ul>
                )}
                {solutionsOpen && (
                  <ul className="space-y-2 py-6">
                    {solutions.map((solution) => (
                      <ListItem
                        key={solution.title}
                        title={solution.title}
                        href={solution.href}
                        description={solution.description}
                      />
                    ))}
                  </ul>
                )}
              </div>
              {/* <div className="py-6">
                <SignedOut>
                  <SignInButton mode="modal">
                    <button className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-100 hover:bg-gray-800">
                      Log in
                    </button>
                  </SignInButton>
                </SignedOut>
                <SignedIn>
                  <UserButton />
                </SignedIn>
              </div> */}
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
