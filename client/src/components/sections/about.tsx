import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">About Me</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                I'm a Java developer with hands-on experience in building
                backend systems using{" "}
                <span className="text-[var(--java-green)] font-semibold">
                  Spring Boot
                </span>
                ,{" "}
                <span className="text-[var(--java-green)] font-semibold">
                  Hibernate
                </span>
                , and{" "}
                <span className="text-[var(--java-green)] font-semibold">
                  REST APIs
                </span>
                .
              </p>
              <p>
                I'm looking for an opportunity where I can apply what I've
                learned, work on real-world problems, and keep growing as a
                developer. I'm quick to pick up new technologies, serious about
                clean code, and genuinely excited to be part of a team that
                builds things that matter.
              </p>
              <p>
                Based in{" "}
                <span className="font-semibold">Pune, Maharashtra</span>, I
                bring a fresh perspective combined with solid technical
                foundations and a passion for continuous learning.
              </p>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-8 flex items-center space-x-6"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-[var(--java-green)]">
                  4+
                </div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[var(--java-green)]">
                  2+
                </div>
                <div className="text-sm text-gray-600">Certifications</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[var(--java-green)]">
                  7.54
                </div>
                <div className="text-sm text-gray-600">CGPA</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
