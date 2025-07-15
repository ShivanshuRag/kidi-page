import { FrownIcon, SmartphoneIcon, AlertTriangleIcon } from "lucide-react";
export default function Problem() {
  return (
    <section className="py-16" id="problem">
      <h2 className="text-3xl brush-font font-bold text-center mb-12 text-gray-800 brush-heading">
        The Problem We're Solving
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="bg-red-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
            <FrownIcon className="h-8 w-8 text-red-500" />
          </div>
          <h3 className="text-xl brush-font font-semibold mb-3 text-gray-800">
            Crying & Tantrums
          </h3>
          <p className="text-gray-600">
            Parents often hand over phones to stop children from crying or
            throwing tantrums, creating a cycle of dependency on screens for
            emotional regulation.
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="bg-orange-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
            <SmartphoneIcon className="h-8 w-8 text-orange-500" />
          </div>
          <h3 className="text-xl brush-font font-semibold mb-3 text-gray-800">
            Screen Dependency
          </h3>
          <p className="text-gray-600">
            Children develop dependency on mobile phones for eating, sleeping,
            and other activities, leading to unhealthy screen habits from an
            early age.
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="bg-yellow-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
            <AlertTriangleIcon className="h-8 w-8 text-yellow-500" />
          </div>
          <h3 className="text-xl brush-font font-semibold mb-3 text-gray-800">
            Unmonitored Content
          </h3>
          <p className="text-gray-600">
            When given phones, children often consume random, unmonitored
            content that may be inappropriate or lacking educational value.
          </p>
        </div>
      </div>
    </section>
  );
}
