import { SmileIcon } from "lucide-react";
export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <SmileIcon className="h-8 w-8 text-orange-500" />
          <span className="text-2xl marker-font bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
            Kidi
          </span>
        </div>
        <nav>
          <ul className="flex space-x-5 ">
            <li>
              <a
                href="#features"
                className="text-gray-600 hover:text-orange-600 transition-colors"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#how-it-works"
                className="text-gray-600 hover:text-orange-600 transition-colors"
              >
                How Works
              </a>
            </li>
            <li>
              <a
                href="#safety"
                className="text-gray-600 hover:text-orange-600 transition-colors"
              >
                Safety
              </a>
            </li>
            <li>
              <button className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition-colors">
                <a href="https://forms.gle/aGRCDNbdTFsgKt1Q9" target="_blank">
                  Get Started
                </a>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
