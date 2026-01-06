import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

const programTypes: Record<string, { title: string; subtitle: string }> = {
  "foundation-malaysian": {
    title: "Foundation/Diploma",
    subtitle: "(Malaysian)",
  },
  "foundation-international": {
    title: "Foundation/Diploma",
    subtitle: "(International)",
  },
  "bachelor": {
    title: "Bachelor/Postgraduate",
    subtitle: "(Malaysian/International)",
  },
};

const intakeOptions = [
  "January 2026",
  "March 2026",
  "May 2026",
  "July 2026",
  "September 2026",
  "November 2026",
];

const ApplicationForm = () => {
  const { type } = useParams<{ type: string }>();
  const program = programTypes[type || "foundation-malaysian"] || programTypes["foundation-malaysian"];
  
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    mobile: "",
    icNumber: "",
    intake: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user types
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length > 10) {
      newErrors.password = "Password must be maximum 10 characters";
    } else if (/[^a-zA-Z0-9]/.test(formData.password)) {
      newErrors.password = "Symbols are not allowed in password";
    }
    
    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
    }
    
    if (!formData.icNumber.trim()) {
      newErrors.icNumber = "IC Number is required";
    }
    
    if (!formData.intake) {
      newErrors.intake = "Please select an intake";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      toast.success("Application submitted successfully!", {
        description: "We will contact you shortly with further instructions.",
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            {/* Form Header */}
            <div className="mb-8">
              <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                Start Your Application -
              </h1>
              <h2 className="text-xl md:text-2xl text-muted-foreground">
                {program.title} {program.subtitle}
              </h2>
              <div className="h-1 w-full bg-primary mt-4 rounded-full" />
            </div>

            {/* Application Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div className="space-y-2">
                <Label htmlFor="fullName" className="text-sm font-medium text-foreground">
                  Full Name as per NRIC/Passport
                </Label>
                <Input
                  id="fullName"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange("fullName", e.target.value)}
                  className={`h-12 ${errors.fullName ? "border-destructive" : ""}`}
                />
                {errors.fullName && (
                  <p className="text-sm text-destructive">{errors.fullName}</p>
                )}
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-foreground">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className={`h-12 ${errors.email ? "border-destructive" : ""}`}
                />
                {errors.email && (
                  <p className="text-sm text-destructive">{errors.email}</p>
                )}
              </div>

              {/* Password */}
              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-medium text-foreground">
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Create a password"
                  value={formData.password}
                  onChange={(e) => handleInputChange("password", e.target.value)}
                  className={`h-12 ${errors.password ? "border-destructive" : ""}`}
                />
                <p className="text-sm text-primary font-medium">
                  Eg: 1A2b3C4d5E (Symbols not allowed). Password must be maximum 10 characters only.
                </p>
                {errors.password && (
                  <p className="text-sm text-destructive">{errors.password}</p>
                )}
              </div>

              {/* Mobile Number */}
              <div className="space-y-2">
                <Label htmlFor="mobile" className="text-sm font-medium text-foreground">
                  Mobile No.
                </Label>
                <Input
                  id="mobile"
                  type="tel"
                  placeholder="Enter your mobile number"
                  value={formData.mobile}
                  onChange={(e) => handleInputChange("mobile", e.target.value)}
                  className={`h-12 ${errors.mobile ? "border-destructive" : ""}`}
                />
                {errors.mobile && (
                  <p className="text-sm text-destructive">{errors.mobile}</p>
                )}
              </div>

              {/* IC Number */}
              <div className="space-y-2">
                <Label htmlFor="icNumber" className="text-sm font-medium text-foreground">
                  IC No
                </Label>
                <Input
                  id="icNumber"
                  type="text"
                  placeholder="Enter your IC number"
                  value={formData.icNumber}
                  onChange={(e) => handleInputChange("icNumber", e.target.value)}
                  className={`h-12 ${errors.icNumber ? "border-destructive" : ""}`}
                />
                <p className="text-sm text-primary font-medium">Eg: 991212-10-xxxx</p>
                {errors.icNumber && (
                  <p className="text-sm text-destructive">{errors.icNumber}</p>
                )}
              </div>

              {/* Interested Intake */}
              <div className="space-y-2">
                <Label htmlFor="intake" className="text-sm font-medium text-foreground">
                  Interested Intake
                </Label>
                <Select
                  value={formData.intake}
                  onValueChange={(value) => handleInputChange("intake", value)}
                >
                  <SelectTrigger className={`h-12 ${errors.intake ? "border-destructive" : ""}`}>
                    <SelectValue placeholder="Select intake" />
                  </SelectTrigger>
                  <SelectContent>
                    {intakeOptions.map((option) => (
                      <SelectItem key={option} value={option}>
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.intake && (
                  <p className="text-sm text-destructive">{errors.intake}</p>
                )}
              </div>

              {/* Terms */}
              <div className="text-sm text-muted-foreground">
                By clicking{" "}
                <span className="inline-flex items-center px-2 py-0.5 rounded bg-primary text-primary-foreground text-xs font-medium">
                  Sign Up
                </span>
                , you agree to the{" "}
                <a href="#" className="text-primary hover:underline font-medium">
                  Terms and Conditions
                </a>{" "}
                set out by this site, including our Cookie Use.
              </div>

              <div className="h-px bg-border" />

              {/* Submit */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <Button
                  type="submit"
                  size="lg"
                  className="w-full sm:w-auto bg-primary hover:bg-primary-hover text-primary-foreground font-semibold px-12 h-12 shadow-md"
                >
                  Sign Up
                </Button>
                
                <p className="text-sm text-muted-foreground">
                  Already have an account?{" "}
                  <Link to="#" className="text-primary hover:underline font-medium">
                    Log In
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ApplicationForm;
