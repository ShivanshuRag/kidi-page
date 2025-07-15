import {
  SmileIcon,
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  LinkedinIcon,
} from "lucide-react";
export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-orange-600 to-yellow-500 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center space-x-2 mb-6 md:mb-0">
            <SmileIcon className="h-8 w-8 text-white" />
            <span className="text-2xl marker-font text-white">Kidi</span>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-yellow-200 transition-colors">
              <FacebookIcon className="h-6 w-6" />
            </a>
            <a href="#" className="hover:text-yellow-200 transition-colors">
              <TwitterIcon className="h-6 w-6" />
            </a>
            <a href="#" className="hover:text-yellow-200 transition-colors">
              <InstagramIcon className="h-6 w-6" />
            </a>
            <a href="#" className="hover:text-yellow-200 transition-colors">
              <LinkedinIcon className="h-6 w-6" />
            </a>
          </div>
        </div>
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="text-lg brush-font font-semibold mb-4 text-yellow-100">
              Platform
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#features"
                  className="text-white hover:text-yellow-200 transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  className="text-white hover:text-yellow-200 transition-colors"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="#safety"
                  className="text-white hover:text-yellow-200 transition-colors"
                >
                  Safety
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-yellow-200 transition-colors"
                >
                  Pricing
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg brush-font font-semibold mb-4 text-yellow-100">
              For Parents
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-white hover:text-yellow-200 transition-colors"
                >
                  Register Child
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-yellow-200 transition-colors"
                >
                  Find Caregivers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-yellow-200 transition-colors"
                >
                  Safety Measures
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-yellow-200 transition-colors"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg brush-font font-semibold mb-4 text-yellow-100">
              For Caregivers
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-white hover:text-yellow-200 transition-colors"
                >
                  Apply to Join
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-yellow-200 transition-colors"
                >
                  Requirements
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-yellow-200 transition-colors"
                >
                  Training
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-yellow-200 transition-colors"
                >
                  Support
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg brush-font font-semibold mb-4 text-yellow-100">
              Contact
            </h4>
            <ul className="space-y-2">
              <li className="text-white">info@kidi.com</li>
              <li className="text-white">+1 (555) 123-4567</li>
              <li className="text-white">123 Main Street, City</li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-yellow-200 transition-colors"
                >
                  Contact Form
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-yellow-400 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white mb-4 md:mb-0">
            © 2025 Kidi. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a
              href="#"
              className="text-white hover:text-yellow-200 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-white hover:text-yellow-200 transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-white hover:text-yellow-200 transition-colors"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
