'use client';

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { SignInButton, SignedIn, SignedOut, UserButton, useUser } from "@clerk/nextjs";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Library", href: "/" },
  { label: "Add New", href: "/books/new" },
  { label: "Pricing", href: "/subscriptions" },
];

const Navbar = () => {
  const pathname = usePathname();
  const { user } = useUser();

  return (
    <header className="w-full fixed z-50 bg-[var(--bg-primary)]">
      <div className="wrapper navbar-height py-4 flex justify-between items-center">
        <Link href="/" className="flex gap-0.5 items-center">
          <Image
            src="/assets/logo.png"
            alt="Libra"
            width={42}
            height={26}
          />
          <span className="logo-text">libra</span>
        </Link>

        <nav className="flex gap-7.5 items-center">
          {navItems.map(({ label, href }) => {
            const isActive = pathname === href;

            return (
              <Link
                key={label}
                href={href}
                className={cn("nav-item", {
                  "text-primary font-semibold": isActive,
                })}
              >
                {label}
              </Link>
            );
          })}

          <div className="flex gap-7.5 items-center">
            <SignedOut>
              <SignInButton mode="modal">
                <button className="btn-primary">Sign In</button>
              </SignInButton>
            </SignedOut>

            <SignedIn>
              <div className="nav-user-link flex items-center gap-2">
                <UserButton />
                {user?.firstName && (
                  <Link href="/subscriptions" className="nav-user-name">
                    {user.firstName}
                  </Link>
                )}
              </div>
            </SignedIn>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;