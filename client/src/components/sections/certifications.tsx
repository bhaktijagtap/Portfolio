import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, IdCard } from "lucide-react";

const certifications = [
  {
    title: "Full Stack Java Development",
    provider: "The Kiran Academy",
    year: "2025",
    description:
      "Comprehensive full-stack development training covering Java fundamentals, web technologies, and modern development practices.",
    icon: IdCard,
    gradient: "from-[var(--java-green)] to-[var(--spring-green)]",
  },
  {
    title: "Java + Spring Boot Certification",
    provider: "Udemy",
    year: "2024",
    description:
      "Advanced training in Java, Spring Boot, REST API development, MVC architecture, Security implementation, and Microservices.",
    icon: Award,
    gradient: "from-[var(--java-orange)] to-[var(--spring-orange)]",
  },
];

export function CertificationsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Certifications
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Professional certifications that validate my technical expertise
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card
                className={`card-hover h-full bg-gradient-to-r ${cert.gradient} text-white`}
              >
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <cert.icon className="text-2xl mr-4 h-8 w-8" />
                    <div>
                      <h3 className="text-xl font-semibold">{cert.title}</h3>
                      <p className="opacity-80">{cert.provider}</p>
                    </div>
                  </div>
                  <p className="opacity-90 mb-4">{cert.description}</p>
                  <Badge className="bg-white bg-opacity-20 text-white hover:bg-opacity-30">
                    {cert.year}
                  </Badge>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
