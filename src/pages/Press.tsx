import { motion } from "framer-motion";

import { Newspaper, Download, Mail } from "lucide-react";
import { PageLayout } from "../components/PageLayout";
import { Button } from "../components/ui/button";

const pressReleases = [
  {
    date: "Coming Soon",
    title: "N-Cash Announces Official Launch Date",
    description:
      "Nepal's newest digital wallet prepares for nationwide rollout.",
  },
  {
    date: "Coming Soon",
    title: "Himal Pay Partners with Major Banks",
    description:
      "Strategic partnerships to expand financial inclusion across Nepal.",
  },
  {
    date: "Coming Soon",
    title: "N-Cash Agent Network Expands to 77 Districts",
    description: "Unprecedented coverage reaches remote Himalayan communities.",
  },
];

export default function Press() {
  return (
    <PageLayout title="Press & Media" subtitle="News and updates from N-Cash">
      <div className="max-w-4xl mx-auto">
        {/* Press Kit */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="ncash-card p-8 mb-12"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="font-display text-2xl font-bold mb-2">
                Press Kit
              </h2>
              <p className="text-muted-foreground">
                Download our brand assets, logos, and media resources.
              </p>
            </div>
            <Button className="ncash-gradient-bg">
              <Download className="w-4 h-4 mr-2" /> Download Press Kit
            </Button>
          </div>
        </motion.div>

        {/* Press Releases */}
        <h3 className="font-display text-2xl font-bold mb-6">Press Releases</h3>
        <div className="space-y-4 mb-12">
          {pressReleases.map((release, index) => (
            <motion.div
              key={release.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="ncash-card p-6"
            >
              <div className="flex items-start gap-4">
                <div className="ncash-gradient-bg p-3 rounded-xl shrink-0">
                  <Newspaper className="w-5 h-5 text-white" />
                </div>
                <div>
                  <span className="text-sm text-ncash-bright font-medium">
                    {release.date}
                  </span>
                  <h4 className="font-display text-lg font-semibold mt-1">
                    {release.title}
                  </h4>
                  <p className="text-muted-foreground mt-1">
                    {release.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Media Contact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="ncash-card p-8 text-center"
        >
          <Mail className="w-12 h-12 text-ncash-bright mx-auto mb-4" />
          <h3 className="font-display text-xl font-bold mb-2">
            Media Inquiries
          </h3>
          <p className="text-muted-foreground mb-4">
            For press inquiries, please contact our media team.
          </p>
          <p className="text-ncash-bright font-medium">press@ncash.com.np</p>
        </motion.div>
      </div>
    </PageLayout>
  );
}
