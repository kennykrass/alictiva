"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/productos", label: "Productos" },
  { href: "/recetas", label: "Recetas" },
  { href: "/historia", label: "Historia" },
  { href: "/contacto", label: "Contacto" },
];

export function Navbar() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === href;
    }
    return pathname?.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link
          href="/"
          className="flex items-center gap-3 text-lg font-semibold tracking-tight text-foreground"
          aria-label="Ir al inicio de Alictiva"
        >
          <span className="sr-only">Alictiva</span>
          <span className="overflow-hidden rounded-xl border border-border/60 bg-background/70 shadow-soft">
            <Image
              src="/logo-alictiva.jpg"
              alt="Logotipo de Alictiva"
              width={120}
              height={40}
              className="h-10 w-[120px] object-cover"
              priority
            />
          </span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Navegación principal">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "relative text-sm font-medium transition-colors hover:text-primary",
                isActive(link.href) ? "text-primary" : "text-foreground/75"
              )}
            >
              {link.label}
              <span
                className={cn(
                  "absolute inset-x-0 bottom-[-6px] h-[2px] rounded-full bg-primary transition-opacity",
                  isActive(link.href) ? "opacity-100" : "opacity-0"
                )}
                aria-hidden="true"
              />
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex">
          <Link
            href="/productos"
            className={cn(buttonVariants({ variant: "primary", size: "sm" }), "shadow-soft")}
          >
            Probar Salsas
          </Link>
        </div>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger>
              <button
                type="button"
                className="inline-flex items-center rounded-full border border-border/70 bg-background/60 p-2 text-foreground transition hover:bg-muted/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                aria-label="Abrir menú"
              >
                <Menu className="h-5 w-5" aria-hidden="true" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" title="Menú" ariaLabel="Menú principal">
              <nav className="flex flex-col gap-4" aria-label="Navegación móvil">
                {navLinks.map((link) => (
                  <SheetClose key={link.href}>
                    <Link
                      href={link.href}
                      className={cn(
                        "text-base font-medium transition-colors hover:text-primary",
                        isActive(link.href) ? "text-primary" : "text-foreground/80"
                      )}
                    >
                      {link.label}
                    </Link>
                  </SheetClose>
                ))}
              </nav>
              <div className="mt-6 flex">
                <SheetClose>
                  <Link
                    href="/productos"
                    className={cn(buttonVariants({ variant: "primary", size: "sm" }), "w-full text-center shadow-soft")}
                  >
                    Probar Salsas
                  </Link>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
