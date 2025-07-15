import { VideoIcon, HeartIcon } from "lucide-react";
export default function Hero() {
  return (
    <section className="py-16 flex flex-col md:flex-row items-center gap-8">
      <div className="md:w-1/2">
        <h1 className="text-4xl md:text-5xl brush-font font-bold mb-6 bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
          Meaningful Screen Time for Children
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Transform crying and food refusal moments into joyful interactions.
          Connect children with caring individuals through video calls instead
          of exposing them to random content.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition-colors flex items-center justify-center gap-2">
            <VideoIcon className="h-5 w-5" />
            Join as Caregiver
          </button>
          <button className="bg-yellow-500 text-white px-6 py-3 rounded-full hover:bg-yellow-600 transition-colors flex items-center justify-center gap-2">
            <HeartIcon className="h-5 w-5" />
            Register Your Child
          </button>
        </div>
      </div>
      <div className="md:w-1/2 bg-white p-6 rounded-xl shadow-lg">
        <video
          src="/kidi-video.mp4"
          poster="/kidi-thumbnail.png"
          controls
          controlsList="nodownload"
          className="w-full h-auto rounded-xl shadow-md"
          preload="metadata"
        ></video>
      </div>
    </section>
  );
}
