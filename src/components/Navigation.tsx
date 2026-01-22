import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/logo.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isStatesOpen, setIsStatesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Packages", href: "/packages" },
    { label: "About", href: "/about" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" },
  ];

  const states = [
    { label: "Arunachal Pradesh", href: "/states/arunachal-pradesh" },
    { label: "Assam", href: "/states/assam" },
    { label: "Manipur", href: "/states/manipur" },
    { label: "Meghalaya", href: "/states/meghalaya" },
    { label: "Mizoram", href: "/states/mizoram" },
    { label: "Nagaland", href: "/states/nagaland" },
    { label: "Sikkim", href: "/states/sikkim" },
    { label: "Tripura", href: "/states/tripura" },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? "bg-background/98 backdrop-blur-lg shadow-lg border-b border-border" 
        : "bg-background/80 backdrop-blur-md"
    }`}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section - Enhanced */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-md group-hover:bg-primary/30 transition-all duration-300"></div>
              <img 
                src={logo} 
                alt="Naga Bivouac" 
                className="h-14 w-14 object-contain relative z-10 drop-shadow-lg group-hover:scale-105 transition-transform duration-300" 
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-display font-bold text-primary group-hover:text-primary/80 transition-colors">
                Naga Bivouac
              </span>
              <span className="text-xs text-muted-foreground hidden sm:block">
                Explore Northeast India
              </span>
            </div>
          </Link>

          {/* Desktop Navigation - Enhanced */}
          <div className="hidden md:block">
            <div className="flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive(item.href)
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                  }`}
                >
                  {item.label}
                  {isActive(item.href) && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full"></span>
                  )}
                </Link>
              ))}
              
              {/* States Dropdown - Enhanced */}
              <div className="relative">
                <button
                  onClick={() => setIsStatesOpen(!isStatesOpen)}
                  onBlur={() => setTimeout(() => setIsStatesOpen(false), 200)}
                  className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isStatesOpen
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                  }`}
                >
                  States
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isStatesOpen ? "rotate-180" : ""}`} />
                </button>
                
                {isStatesOpen && (
                  <div className="absolute top-full right-0 mt-2 w-56 bg-card border border-border rounded-xl shadow-xl z-50 overflow-hidden animate-fade-in">
                    <div className="py-2">
                      {states.map((state) => (
                        <Link
                          key={state.href}
                          to={state.href}
                          className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-primary hover:bg-primary/5 transition-colors"
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

          {/* Mobile menu button - Enhanced */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="h-12 w-12 rounded-xl hover:bg-primary/10"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation - Enhanced */}
        {isOpen && (
          <div className="md:hidden animate-fade-in">
            <div className="px-2 pt-2 pb-4 space-y-1 bg-card/50 backdrop-blur-lg rounded-xl mb-4 border border-border">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              
              {/* Mobile States Section */}
              <div className="px-4 py-3">
                <div className="text-sm font-semibold text-primary mb-3">Explore States</div>
                <div className="grid grid-cols-2 gap-2">
                  {states.map((state) => (
                    <Link
                      key={state.href}
                      to={state.href}
                      className="px-3 py-2 text-xs text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {state.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
