import {
  ShieldIcon,
  EyeIcon,
  BadgeCheckIcon,
  ClipboardCheckIcon,
} from "lucide-react";
export default function Safety() {
  return (
    <section className="py-16 bg-yellow-50 rounded-2xl p-8 my-8" id="safety">
      <h2 className="text-3xl brush-font font-bold text-center mb-4 text-gray-800 brush-heading">
        Safety & Trust
      </h2>
      <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
        We prioritize the safety and wellbeing of children above all else. Our
        platform incorporates multiple layers of security and verification.
      </p>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="flex items-start gap-4">
            <div className="bg-orange-100 p-3 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
              <ShieldIcon className="h-6 w-6 text-orange-600" />
            </div>
            <div>
              <h3 className="text-xl brush-font font-semibold mb-2 text-gray-800 brush-underline">
                Caregiver Verification
              </h3>
              <p className="text-gray-600 mb-4">
                All caregivers undergo a rigorous verification process:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 font-bold">✓</span>
                  <span>Identity verification</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 font-bold">✓</span>
                  <span>Criminal background checks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 font-bold">✓</span>
                  <span>Reference checks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 font-bold">✓</span>
                  <span>Training in child interaction</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="flex items-start gap-4">
            <div className="bg-yellow-100 p-3 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
              <EyeIcon className="h-6 w-6 text-yellow-600" />
            </div>
            <div>
              <h3 className="text-xl brush-font font-semibold mb-2 text-gray-800 brush-underline">
                Session Monitoring
              </h3>
              <p className="text-gray-600 mb-4">
                We ensure all interactions are safe and appropriate:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 font-bold">✓</span>
                  <span>Optional session recording (with consent)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 font-bold">✓</span>
                  <span>Parent monitoring capability</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 font-bold">✓</span>
                  <span>AI-assisted content monitoring</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 font-bold">✓</span>
                  <span>Easy reporting system</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="flex items-start gap-4">
            <div className="bg-orange-100 p-3 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
              <BadgeCheckIcon className="h-6 w-6 text-orange-600" />
            </div>
            <div>
              <h3 className="text-xl brush-font font-semibold mb-2 text-gray-800 brush-underline">
                Quality Assurance
              </h3>
              <p className="text-gray-600 mb-4">
                We maintain high standards for all interactions:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 font-bold">✓</span>
                  <span>Regular performance reviews</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 font-bold">✓</span>
                  <span>Parent feedback system</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 font-bold">✓</span>
                  <span>Ongoing caregiver training</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 font-bold">✓</span>
                  <span>Activity appropriateness guidelines</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="flex items-start gap-4">
            <div className="bg-yellow-100 p-3 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
              <ClipboardCheckIcon className="h-6 w-6 text-yellow-600" />
            </div>
            <div>
              <h3 className="text-xl brush-font font-semibold mb-2 text-gray-800 brush-underline">
                Privacy Protection
              </h3>
              <p className="text-gray-600 mb-4">
                We protect personal information and data:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 font-bold">✓</span>
                  <span>End-to-end encrypted video calls</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 font-bold">✓</span>
                  <span>GDPR and COPPA compliant</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 font-bold">✓</span>
                  <span>Secure data storage</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 font-bold">✓</span>
                  <span>Limited data collection policy</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12 bg-white p-6 rounded-xl shadow-md">
        <h3 className="text-xl brush-font font-semibold mb-4 text-center text-gray-800">
          Our Safety Commitment
        </h3>
        <p className="text-gray-600 text-center">
          We continuously review and enhance our safety measures. Our team
          includes child development experts, security specialists, and parents
          who help ensure our platform remains safe, educational, and enjoyable
          for all children.
        </p>
      </div>
      <div className="mt-12 text-center">
        <h1 className="text-4xl md:text-5xl brush-font font-bold mb-6 bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
          Ek Achhi Suruat, Phone Ke Sath
        </h1>
      </div>
      <div className="mt-12 text-center">
        <button className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition-colors">
          <a href="https://forms.gle/aGRCDNbdTFsgKt1Q9" target="_blank">
            Click Here for Feedback and any Questions
          </a>
        </button>
      </div>
    </section>
  );
}
