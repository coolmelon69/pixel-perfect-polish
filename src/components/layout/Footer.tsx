import { Link } from "react-router-dom";
import unitenLogo from "@/assets/uniten_logo.png";

const Footer = () => {
  return (
    <footer className="bg-topbar text-topbar-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo & About */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img 
                src={unitenLogo} 
                alt="UNITEN - Universiti Tenaga Nasional" 
                className="h-14 md:h-16 w-auto object-contain"
              />
            </div>
            <p className="text-sm text-topbar-foreground/80 max-w-md">
              UNITEN, The Energy University, is a leading institution in Malaysia providing quality education
              in engineering, IT, business, and energy-related fields.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-topbar-foreground/80 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/apply/foundation-malaysian" className="text-sm text-topbar-foreground/80 hover:text-primary transition-colors">
                  Apply Now
                </Link>
              </li>
              <li>
                <a href="#" className="text-sm text-topbar-foreground/80 hover:text-primary transition-colors">
                  Programmes
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-topbar-foreground/80 hover:text-primary transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-topbar-foreground/80">
              <li>Putrajaya Campus</li>
              <li>Jalan IKRAM-UNITEN</li>
              <li>43000 Kajang, Selangor</li>
              <li className="pt-2">
                <a href="mailto:admissions@uniten.edu.my" className="hover:text-primary transition-colors">
                  admissions@uniten.edu.my
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-topbar-foreground/20 pt-8">
          <p className="text-center text-sm text-topbar-foreground/60">
            Made by Adam Danial
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
