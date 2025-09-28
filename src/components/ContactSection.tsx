import { Mail, Linkedin, Github } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 text-center">
      <h2 className="mb-6 text-3xl font-bold">Let’s connect.</h2>
      <div className="flex justify-center gap-6">
        <a
          href="mailto:nunorgsantosdesigner@gmail.com"
          className="flex flex-col items-center hover:text-primary transition-colors"
        >
          <Mail className="h-8 w-8 mb-2" />
          <span className="text-sm">Email</span>
        </a>
        <a
          href="https://www.linkedin.com/in/nunorgsantos/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center hover:text-primary transition-colors"
        >
          <Linkedin className="h-8 w-8 mb-2" />
          <span className="text-sm">LinkedIn</span>
        </a>
      </div>
    </section>
  );
};
