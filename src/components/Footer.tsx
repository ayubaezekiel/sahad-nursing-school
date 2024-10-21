import { navItems } from "@/lib/constants";
import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Sahad Nursing College
            </h3>
            <p className="text-gray-300">
              Empowering future healthcare professionals
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-orange-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-300">
              Sahad Hospital, Plot 1756 Cadastral Zone E27, APo Resettlement.
              Opposite Amazing Grace Plaza
            </p>
            <p className="text-gray-300">Phone: (+234)7070111111</p>
            <p className="text-gray-300">
              Email: info@sahadcollegeonursing.org
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Sahad Nursing College. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
