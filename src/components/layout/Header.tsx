import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import unitenLogo from "@/assets/uniten_logo.png";
import ThemeSwitcher from "@/components/theme/ThemeSwitcher";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="w-full">
      {/* Main header */}
      <div className="bg-card shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <img 
                src={unitenLogo} 
                alt="UNITEN - Universiti Tenaga Nasional" 
                className="h-16 md:h-20 w-auto object-contain"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <Link
                to="/"
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive("/") ? "text-primary" : "text-foreground"
                }`}
              >
                HOME
              </Link>
              
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary transition-colors">
                  LOGIN
                  <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuItem asChild>
                    <Link to="/apply/foundation-malaysian">Student Portal</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/apply/foundation-malaysian">Staff Portal</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="bg-primary hover:bg-primary-hover text-primary-foreground font-medium px-6 shadow-md">
                    APPLY NOW
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuItem asChild>
                    <Link to="/apply/foundation-malaysian">Foundation/Diploma (Malaysian)</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/apply/foundation-international">Foundation/Diploma (International)</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/apply/bachelor">Bachelor/Postgraduate</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <ThemeSwitcher />
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-foreground"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4 animate-fade-in-up">
              <div className="flex flex-col gap-4">
                <Link
                  to="/"
                  className="text-sm font-medium text-foreground hover:text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  HOME
                </Link>
                <button className="text-sm font-medium text-foreground hover:text-primary text-left">
                  LOGIN
                </button>
                <div className="flex flex-col gap-2 pl-4">
                  <Link
                    to="/apply/foundation-malaysian"
                    className="text-sm text-muted-foreground hover:text-primary"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Foundation/Diploma (Malaysian)
                  </Link>
                  <Link
                    to="/apply/foundation-international"
                    className="text-sm text-muted-foreground hover:text-primary"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Foundation/Diploma (International)
                  </Link>
                  <Link
                    to="/apply/bachelor"
                    className="text-sm text-muted-foreground hover:text-primary"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Bachelor/Postgraduate
                  </Link>
                </div>
                <div className="pt-2 border-t border-border">
                  <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                    <span>Theme:</span>
                    <ThemeSwitcher />
                  </div>
                </div>
              </div>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
