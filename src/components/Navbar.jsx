import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { X, Menu } from "lucide-react";
import { ThemeToggle } from "../components/ThemeToggle"

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // lock scroll when menu open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={cn(
          "fixed w-full z-50 transition-all duration-300 px-6 md:px-20",
          isScrolled
            ? "py-5 bg-background/10 backdrop-blur-lg border-b border-border/40 shadow-sm"
            : "py-5 bg-background/40 backdrop-blur-md"
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <a
            className="text-xl font-bold text-primary flex items-center"
            href="#hero"
          >
            <span className="relative z-10">
              <span className="text-glow text-foreground">Clayton Koh</span>{" "}
              Portfolio
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
            
            <ThemeToggle/>
          </div>

          {/* Mobile Button */}
          <div className="flex items-center space-x-2 md:hidden flex-shrink-0 relative">
            <div className="relative z-[70]">
              <ThemeToggle/>
            </div>
            <button
                onClick={() => setIsMenuOpen((prev) => !prev)}
                className="p-2 text-foreground relative z-[70]"
                aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
            >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - MODIFIED */}
      <div
        className={cn(
          // Positioning, Sizing & Styling
          "fixed top-24 right-6 w-60 p-5 z-[55] md:hidden",
          "bg-background/50 backdrop-blur-lg border border-border/40 rounded-xl shadow-lg",
          
          // Animation
          "transition-all duration-300",
          isMenuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        )}
      >
        <div className="flex flex-col items-start space-y-5">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-foreground/80 hover:text-primary transition-colors duration-300 text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
          
        </div>
      </div>
    </>
  );
};