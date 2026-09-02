"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui/Container";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Classes", href: "#classes" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-velora-bg/90 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
      }`}
    >
      <Container>
        <div className="flex items-center justify-between">
          <Link href="/" className="flex flex-col items-center">
            <span className="font-serif text-2xl font-bold tracking-widest text-velora-primary">
              VELORA
            </span>
            <span className="text-[10px] tracking-widest uppercase text-velora-secondary font-semibold mt-1">
              Yoga & Dance Studio
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm uppercase tracking-wider font-medium text-velora-foreground hover:text-velora-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-velora-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <nav className="md:hidden pt-4 pb-2 bg-velora-bg absolute top-full left-0 w-full shadow-lg border-t border-velora-accent/20">
            <div className="flex flex-col px-4 space-y-4 pb-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm uppercase tracking-wider font-medium text-velora-foreground hover:text-velora-primary"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </Container>
    </header>
  );
}
