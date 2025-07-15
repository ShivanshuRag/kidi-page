import { VideoIcon, UsersIcon, BrainIcon } from "lucide-react";
export default function Solution() {
  return (
    <section className="py-16 bg-yellow-50 rounded-2xl p-8 my-8" id="solution">
      <h2 className="text-3xl brush-font font-bold text-center mb-12 text-gray-800 brush-heading">
        Our Solution: Kidi
      </h2>
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2">
          <img
            src="https://images.pexels.com/photos/774910/pexels-photo-774910.jpeg"
            alt="Caregiver interacting with child through video call"
            className="w-full h-auto rounded-xl shadow-lg"
          />
        </div>
        <div className="md:w-1/2">
          <div className="bg-white p-6 rounded-xl shadow-md mb-6">
            <div className="flex items-start gap-4">
              <div className="bg-orange-100 p-3 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                <VideoIcon className="h-6 w-6 text-orange-600" />
              </div>
              <div>
                <h3 className="text-xl brush-font font-semibold mb-2 text-gray-800 brush-underline">
                  Interactive Video Calls
                </h3>
                <p className="text-gray-600">
                  Instead of random content, connect your child with caring
                  individuals who will engage with them through meaningful
                  activities and conversations.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md mb-6">
            <div className="flex items-start gap-4">
              <div className="bg-yellow-100 p-3 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                <UsersIcon className="h-6 w-6 text-yellow-600" />
              </div>
              <div>
                <h3 className="text-xl brush-font font-semibold mb-2 text-gray-800 brush-underline">
                  Human Connection
                </h3>
                <p className="text-gray-600">
                  Provide your child with real human interaction rather than
                  passive content consumption, helping them develop social and
                  emotional skills.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-start gap-4">
              <div className="bg-orange-100 p-3 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                <BrainIcon className="h-6 w-6 text-orange-600" />
              </div>
              <div>
                <h3 className="text-xl brush-font font-semibold mb-2 text-gray-800 brush-underline">
                  Developmental Benefits
                </h3>
                <p className="text-gray-600">
                  Our caregivers engage children in age-appropriate activities
                  that promote learning, creativity, and healthy development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
