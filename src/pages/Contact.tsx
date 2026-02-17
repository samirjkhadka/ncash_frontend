import { motion } from "framer-motion";

import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { PageLayout } from "../components/PageLayout";
import { Button } from "../components/ui/button";
import { Textarea } from "../components/ui/textarea";
import { Input } from "../components/ui/input";


const contactInfo = [
  {
    icon: MapPin,
    title: "Office Address",
    details: ["Himal Pay Pvt. Ltd.", "Kathmandu, Nepal"],
  },
  {
    icon: Phone,
    title: "Phone",
    details: [],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["support@ncash.com.np", "info@himalpay.com.np"],
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Sun-Fri: 10:00 AM - 6:00 PM", "Saturday: Closed"],
  },
];

export default function Contact() {
  return (
    <PageLayout
      title="Contact Us"
      subtitle="We'd love to hear from you"
    >
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="ncash-card p-8"
          >
            <h2 className="font-display text-2xl font-bold mb-6">Send us a Message</h2>
            <form className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Full Name</label>
                <Input placeholder="Your name" className="bg-muted/50" />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Email</label>
                <Input type="email" placeholder="your@email.com" className="bg-muted/50" />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Phone Number</label>
                <Input placeholder="+977 98XX-XXX-XXX" className="bg-muted/50" />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Subject</label>
                <Input placeholder="How can we help?" className="bg-muted/50" />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Message</label>
                <Textarea placeholder="Your message..." rows={4} className="bg-muted/50" />
              </div>
              <Button className="w-full ncash-gradient-bg">
                <Send className="w-4 h-4 mr-2" /> Send Message
              </Button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {contactInfo.map((info) => (
              <div key={info.title} className="ncash-card p-6">
                <div className="flex items-start gap-4">
                  <div className="ncash-gradient-bg p-3 rounded-xl shrink-0">
                    <info.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold mb-1">{info.title}</h3>
                    {info.details.map((detail) => (
                      <p key={detail} className="text-muted-foreground text-sm">{detail}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* Map Placeholder */}
            <div className="ncash-card p-6 h-48 flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <MapPin className="w-8 h-8 mx-auto mb-2 text-ncash-bright" />
                <p>Map coming soon</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </PageLayout>
  );
}
