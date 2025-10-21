import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import toast, { Toaster } from "react-hot-toast"

export const ContactSection = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          toast.success("Message sent successfully!");
          formRef.current.reset();
          setLoading(false);
        },
        (error) => {
          console.error(error);
          toast.error("Failed to send message. Try again later.");
          setLoading(false);
        }
      );
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl md:4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Looking for someone who loves to experiment, learn, and create with purpose?  
          That's me , a developer passionate about crafting AI-driven and user-focused projects.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div className="font-medium">
                  <h4>Email</h4>
                  <a
                    href="mailto:claytonkho@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    claytonkho@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div className="font-medium">
                  <h4>Phone</h4>
                  <a
                    href="tel:+628117751698"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +62 811 7751 698
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div className="font-medium">
                  <h4>Location</h4>
                  <span className="text-muted-foreground">Jakarta, Indonesia</span>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex space-x-4 justify-center items-center">
                <a href="https://www.linkedin.com/in/clayton-koh" target="_blank" className="hover:text-primary transition-colors">
                  <Linkedin />
                </a>
                <a href="https://www.instagram.com/claytonkoh/" target="_blank" className="hover:text-primary transition-colors">
                  <Instagram />
                </a>
                <a href="https://www.facebook.com/clayton.koh.3" target="_blank" className="hover:text-primary transition-colors">
                  <Facebook />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Send A Message</h3>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary"
                  placeholder="Clayton Koh"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary"
                  placeholder="claytonkho@mail.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  name="message"
                  rows="4"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello, I'd like to collaborate with you"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2",
                  loading && "opacity-50 cursor-not-allowed"
                )}
              >
                {loading ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
