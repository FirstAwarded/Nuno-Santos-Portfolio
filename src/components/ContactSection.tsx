import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";

const contactLinks = [
  {
    icon: Mail,
    href: "mailto:hello@nuno.design",
    label: "Email",
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/nunosas",
    label: "LinkedIn",
  },
  {
    icon: Github,
    href: "https://github.com/nunosas",
    label: "GitHub",
  },
];

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 text-center">
      <h2 className="mb-6 text-3xl font-bold">Let&#39;s connect.</h2>
      <div className="flex justify-center gap-6">
        {contactLinks.map((link) => {
          const Icon = link.icon;
          return (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center hover:text-primary transition-colors"
            >
              <Icon className="h-8 w-8 mb-2" />
              <span className="text-sm">{link.label}</span>
            </a>
          );
        })}
      </div>
    </section>
  );
};
