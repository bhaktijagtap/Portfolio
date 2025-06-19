import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import {
  Mail,
  MapPin,
  Download,
  Linkedin,
  Github,
  Send,
  Code,
} from "lucide-react";

const contactInfo = [
  {
    title: "Email",
    subtitle: "Drop me a line anytime",
    value: "jagtapbhakti22@gmail.com",
    href: "mailto:jagtapbhakti22@gmail.com",
    icon: Mail,
    color: "var(--java-green)",
  },
  {
    title: "LinkedIn",
    subtitle: "Let's connect professionally",
    value: "linkedin.com/in/bhaktijagtap",
    href: "https://www.linkedin.com/in/bhaktijagtap",
    icon: Linkedin,
    color: "#0077b5",
  },
  {
    title: "GitHub",
    subtitle: "Check out my code",
    value: "github.com/bhaktijagtap",
    href: "https://github.com/bhaktijagtap",
    icon: Github,
    color: "#333",
  },
  {
    title: "HackerRank",
    subtitle: "View my coding skills",
    value: "hackerrank.com/bhaktijagtap",
    href: "https://www.hackerrank.com/bhaktijagtap",
    icon: Code,
    color: "#00ea64",
  },
  {
    title: "Location",
    subtitle: "Based in",
    value: "Pune, Maharashtra",
    href: null,
    icon: MapPin,
    color: "var(--java-orange)",
  },
];

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const { toast } = useToast();

  const contactMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const downloadResume = async () => {
    try {
      const response = await fetch("/api/resume");
      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "Bhakti_Jagtap_Resume.pdf";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
        toast({
          title: "Success",
          description: "Resume downloaded successfully!",
        });
      } else {
        throw new Error("Failed to download resume");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to download resume. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    contactMutation.mutate(formData);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ready to discuss opportunities or collaborate on projects? Let's
            connect!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="text-center card-hover h-full">
                <CardContent className="p-8">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white"
                    style={{ backgroundColor: info.color }}
                  >
                    <info.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {info.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{info.subtitle}</p>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="font-medium hover:underline"
                      style={{ color: info.color }}
                    >
                      {info.value}
                    </a>
                  ) : (
                    <span className="font-medium" style={{ color: info.color }}>
                      {info.value}
                    </span>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  Send me a message
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Input
                        placeholder="Your Name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        placeholder="Your Email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  <Input
                    placeholder="Subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                  />
                  <Textarea
                    placeholder="Your Message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    required
                  />
                  <Button
                    type="submit"
                    className="w-full bg-[var(--java-green)] hover:bg-[var(--spring-green)]"
                    disabled={contactMutation.isPending}
                  >
                    <Send className="w-4 h-4 mr-2" />
                    {contactMutation.isPending ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Social Links and Resume */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  Let's Work Together
                </h3>
                <p className="text-gray-600 mb-6">
                  Connect with me on social platforms or download my resume
                </p>
                <div className="flex items-center space-x-4">
                  <Button
                    size="icon"
                    className="bg-blue-600 hover:bg-blue-700"
                    asChild
                  >
                    <a href="#" title="LinkedIn Profile">
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button
                    size="icon"
                    className="bg-gray-800 hover:bg-gray-900"
                    asChild
                  >
                    <a href="#" title="GitHub Profile">
                      <Github className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button
                    onClick={downloadResume}
                    className="bg-[var(--java-green)] hover:bg-[var(--spring-green)] flex-1"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download Resume
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-[var(--java-green)] to-[var(--spring-green)] text-white">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4">
                  Ready for new opportunities
                </h3>
                <p className="opacity-90 mb-6">
                  I'm actively looking for Java Developer roles where I can
                  contribute to meaningful projects and grow my technical skills.
                </p>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                  <span className="text-sm">Available for hire</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
