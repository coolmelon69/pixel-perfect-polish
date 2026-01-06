import { useState } from "react";
import { User, ChevronDown, ChevronUp, Save } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/hooks/use-toast";
import heroImage from "@/assets/hero-library.jpg";

const ApplicationDetails = () => {
  const [personalOpen, setPersonalOpen] = useState(true);
  const [educationOpen, setEducationOpen] = useState(false);
  const [otherOpen, setOtherOpen] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    icNo: "",
    email: "",
    phonePrefix: "017",
    phoneNumber: "",
    phoneNumber2: "",
    householdIncome: "",
    bshrRecipient: "no",
    staffId: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSaveProfile = () => {
    toast({
      title: "Profile Saved",
      description: "Your personal details have been saved successfully.",
    });
  };

  const handleSaveOtherDetails = () => {
    toast({
      title: "Details Saved",
      description: "Your other details have been saved successfully.",
    });
  };

  const userName = "testing";
  const applicantId = "902467";
  const intake = "January 2026";

  return (
    <div className="min-h-screen bg-background">
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
                Welcome, <span className="text-primary font-bold">{userName}</span>!
              </h1>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <Badge variant="default" className="px-4 py-2 text-sm">
                Application Details
              </Badge>
              <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
                <span>
                  Applicant Intake:{" "}
                  <span className="text-primary font-medium underline">{intake}</span>
                </span>
                <span>
                  Applicant Online ID:{" "}
                  <span className="font-medium text-foreground">{applicantId}</span>
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Personal Details Section */}
        <Collapsible open={personalOpen} onOpenChange={setPersonalOpen} className="mb-4">
          <CollapsibleTrigger asChild>
            <div className="flex items-center justify-between bg-primary text-primary-foreground px-4 py-3 rounded-t-lg cursor-pointer hover:bg-primary/90 transition-colors">
              <span className="font-medium">Personal Details</span>
              {personalOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
            </div>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <Card className="rounded-t-none border-t-0">
              <CardContent className="pt-6">
                <div className="space-y-5">
                  <FormField
                    label="Full name as per NRIC"
                    value={formData.fullName}
                    onChange={(v) => handleInputChange("fullName", v)}
                    placeholder="Enter your full name"
                  />
                  <FormField
                    label="I/C No."
                    value={formData.icNo}
                    onChange={(v) => handleInputChange("icNo", v)}
                    placeholder="020708-10-9982"
                  />
                  <FormField
                    label="Email"
                    type="email"
                    value={formData.email}
                    onChange={(v) => handleInputChange("email", v)}
                    placeholder="example@email.com"
                  />
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
                    <div className="md:col-span-1">
                      <Label className="text-sm font-medium text-muted-foreground mb-2 block">
                        Handphone Number
                      </Label>
                      <div className="flex gap-2">
                        <Select
                          value={formData.phonePrefix}
                          onValueChange={(v) => handleInputChange("phonePrefix", v)}
                        >
                          <SelectTrigger className="w-24">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="010">010</SelectItem>
                            <SelectItem value="011">011</SelectItem>
                            <SelectItem value="012">012</SelectItem>
                            <SelectItem value="013">013</SelectItem>
                            <SelectItem value="014">014</SelectItem>
                            <SelectItem value="016">016</SelectItem>
                            <SelectItem value="017">017</SelectItem>
                            <SelectItem value="018">018</SelectItem>
                            <SelectItem value="019">019</SelectItem>
                          </SelectContent>
                        </Select>
                        <div className="relative flex-1">
                          <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <Input
                            className="pl-10"
                            value={formData.phoneNumber}
                            onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
                            placeholder="8829932"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="md:col-span-2">
                      <Label className="text-sm font-medium text-muted-foreground mb-2 block">
                        Handphone Number 2
                      </Label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          className="pl-10"
                          value={formData.phoneNumber2}
                          onChange={(e) => handleInputChange("phoneNumber2", e.target.value)}
                          placeholder="0138912020 (Eg. 0389212020)"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center pt-4">
                    <Button onClick={handleSaveProfile} className="px-8">
                      <Save className="mr-2 h-4 w-4" />
                      Save Profile
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </CollapsibleContent>
        </Collapsible>

        {/* Education & Qualification Details Section */}
        <Collapsible open={educationOpen} onOpenChange={setEducationOpen} className="mb-4">
          <CollapsibleTrigger asChild>
            <div className="flex items-center justify-between bg-primary text-primary-foreground px-4 py-3 rounded-lg cursor-pointer hover:bg-primary/90 transition-colors">
              <span className="font-medium">Click here for Education & Qualification Details</span>
              {educationOpen ? (
                <span className="text-sm font-medium">Hide</span>
              ) : (
                <span className="text-sm font-medium">Show</span>
              )}
            </div>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <Card className="rounded-t-none border-t-0 mt-0">
              <CardContent className="pt-6">
                <p className="text-muted-foreground text-center py-8">
                  Education and qualification details form will be displayed here.
                </p>
              </CardContent>
            </Card>
          </CollapsibleContent>
        </Collapsible>

        {/* Other Details Section */}
        <Collapsible open={otherOpen} onOpenChange={setOtherOpen} className="mb-4">
          <CollapsibleTrigger asChild>
            <div className="flex items-center justify-between bg-primary text-primary-foreground px-4 py-3 rounded-t-lg cursor-pointer hover:bg-primary/90 transition-colors">
              <span className="font-medium">Click here for Other Details</span>
              {otherOpen ? (
                <span className="text-sm font-medium">Hide</span>
              ) : (
                <span className="text-sm font-medium">Show</span>
              )}
            </div>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <Card className="rounded-t-none border-t-0">
              <CardContent className="pt-6">
                <div className="space-y-5">
                  <FormField
                    label="Monthly Household Income (Parents/Guardian) RM"
                    value={formData.householdIncome}
                    onChange={(v) => handleInputChange("householdIncome", v)}
                    placeholder="3,000.00"
                  />

                  <div className="space-y-2">
                    <Label className="text-sm font-medium text-muted-foreground">
                      Bantuan Sara Hidup Rakyat (BSHR) Recipients
                    </Label>
                    <RadioGroup
                      value={formData.bshrRecipient}
                      onValueChange={(v) => handleInputChange("bshrRecipient", v)}
                      className="flex gap-6"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="bshr-yes" />
                        <Label htmlFor="bshr-yes" className="cursor-pointer">Yes</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="bshr-no" />
                        <Label htmlFor="bshr-no" className="cursor-pointer">No</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm font-medium text-muted-foreground">
                      UNITEN Staff ID No.
                    </Label>
                    <Select
                      value={formData.staffId}
                      onValueChange={(v) => handleInputChange("staffId", v)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select staff ID" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="cfs0002">CFS0002 (Muhammad Adam Danial Bin Muha...)</SelectItem>
                        <SelectItem value="none">Not Applicable</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex justify-center pt-4">
                    <Button onClick={handleSaveOtherDetails} className="px-8">
                      <Save className="mr-2 h-4 w-4" />
                      Save Other Details
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </CollapsibleContent>
        </Collapsible>
      </div>
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

export default ApplicationDetails;
