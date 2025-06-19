import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  SiSpring,
  SiSpringboot,
  SiHibernate,
  SiHtml5,
  SiCss3,
  SiAngular,
  SiBootstrap,
  SiGit,
  SiGithub,
  SiPostman,
  SiMysql,
} from "react-icons/si";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Java", icon: null, color: "#ED8B00" },
      { name: "OOP", icon: null, color: "#374151" },
    ],
  },
  {
    title: "Web Development",
    skills: [
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: SiCss3, color: "#1572B6" },
      { name: "Angular", icon: SiAngular, color: "#DD0031" },
      { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
    ],
  },
  {
    title: "Frameworks & Technologies",
    skills: [
      { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
      { name: "Spring MVC", icon: SiSpring, color: "#6DB33F" },
      { name: "Hibernate", icon: SiHibernate, color: "#59666C" },
      { name: "JPA", icon: null, color: "#4F46E5" },
      { name: "JDBC", icon: null, color: "#10B981" },
      { name: "REST API", icon: null, color: "#EAB308" },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#181717" },
      { name: "VS Code", icon: null, color: "#007ACC" },
      { name: "Eclipse IDE", icon: null, color: "#2C2255" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      { name: "MySQL Workbench", icon: null, color: "#1976D2" },
    ],
  },
  {
    title: "Database",
    skills: [{ name: "MySQL", icon: SiMysql, color: "#4479A1" }],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Technical Skills
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Technologies and tools I work with to build robust applications
          </p>
        </motion.div>

        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.3,
                      delay: categoryIndex * 0.1 + skillIndex * 0.05,
                    }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    className="tech-badge"
                  >
                    <Badge
                      variant="secondary"
                      className="px-4 py-2 text-white font-medium"
                      style={{ backgroundColor: skill.color }}
                    >
                      <div className="flex items-center space-x-2">
                        {skill.icon && <skill.icon className="w-4 h-4" />}
                        <span>{skill.name}</span>
                      </div>
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
