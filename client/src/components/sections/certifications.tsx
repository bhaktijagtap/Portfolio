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
    image: "/attached_assets/1731501502331_1750311779583.jpeg",
  },
  {
    title: "Java + Spring Boot Certification",
    provider: "Udemy",
    year: "2024",
    description:
      "Advanced training in Java, Spring Boot, REST API development, MVC architecture, Security implementation, and Microservices.",
    icon: Award,
    gradient: "from-[var(--java-orange)] to-[var(--spring-orange)]",
    image: "/attached_assets/1737002647816_1750311835487.jpeg",
  },
  {
    title: "Professional Development Certificate",
    provider: "Industry Certification",
    year: "2024",
    description:
      "Professional certification demonstrating expertise in software development and industry best practices.",
    icon: Award,
    gradient: "from-purple-500 to-pink-500",
    image: "/attached_assets/DOC-20250619-WA0000__1750311916082",
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

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="card-hover h-full overflow-hidden bg-white shadow-lg">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={cert.image}
                    alt={`${cert.title} Certificate`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <cert.icon className="text-2xl mr-3 h-6 w-6" style={{ color: "var(--java-green)" }} />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{cert.title}</h3>
                      <p className="text-gray-600">{cert.provider}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{cert.description}</p>
                  <Badge 
                    className="text-white"
                    style={{ backgroundColor: "var(--java-green)" }}
                  >
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
