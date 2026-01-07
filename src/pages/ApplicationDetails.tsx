import { useState } from "react";
import { Link } from "react-router-dom";
import { User, Save, CheckCircle2, Circle, ChevronLeft, ChevronRight, Home } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/hooks/use-toast";
import heroImage from "@/assets/hero-library.jpg";

const ApplicationDetails = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

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
    secondarySchoolType: "",
    secondarySchoolName: "",
    highestQualification: "",
    yearOfHighestQualification: "",
    yearOfSPM: "",
    noDisciplinaryRecord: false,
  });

  const handleInputChange = (field: string, value: string | boolean) => {
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

  const handleSaveEducationDetails = () => {
    toast({
      title: "Education Details Saved",
      description: "Your education and qualification details have been saved successfully.",
    });
  };

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else if (currentStep === 3) {
      // Submit the form
      setIsSubmitted(true);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const steps = [
    {
      number: 1,
      title: "Personal Details",
      completed: currentStep > 1,
    },
    {
      number: 2,
      title: "Education & Qualification",
      completed: currentStep > 2,
    },
    {
      number: 3,
      title: "Other Details",
      completed: false,
    },
  ];

  const userName = "testing";
  const applicantId = "902467";
  const intake = "January 2026";

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
        {/* Success Page */}
        {isSubmitted ? (
          <Card className="shadow-elegant">
            <CardContent className="pt-12 pb-12">
              <div className="flex flex-col items-center justify-center text-center py-8">
                <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center mb-6 animate-in zoom-in duration-500">
                  <CheckCircle2 className="w-12 h-12 text-green-600" />
                </div>
                <Badge variant="default" className="px-4 py-2 text-sm mb-4">
                  Application ID: {applicantId}
                </Badge>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Application Submitted Successfully!
                </h2>
                <p className="text-muted-foreground text-lg max-w-md mb-6">
                  Thank you! Your application has been submitted successfully. We will contact you soon regarding your application.
                </p>
                <Button asChild className="flex items-center gap-2">
                  <Link to="/">
                    <Home className="h-4 w-4" />
                    Return Home
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ) : (
          <>
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

        {/* Progress Indicator */}
        <Card className="mb-6 shadow-elegant">
          <CardContent className="pt-6 pb-6">
            <div className="flex flex-col items-center">
              <div className="flex items-start justify-between w-full max-w-2xl mx-auto relative">
                {/* Step Circles */}
                {steps.map((step, index) => (
                  <div
                    key={step.number}
                    className="flex flex-col items-center flex-1 relative z-10"
                  >
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 shrink-0 ${
                        currentStep === step.number
                          ? "bg-primary text-primary-foreground ring-4 ring-primary/20"
                          : step.completed
                          ? "bg-primary/80 text-primary-foreground"
                          : "bg-muted border-2 border-muted-foreground/30 text-muted-foreground"
                      }`}
                    >
                      {step.completed ? (
                        <CheckCircle2 className="w-6 h-6" />
                      ) : (
                        <span className="text-sm font-semibold">{step.number}</span>
                      )}
                    </div>
                    <span
                      className={`mt-2 text-xs md:text-sm font-medium text-center px-2 max-w-[120px] leading-tight ${
                        currentStep === step.number
                          ? "text-primary font-semibold"
                          : step.completed
                          ? "text-primary"
                          : "text-muted-foreground"
                      }`}
                      style={{
                        wordWrap: 'break-word',
                        overflowWrap: 'break-word',
                        lineHeight: '1.4',
                      }}
                    >
                      {step.title}
                    </span>
                  </div>
                ))}

                {/* First Connecting Line - Between Step 1 and Step 2 */}
                <div
                  className={`absolute top-5 h-0.5 transition-colors duration-300 ${
                    steps[0].completed ? "bg-primary" : "bg-muted"
                  }`}
                  style={{
                    left: 'calc(16.666% + 20px)',
                    width: 'calc(33.333% - 40px)',
                  }}
                />

                {/* Second Connecting Line - Between Step 2 and Step 3 */}
                <div
                  className={`absolute top-5 h-0.5 transition-colors duration-300 ${
                    steps[1].completed ? "bg-primary" : "bg-muted"
                  }`}
                  style={{
                    left: 'calc(50% + 20px)',
                    width: 'calc(33.333% - 40px)',
                  }}
                />
              </div>
              <div className="mt-4 text-sm text-muted-foreground">
                Step {currentStep} of {steps.length}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Wizard Form Steps */}
        <Card className="shadow-elegant">
          <CardContent className="pt-6">
            {/* Step 1: Personal Details */}
            {currentStep === 1 && (
              <div className="space-y-5 animate-in fade-in-0 slide-in-from-right-4 duration-300">
                <div className="mb-6">
                  <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-2">
                    Personal Details
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Please provide your personal information below.
                  </p>
                </div>

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
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    label="Handphone Number"
                    value={formData.phoneNumber}
                    onChange={(v) => handleInputChange("phoneNumber", v)}
                    placeholder="0138912020 (Eg. 0389212020)"
                  />
                  <FormField
                    label="Handphone Number 2"
                    value={formData.phoneNumber2}
                    onChange={(v) => handleInputChange("phoneNumber2", v)}
                    placeholder="0138912020 (Eg. 0389212020)"
                  />
                </div>
              </div>
            )}

            {/* Step 2: Education & Qualification Details */}
            {currentStep === 2 && (
              <div className="space-y-5 animate-in fade-in-0 slide-in-from-right-4 duration-300">
                <div className="mb-6">
                  <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-2">
                    Education & Qualification Details
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Please provide your education and qualification information.
                  </p>
                </div>

                {/* Secondary School Type */}
                <div className="space-y-2">
                  <Label className="text-sm font-medium text-muted-foreground">
                    Secondary School Type :
                  </Label>
                  <Select
                    value={formData.secondarySchoolType}
                    onValueChange={(v) => handleInputChange("secondarySchoolType", v)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select secondary school type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="national-public">National Public School</SelectItem>
                      <SelectItem value="national-religious">National Religious School</SelectItem>
                      <SelectItem value="chinese-independent">Chinese Independent School</SelectItem>
                      <SelectItem value="tamil-school">Tamil School</SelectItem>
                      <SelectItem value="private">Private School</SelectItem>
                      <SelectItem value="international">International School</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Secondary School Name */}
                <FormField
                  label="Secondary School Name :"
                  value={formData.secondarySchoolName}
                  onChange={(v) => handleInputChange("secondarySchoolName", v)}
                  placeholder="Enter secondary school name"
                />

                {/* Highest Qualification to Apply */}
                <div className="space-y-2">
                  <Label className="text-sm font-medium text-muted-foreground">
                    Highest Qualification to Apply :
                  </Label>
                  <Select
                    value={formData.highestQualification}
                    onValueChange={(v) => handleInputChange("highestQualification", v)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select highest qualification" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="spm">SPM</SelectItem>
                      <SelectItem value="o-level">O-Level</SelectItem>
                      <SelectItem value="svm">SVM</SelectItem>
                      <SelectItem value="stpm">STPM</SelectItem>
                      <SelectItem value="a-level">A-Level</SelectItem>
                      <SelectItem value="diploma">Diploma</SelectItem>
                      <SelectItem value="degree">Degree</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Year of Highest Qualification */}
                <div className="space-y-2">
                  <Label className="text-sm font-medium text-muted-foreground">
                    Year of Highest Qualification :
                  </Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="number"
                      className="pl-10"
                      value={formData.yearOfHighestQualification}
                      onChange={(e) => handleInputChange("yearOfHighestQualification", e.target.value)}
                      placeholder="2019"
                      min="1980"
                      max="2030"
                    />
                  </div>
                </div>

                {/* Year of SPM/O-Level/SVM */}
                <div className="space-y-2">
                  <Label className="text-sm font-medium text-muted-foreground">
                    Year of SPM/O-Level/SVM :
                  </Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="number"
                      className="pl-10"
                      value={formData.yearOfSPM}
                      onChange={(e) => handleInputChange("yearOfSPM", e.target.value)}
                      placeholder="2019"
                      min="1980"
                      max="2030"
                    />
                  </div>
                </div>

                {/* Disciplinary & Termination */}
                <div className="space-y-2">
                  <Label className="text-sm font-medium text-muted-foreground">
                    Disciplinary & Termination :
                  </Label>
                  <div className="flex items-start space-x-3 pt-2">
                    <Checkbox
                      id="disciplinary"
                      checked={formData.noDisciplinaryRecord}
                      onCheckedChange={(checked) =>
                        handleInputChange("noDisciplinaryRecord", checked === true)
                      }
                      className="mt-1"
                    />
                    <div className="flex-1">
                      <Label
                        htmlFor="disciplinary"
                        className="text-sm font-normal text-foreground cursor-pointer leading-relaxed"
                      >
                        I declare that I have no discipline and termination record from other institutions.
                      </Label>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Other Details */}
            {currentStep === 3 && (
              <div className="space-y-5 animate-in fade-in-0 slide-in-from-right-4 duration-300">
                <div className="mb-6">
                  <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-2">
                    Other Details
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Please provide additional information below.
                  </p>
                </div>

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
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between pt-6 mt-6 border-t border-border">
              <Button
                variant="outline"
                onClick={handlePrevious}
                disabled={currentStep === 1}
                className="flex items-center gap-2"
              >
                <ChevronLeft className="h-4 w-4" />
                Previous
              </Button>

              <div className="flex items-center gap-3">
                {currentStep === 1 && (
                  <Button onClick={handleSaveProfile} variant="ghost" className="flex items-center gap-2">
                    <Save className="h-4 w-4" />
                    Save
                  </Button>
                )}
                {currentStep === 2 && (
                  <Button onClick={handleSaveEducationDetails} variant="ghost" className="flex items-center gap-2">
                    <Save className="h-4 w-4" />
                    Save
                  </Button>
                )}
                {currentStep === 3 && (
                  <Button onClick={handleSaveOtherDetails} variant="ghost" className="flex items-center gap-2">
                    <Save className="h-4 w-4" />
                    Save
                  </Button>
                )}

                <Button
                  onClick={handleNext}
                  className="flex items-center gap-2"
                >
                  {currentStep === 3 ? "Submit" : "Next"}
                  {currentStep !== 3 && <ChevronRight className="h-4 w-4" />}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
        </>
        )}
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

export default ApplicationDetails;
