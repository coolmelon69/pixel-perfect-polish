import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/layout/Footer";

const Privacy = () => {
  const navigate = useNavigate();

  const userEmail = "john.doe@example.com";

  const handleSignout = () => {
    // Demo: redirect to our sign-in page
    navigate("/apply/foundation-malaysian");
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Lightweight header (matches PersonalProfile layout) */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 h-14 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link to="/" className="text-base font-semibold text-foreground">
              UnitenSkills
            </Link>
            <nav className="hidden sm:flex items-center gap-4 text-sm">
              <span className="text-foreground font-medium">Privacy</span>
              <span className="text-muted-foreground">/</span>
              <Link
                to="/personal-profile"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Personal Profile
              </Link>
            </nav>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden md:block text-sm text-muted-foreground">
              Hello,&nbsp;
              <span className="text-foreground">{userEmail}</span>
            </div>
            <Button
              onClick={handleSignout}
              size="sm"
              className="bg-primary hover:bg-primary-hover text-primary-foreground"
            >
              Signout
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <div className="container mx-auto px-4 py-10 max-w-4xl">
          <Card className="shadow-elegant">
            <CardContent className="p-8 md:p-10">
              {/* Main Heading */}
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Privacy Policy
              </h1>

              {/* Subheading */}
              <h2 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                Personal Data Protection Policy
              </h2>

              {/* Revision Date */}
              <p className="text-sm text-muted-foreground mb-6">
                (Revised: 25 November 2019)
              </p>

              {/* Form Links */}
              <div className="mb-8 space-y-2">
                <Link
                  to="#"
                  className="text-primary hover:text-primary-hover underline underline-offset-4 transition-colors block"
                  onClick={(e) => e.preventDefault()}
                >
                  Personal Data Access Form
                </Link>
                <Link
                  to="#"
                  className="text-primary hover:text-primary-hover underline underline-offset-4 transition-colors block"
                  onClick={(e) => e.preventDefault()}
                >
                  Personal Data Correction Form
                </Link>
              </div>

              {/* Introduction Paragraph */}
              <p className="text-base text-foreground mb-8 leading-relaxed">
                At Universiti Tenaga Nasional ("UNITEN"), and our subsidiaries, we are committed to protecting your privacy in accordance with the Personal Data Protection Act 2010 of Malaysia ("PDPA").
              </p>

              {/* Policy Explanation Section */}
              <div className="mb-8">
                <h3 className="text-lg md:text-xl font-semibold text-foreground mb-4">
                  This Policy explains:
                </h3>
                <ul className="space-y-2 list-disc list-inside text-foreground">
                  <li className="leading-relaxed">
                    the type of personal data we collect and how we collect it
                  </li>
                  <li className="leading-relaxed">
                    how we use your personal data
                  </li>
                  <li className="leading-relaxed">
                    the parties that we disclose the personal data to; and
                  </li>
                  <li className="leading-relaxed">
                    the choices we offer, including how to access and update your personal data.
                  </li>
                </ul>
              </div>

              {/* Personal Data Collection Section */}
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-foreground mb-4">
                  Personal Data We May Collect from You
                </h3>
                <p className="text-base text-foreground mb-4 leading-relaxed">
                  We may collect the following personal data about you:
                </p>
                <ul className="space-y-3 list-disc list-inside text-foreground">
                  <li className="leading-relaxed">
                    personal information to establish your identity and background such as your full name, passport or identity card number, nationality and religion
                  </li>
                  <li className="leading-relaxed">
                    contact information such as mailing address, telephone number, mobile phone number, fax number and email address
                  </li>
                  <li className="leading-relaxed">
                    payment information such as your debit or credit card information, including the name of cardholder, card number, mailing address, expiry date and other bank account details
                  </li>
                  <li className="leading-relaxed">
                    sensitive information such as your racial or ethnic origin, political opinions, religion or other beliefs, health, criminal background or trade union membership. We do not generally collect sensitive information unless it is necessary due to exceptional circumstances to serve you better and meet your particular needs
                  </li>
                  <li className="leading-relaxed">
                    recording of your image via CCTV cameras installed at our campuses, branches or premises
                  </li>
                  <li className="leading-relaxed">
                    recording of your photograph during any of our corporate events, or third party events
                  </li>
                  <li className="leading-relaxed">
                    recording of calls placed by you to our customer services
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;
