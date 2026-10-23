"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Category } from "@/lib/types";
import BanglaDate from "./BanglaDate";

export default function Navbar({ categories }: { categories: Category[] }) {
  const pathname = usePathname();

  return (
    <header className="border-b border-line bg-surface">
      
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand">
            <Image
              src="/logo-icon.png"
              alt=""
              width={22}
              height={22}
              className="brightness-0 invert"
            />
          </span>
          <span className="leading-tight">
            <span className="block text-lg font-bold text-ink">বাজার দর</span>
            <span className="block min-h-4 text-xs text-muted">
              <BanglaDate />
            </span>
          </span>
        </Link>

        <div className="flex items-center gap-2">
          <Link href="/signin" className="btn btn-ghost btn-sm sm:btn-md">
            সাইন ইন
          </Link>
          <Link
            href="/signup"
            className="btn btn-sm border-brand bg-brand text-white hover:bg-brand-dark sm:btn-md"
          >
            সাইন আপ
          </Link>
        </div>
      </div>

    
      <nav className="border-t border-line">
        <ul className="no-scrollbar mx-auto flex max-w-6xl gap-1 overflow-x-auto px-4 py-2 sm:px-6">
          {categories.map((cat) => {
            const href = `/category/${cat.slug}`;
            const active = pathname === href;
            return (
              <li key={cat.id}>
                <Link
                  href={href}
                  className={`flex items-center gap-1.5 whitespace-nowrap rounded-full px-3 py-1.5 text-sm transition-colors ${
                    active
                      ? "bg-brand/10 font-semibold text-brand"
                      : "text-ink hover:bg-black/5"
                  }`}
                >
                  <span>{cat.icon}</span>
                  {cat.nameBn}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}