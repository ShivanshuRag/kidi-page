import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Features from "./components/Features.jsx";
import Hero from "./components/Hero.jsx";
import HowItWorks from "./components/HowItWorks.jsx";
import Problem from "./components/Problem.jsx";
import Safety from "./components/Safety.jsx";
import Solution from "./components/Solution.jsx";
export function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-orange-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Hero />
        <Problem />
        <Solution />
        <Features />
        <HowItWorks />

        <Safety />
      </main>
      <Footer />
    </div>
  );
}

export default App;
