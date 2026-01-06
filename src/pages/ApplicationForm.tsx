import { useNavigate } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";

// Google Icon SVG Component
const GoogleIcon = () => (
  <svg
    className="w-5 h-5"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      fill="#4285F4"
    />
    <path
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      fill="#34A853"
    />
    <path
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      fill="#FBBC05"
    />
    <path
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      fill="#EA4335"
    />
  </svg>
);

const ApplicationForm = () => {
  const navigate = useNavigate();
  
  const handleGoogleSignIn = () => {
    // Demo: Redirect to admissions page
    navigate("/admissions");
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 py-12 md:py-16 relative bg-gradient-to-br from-primary/5 via-background to-background overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-md mx-auto">
            <Card className="shadow-card border-2 border-border bg-card/95 backdrop-blur-sm">
              <CardContent className="p-8 md:p-10">
                {/* Header */}
                <div className="text-center mb-8">
                  {/* Icon Badge */}
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-500/10 to-blue-600/10 mb-4 shadow-sm">
                    <User className="w-8 h-8 text-blue-600" />
                  </div>
                  
                  <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                    Sign In to Continue
                  </h1>
                  
                  <p className="text-muted-foreground text-base md:text-lg">
                    Sign in with your Google account to access the application portal
                  </p>
                </div>

                {/* Google Sign-In Button */}
                <Button
                  onClick={handleGoogleSignIn}
                  className="w-full h-14 bg-white hover:bg-gray-50 text-gray-700 border-2 border-border hover:border-gray-300 shadow-sm hover:shadow-lg transition-all duration-200 font-medium text-base hover:-translate-y-0.5"
                  variant="outline"
                >
                  <div className="flex items-center justify-center gap-3">
                    <GoogleIcon />
                    <span>Sign in with Google</span>
                  </div>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ApplicationForm;
