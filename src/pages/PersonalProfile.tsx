import { Link, useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableHead, TableHeader, TableRow, TableCell } from "@/components/ui/table";
import Footer from "@/components/layout/Footer";

type PersonProfileRow = {
  name: string;
  nricOrPassport: string;
  handphone: string;
  address: string;
  postcode: string;
  town: string;
  state: string;
  country: string;
};

const demoRows: PersonProfileRow[] = [
  {
    name: "John Doe",
    nricOrPassport: "900101-10-1234",
    handphone: "0123456789",
    address: "123 Example Street",
    postcode: "50000",
    town: "Kuala Lumpur",
    state: "WILAYAH PERSEKUTUAN",
    country: "Malaysia",
  },
];

const PersonalProfile = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const userEmail = "john.doe@example.com";
  const isPrivacyPage = location.pathname === "/privacy";

  const handleSignout = () => {
    // Demo: redirect to our sign-in page
    navigate("/apply/foundation-malaysian");
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Lightweight header (matches screenshot layout) */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 h-14 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link to="/" className="text-base font-semibold text-foreground">
              UnitenSkills
            </Link>
            <nav className="hidden sm:flex items-center gap-4 text-sm">
              <Link
                to="/privacy"
                className={isPrivacyPage ? "text-foreground font-medium" : "text-muted-foreground hover:text-primary transition-colors"}
              >
                Privacy
              </Link>
              <span className="text-muted-foreground">/</span>
              <span className="text-foreground font-medium">Personal Profile</span>
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
        <div className="container mx-auto px-4 py-10">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground text-center mb-8">
            Personal Profile
          </h1>

          <Card className="border shadow-sm">
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="whitespace-nowrap">Name</TableHead>
                    <TableHead className="whitespace-nowrap">NRIC No/Passport Number</TableHead>
                    <TableHead className="whitespace-nowrap">Handphone</TableHead>
                    <TableHead className="whitespace-nowrap">Address</TableHead>
                    <TableHead className="whitespace-nowrap">Postcode</TableHead>
                    <TableHead className="whitespace-nowrap">Town</TableHead>
                    <TableHead className="whitespace-nowrap">State</TableHead>
                    <TableHead className="whitespace-nowrap">Country</TableHead>
                    <TableHead className="w-[96px]" />
                  </TableRow>
                </TableHeader>

                <TableBody>
                  {demoRows.map((row) => (
                    <TableRow key={row.nricOrPassport}>
                      <TableCell className="whitespace-nowrap">{row.name}</TableCell>
                      <TableCell className="whitespace-nowrap">{row.nricOrPassport}</TableCell>
                      <TableCell className="whitespace-nowrap">{row.handphone}</TableCell>
                      <TableCell className="whitespace-nowrap">{row.address}</TableCell>
                      <TableCell className="whitespace-nowrap">{row.postcode}</TableCell>
                      <TableCell className="whitespace-nowrap">{row.town}</TableCell>
                      <TableCell className="whitespace-nowrap">{row.state}</TableCell>
                      <TableCell className="whitespace-nowrap">{row.country}</TableCell>
                      <TableCell className="text-right">
                        <Button 
                          size="sm"
                          onClick={() => navigate("/edit-profile", { state: row })}
                        >
                          Edit
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PersonalProfile;

