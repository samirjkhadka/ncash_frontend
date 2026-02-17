import { motion } from "framer-motion";

import { Briefcase, MapPin, Clock,  } from "lucide-react";
import { PageLayout } from "../components/PageLayout";
//import { Button } from "../components/ui/button";


const openings = [
  {
    title: "Software Engineer",
    department: "Engineering",
    location: "Kathmandu",
    type: "Full-time",
    description: "Build and maintain our mobile and web applications using modern technologies.",
  },
  {
    title: "Agent Relationship Manager",
    department: "Operations",
    location: "Multiple Locations",
    type: "Full-time",
    description: "Expand and manage our agent network across Nepal's districts.",
  },
  {
    title: "Customer Support Specialist",
    department: "Support",
    location: "Kathmandu",
    type: "Full-time",
    description: "Provide exceptional support to our users in Nepali and English.",
  },
  {
    title: "Marketing Executive",
    department: "Marketing",
    location: "Kathmandu",
    type: "Full-time",
    description: "Drive brand awareness and user acquisition campaigns.",
  },
];

const benefits = [
  "Competitive salary packages",
  "Health insurance coverage",
  "Professional development opportunities",
  "Flexible work arrangements",
  "Festival bonuses",
  "Team building activities",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Careers() {
  return (
    <PageLayout
      title="Careers"
      subtitle="Join us in building Nepal's financial future"
    >
      <div className="max-w-4xl mx-auto">
        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="ncash-card p-8 mb-12 text-center"
        >
          <h2 className="font-display text-2xl font-bold mb-4">
            We're Hiring for Our Launch!
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            As N-Cash prepares to launch, we're building a passionate team dedicated to 
            transforming Nepal's payment landscape. Be part of something revolutionary.
          </p>
        </motion.div>

        {/* Open Positions */}
        <h3 className="font-display text-2xl font-bold mb-6">Open Positions</h3>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-4 mb-12"
        >
          {openings.map((job) => (
            <motion.div
              key={job.title}
              variants={itemVariants}
              className="ncash-card p-6 hover:border-ncash-bright/30 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h4 className="font-display text-lg font-semibold mb-2">{job.title}</h4>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Briefcase className="w-4 h-4" /> {job.department}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" /> {job.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" /> {job.type}
                    </span>
                  </div>
                  <p className="text-muted-foreground mt-2">{job.description}</p>
                </div>
                {/* <Button className="ncash-gradient-bg shrink-0">
                  <Send className="w-4 h-4 mr-2" /> Apply
                </Button> */}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="ncash-card p-8"
        >
          <h3 className="font-display text-2xl font-bold mb-6">Why Work With Us?</h3>
          <div className="grid sm:grid-cols-2 gap-3">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-center gap-2 text-muted-foreground">
                <div className="w-2 h-2 rounded-full bg-ncash-bright" />
                {benefit}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </PageLayout>
  );
}
