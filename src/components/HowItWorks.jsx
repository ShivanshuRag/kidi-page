import {
  UserPlusIcon,
  CalendarIcon,
  VideoIcon,
  MessageSquareIcon,
} from "lucide-react";
export default function HowItWorks() {
  return (
    <section
      className="py-16 bg-orange-50 rounded-2xl p-8 my-8"
      id="how-it-works"
    >
      <h2 className="text-3xl brush-font font-bold text-center mb-12 text-gray-800 brush-heading">
        How It Works
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <Step
          number="1"
          icon={<UserPlusIcon className="h-8 w-8 text-white" />}
          title="Create an Account"
          description="Sign up as a parent and create profiles for your children with their interests and needs."
          color="bg-orange-500"
        />
        <Step
          number="2"
          icon={<CalendarIcon className="h-8 w-8 text-white" />}
          title="Schedule or Request"
          description="Book sessions in advance or request immediate assistance when your child needs attention."
          color="bg-yellow-500"
        />
        <Step
          number="3"
          icon={<VideoIcon className="h-8 w-8 text-white" />}
          title="Connect via Video"
          description="Our platform connects your child with a caregiver through a secure video call."
          color="bg-orange-500"
        />
        <Step
          number="4"
          icon={<MessageSquareIcon className="h-8 w-8 text-white" />}
          title="Engage & Interact"
          description="The caregiver engages your child in conversation, games, stories, or educational activities."
          color="bg-yellow-500"
        />
      </div>
      <div className="mt-16 bg-white p-8 rounded-xl shadow-md">
        <h3 className="text-2xl brush-font font-semibold mb-4 text-center text-gray-800 brush-heading">
          For Caregivers
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-yellow-600">1</span>
            </div>
            <h4 className="text-lg brush-font font-medium mb-2 text-gray-800">
              Apply & Get Verified
            </h4>
            <p className="text-gray-600">
              Complete our thorough verification process including background
              checks.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-yellow-600">2</span>
            </div>
            <h4 className="text-lg brush-font font-medium mb-2 text-gray-800">
              Set Your Schedule
            </h4>
            <p className="text-gray-600">
              Indicate your availability and the age groups you prefer to work
              with.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-yellow-600">3</span>
            </div>
            <h4 className="text-lg brush-font font-medium mb-2 text-gray-800">
              Start Connecting
            </h4>
            <p className="text-gray-600">
              Begin accepting session requests and making a positive impact on
              children's lives.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
function Step({ number, icon, title, description, color }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div
        className={`${color} w-16 h-16 rounded-full flex items-center justify-center mb-4`}
      >
        {icon}
      </div>
      <h3 className="text-xl brush-font font-semibold mb-2 text-gray-800">
        {title}
      </h3>
      <p className="text-gray-600">{description}</p>
      <div className="mt-4 flex items-center justify-center">
        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
          <span className="font-bold text-gray-600">{number}</span>
        </div>
      </div>
    </div>
  );
}
