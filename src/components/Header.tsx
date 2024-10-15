import { navItems } from "@/lib/constants";
import { Button, IconButton } from "@radix-ui/themes";
import { Link } from "@tanstack/react-router";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-orange-600">SNC</span>
          </Link>
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-orange-600 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <Button asChild size={"4"}>
            <Link to="/apply">Apply Now</Link>
          </Button>
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <IconButton variant="soft">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </IconButton>
              </SheetTrigger>
              <SheetContent side="right" className="bg-white/70">
                <nav className="flex flex-col space-y-4 mt-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-gray-700 hover:text-orange-600 transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Button className="bg-orange-600 hover:bg-orange-700">
                    <Link href="/apply">Apply Now</Link>
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
