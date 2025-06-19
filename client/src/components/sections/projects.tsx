import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Online Voting System",
    period: "Feb - Apr 2024",
    description:
      "Built a secure and responsive web application for online voting with real-time vote counting and robust authentication system.",
    technologies: ["PHP", "HTML", "CSS", "JavaScript", "MySQL"],
    features: [
      "Implemented secure login/authentication system",
      "Real-time vote counting and results display",
      "Efficient backend storage and retrieval with MySQL",
    ],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    alt: "Web development responsive design",
  },
  {
    title: "Class Attendance Track System",
    period: "Aug - Sep 2024",
    description:
      "Developed comprehensive REST APIs to automate student attendance tracking with real-time validation and seamless integration capabilities.",
    technologies: [
      "Java",
      "Spring Boot",
      "Hibernate",
      "MySQL",
      "Maven",
      "Postman",
    ],
    features: [
      "Automated student attendance with REST APIs",
      "Real-time validation and data integrity",
      "Designed for education management system integration",
    ],
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    alt: "Java Spring Boot development",
  },
  {
    title: "Talkulator",
    period: "Apr 2025",
    description:
      "Created an innovative voice-activated calculator with speech recognition and text-to-speech features for enhanced accessibility.",
    technologies: ["HTML", "CSS", "JavaScript"],
    features: [
      "Voice-activated calculator with speech recognition",
      "Integrated text-to-speech functionality",
      "Enhanced usability through team collaboration",
    ],
    image:
      "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    alt: "Modern development office workspace",
  },
  {
    title: "BG-Color-Changer",
    period: "Feb 2025",
    description:
      "Built an interactive tool for dynamic background color changes with focus on simple user experience and responsive design.",
    technologies: ["HTML", "CSS", "JavaScript"],
    features: [
      "Dynamic background color changes via user input",
      "Simple and intuitive user experience",
      "Responsive design for all devices",
    ],
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    alt: "Colorful code development on laptop",
  },
];

const getTechColor = (tech: string) => {
  const colors: Record<string, string> = {
    PHP: "#777BB4",
    HTML: "#E34F26",
    CSS: "#1572B6",
    JavaScript: "#F7DF1E",
    MySQL: "#4479A1",
    Java: "#ED8B00",
    "Spring Boot": "#6DB33F",
    Hibernate: "#59666C",
    Maven: "#C71A36",
    Postman: "#FF6C37",
  };
  return colors[tech] || "#6B7280";
};

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A showcase of my development work and technical problem-solving
            skills
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden card-hover h-full">
                <img
                  src={project.image}
                  alt={project.alt}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {project.title}
                    </h3>
                    <span className="text-sm text-gray-500">
                      {project.period}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="text-white"
                        style={{ backgroundColor: getTechColor(tech) }}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>• {feature}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
