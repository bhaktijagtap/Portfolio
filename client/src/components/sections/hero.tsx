import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center gradient-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent font-extrabold">
                Bhakti Jagtap
              </span>
              <br />
              <span className="text-3xl sm:text-4xl lg:text-5xl font-semibold">
                Java Developer
              </span>
            </h1>
            <p className="text-xl mb-8 leading-relaxed opacity-90">
              Passionate about building robust backend systems with Spring Boot,
              Hibernate, and REST APIs. Ready to tackle real-world challenges
              and grow as a developer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => scrollToSection("projects")}
                className="bg-white text-[var(--java-green)] hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold text-center"
                size="lg"
              >
                View My Work
              </Button>
              <Button
                onClick={() => scrollToSection("contact")}
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-[var(--java-green)] px-8 py-3 rounded-lg font-semibold text-center"
                size="lg"
              >
                Get In Touch
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="bg-white bg-opacity-20 p-6 rounded-xl shadow-lg backdrop-blur-sm">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-white">
                  Available for hire
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
