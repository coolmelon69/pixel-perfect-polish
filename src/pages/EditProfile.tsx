import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { User, Save, ChevronLeft, ArrowLeft } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import heroImage from "@/assets/hero-library.jpg";

const EditProfile = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Get initial data from location state, or use default demo data
  const initialData = location.state || {
    name: "John Doe",
    nricOrPassport: "900101-10-1234",
    handphone: "0123456789",
    address: "123 Example Street",
    postcode: "50000",
    town: "Kuala Lumpur",
    state: "WILAYAH PERSEKUTUAN",
    country: "Malaysia",
  };

  const [formData, setFormData] = useState({
    name: initialData.name || "",
    nricOrPassport: initialData.nricOrPassport || "",
    handphone: initialData.handphone || "",
    address: initialData.address || "",
    postcode: initialData.postcode || "",
    town: initialData.town || "",
    state: initialData.state || "",
    country: initialData.country || "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    // Save logic here - for demo, just show toast and navigate back
    toast({
      title: "Profile Updated",
      description: "Your personal profile has been updated successfully.",
    });
    
    // Navigate back to personal profile page
    setTimeout(() => {
      navigate("/personal-profile");
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero Banner */}
        <div className="relative h-48 md:h-56 overflow-hidden">
          <img
            src={heroImage}
            alt="Students at UNITEN"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40" />
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10 pb-12">
          {/* Welcome Card */}
          <Card className="mb-6 shadow-elegant">
            <CardContent className="pt-6 pb-4">
              <div className="text-center mb-4">
                <h1 className="text-2xl md:text-3xl font-semibold text-foreground">
                  Edit Personal Profile
                </h1>
              </div>
            </CardContent>
          </Card>

          {/* Form Card */}
          <Card className="shadow-elegant">
            <CardContent className="pt-6">
              <div className="space-y-5">
                <div className="mb-6">
                  <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-2">
                    Personal Information
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Please update your personal information below.
                  </p>
                </div>

                <FormField
                  label="Name"
                  value={formData.name}
                  onChange={(v) => handleInputChange("name", v)}
                  placeholder="Enter your full name"
                />

                <FormField
                  label="NRIC No/Passport Number"
                  value={formData.nricOrPassport}
                  onChange={(v) => handleInputChange("nricOrPassport", v)}
                  placeholder="021103-67-0019"
                />

                <FormField
                  label="Handphone"
                  value={formData.handphone}
                  onChange={(v) => handleInputChange("handphone", v)}
                  placeholder="0193221957"
                />

                <FormField
                  label="Address"
                  value={formData.address}
                  onChange={(v) => handleInputChange("address", v)}
                  placeholder="Enter your address"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    label="Postcode"
                    value={formData.postcode}
                    onChange={(v) => handleInputChange("postcode", v)}
                    placeholder="62000"
                  />

                  <FormField
                    label="Town"
                    value={formData.town}
                    onChange={(v) => handleInputChange("town", v)}
                    placeholder="Putrajaya"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    label="State"
                    value={formData.state}
                    onChange={(v) => handleInputChange("state", v)}
                    placeholder="WP PUTRAJAYA"
                  />

                  <FormField
                    label="Country"
                    value={formData.country}
                    onChange={(v) => handleInputChange("country", v)}
                    placeholder="Malaysia"
                  />
                </div>

                {/* Navigation Buttons */}
                <div className="flex items-center justify-between pt-6 mt-6 border-t border-border">
                  <Button
                    variant="outline"
                    onClick={() => navigate("/personal-profile")}
                    className="flex items-center gap-2"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    Cancel
                  </Button>

                  <div className="flex items-center gap-3">
                    <Button
                      onClick={handleSave}
                      className="flex items-center gap-2"
                    >
                      <Save className="h-4 w-4" />
                      Save Changes
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

interface FormFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: string;
}

const FormField = ({ label, value, onChange, placeholder, type = "text" }: FormFieldProps) => (
  <div className="space-y-2">
    <Label className="text-sm font-medium text-muted-foreground">{label}</Label>
    <div className="relative">
      <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
      <Input
        type={type}
        className="pl-10"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  </div>
);

export default EditProfile;
