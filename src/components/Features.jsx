import {
  CalendarIcon,
  ShieldIcon,
  BookOpenIcon,
  UserCheckIcon,
  ActivityIcon,
  StarIcon,
} from "lucide-react";
export default function Features() {
  return (
    <section className="py-16" id="features">
      <h2 className="text-3xl brush-font font-bold text-center mb-4 text-gray-800 brush-heading">
        Platform Features
      </h2>
      <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
        Our platform is designed with both children and caregivers in mind,
        providing a safe, engaging, and developmentally appropriate experience.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <FeatureCard
          icon={<CalendarIcon className="h-6 w-6 text-purple-600" />}
          title="Scheduling System"
          description="Book sessions in advance or connect with available caregivers immediately when needed."
          color="purple"
        />
        <FeatureCard
          icon={<ShieldIcon className="h-6 w-6 text-blue-600" />}
          title="Safety First"
          description="All caregivers undergo thorough background checks and are continuously monitored for quality."
          color="blue"
        />
        <FeatureCard
          icon={<BookOpenIcon className="h-6 w-6 text-green-600" />}
          title="Educational Content"
          description="Age-appropriate activities and interactions that promote learning and development."
          color="green"
        />
        <FeatureCard
          icon={<UserCheckIcon className="h-6 w-6 text-orange-600" />}
          title="Caregiver Matching"
          description="Find caregivers who match your child's interests, personality, and needs."
          color="orange"
        />
        <FeatureCard
          icon={<ActivityIcon className="h-6 w-6 text-red-600" />}
          title="Activity Tracking"
          description="Monitor your child's engagement and the activities they participate in during sessions."
          color="red"
        />
        <FeatureCard
          icon={<StarIcon className="h-6 w-6 text-yellow-600" />}
          title="Feedback System"
          description="Rate sessions and provide feedback to continuously improve the experience."
          color="yellow"
        />
      </div>
    </section>
  );
}
function FeatureCard({ icon, title, description, color }) {
  const colorMap = {
    purple: "bg-purple-100",
    blue: "bg-blue-100",
    green: "bg-green-100",
    orange: "bg-orange-100",
    red: "bg-red-100",
    yellow: "bg-yellow-100",
  };
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
      <div
        className={`${colorMap[color]} p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4`}
      >
        {icon}
      </div>
      <h3 className="text-xl brush-font font-semibold mb-3 text-gray-800">
        {title}
      </h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
