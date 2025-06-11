
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isStatesOpen, setIsStatesOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/packages", label: "Packages" },
    { href: "/gallery", label: "Gallery" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  const states = [
    { href: "/states/arunachal-pradesh", label: "Arunachal Pradesh" },
    { href: "/states/assam", label: "Assam" },
    { href: "/states/manipur", label: "Manipur" },
    { href: "/states/meghalaya", label: "Meghalaya" },
    { href: "/states/mizoram", label: "Mizoram" },
    { href: "/states/nagaland", label: "Nagaland" },
    { href: "/states/sikkim", label: "Sikkim" },
    { href: "/states/tripura", label: "Tripura" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-primary">
              Northeast Explorer
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 font-medium"
                >
                  {item.label}
                </Link>
              ))}
              
              {/* States Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsStatesOpen(!isStatesOpen)}
                  className="flex items-center text-muted-foreground hover:text-primary transition-colors duration-200 font-medium"
                >
                  States
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                
                {isStatesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-background border border-border rounded-md shadow-lg z-50">
                    <div className="py-2">
                      {states.map((state) => (
                        <Link
                          key={state.href}
                          to={state.href}
                          className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-secondary transition-colors"
                          onClick={() => setIsStatesOpen(false)}
                        >
                          {state.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t border-border">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              
              {/* Mobile States Section */}
              <div className="px-3 py-2">
                <div className="text-sm font-medium text-primary mb-2">States</div>
                {states.map((state) => (
                  <Link
                    key={state.href}
                    to={state.href}
                    className="block px-2 py-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {state.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
