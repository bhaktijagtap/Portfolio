import { motion } from "framer-motion";
import { GraduationCap, Award, School } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const educationData = [
  {
    title: "Bachelor of Technology - Computer Science Engineering",
    institution: "Dr. Babasaheb Ambedkar Technological University (DBATU), Lonere",
    period: "2021 - 2024",
    score: "CGPA: 7.54",
    icon: GraduationCap,
    color: "var(--java-green)",
  },
  {
    title: "Diploma in Computer Engineering",
    institution: "Maharashtra State Board of Technical Education (MSBTE)",
    period: "2018 - 2021",
    score: "81.49%",
    icon: Award,
    color: "var(--spring-green)",
  },
  {
    title: "Secondary School Certificate (SSC)",
    institution: "Maharashtra State Board",
    period: "2018",
    score: "86.40%",
    icon: School,
    color: "var(--java-orange)",
  },
];

export function EducationSection() {
  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Education</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            My academic journey in computer science and engineering
          </p>
        </motion.div>

        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="card-hover">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center text-white"
                        style={{ backgroundColor: edu.color }}
                      >
                        <edu.icon className="w-6 h-6" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {edu.title}
                      </h3>
                      <p
                        className="font-medium mb-2"
                        style={{ color: edu.color }}
                      >
                        {edu.institution}
                      </p>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                        <span className="text-gray-600">{edu.period}</span>
                        <Badge
                          style={{
                            backgroundColor: edu.color,
                            color: "white",
                          }}
                          className="mt-2 sm:mt-0"
                        >
                          {edu.score}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
