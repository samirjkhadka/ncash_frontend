import { motion } from "framer-motion";

import { Shield, FileCheck, Scale, Eye } from "lucide-react";
import { PageLayout } from "../components/PageLayout";

const complianceAreas = [
  {
    icon: Shield,
    title: "Nepal Rastra Bank Regulations",
    description: "N-Cash operates under the Payment and Settlement Systems Act, 2019, and is fully compliant with NRB's guidelines for Payment Service Providers (PSPs).",
    items: [
      "Licensed by Nepal Rastra Bank",
      "Regular audits and inspections",
      "Capital adequacy requirements met",
      "Transaction reporting compliance",
    ],
  },
  {
    icon: FileCheck,
    title: "KYC/AML Compliance",
    description: "We follow strict Know Your Customer and Anti-Money Laundering protocols to prevent financial crimes.",
    items: [
      "Identity verification for all users",
      "Transaction monitoring systems",
      "Suspicious activity reporting",
      "Risk-based customer due diligence",
    ],
  },
  {
    icon: Scale,
    title: "Consumer Protection",
    description: "We prioritize customer rights and fair practices in all our operations.",
    items: [
      "Transparent fee disclosure",
      "Dispute resolution mechanism",
      "Data protection measures",
      "Clear terms and conditions",
    ],
  },
  {
    icon: Eye,
    title: "Data Privacy",
    description: "Your personal information is protected according to Nepal's data protection standards.",
    items: [
      "Encrypted data storage",
      "Limited data access",
      "No unauthorized sharing",
      "Regular security audits",
    ],
  },
];

export default function Compliance() {
  return (
    <PageLayout
      title="Compliance"
      subtitle="Our commitment to regulatory standards"
    >
      <div className="max-w-4xl mx-auto">
        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="ncash-card p-8 mb-12 text-center"
        >
          <h2 className="font-display text-2xl font-bold mb-4">
            Regulatory Excellence
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Himal Pay Pvt. Ltd. is committed to maintaining the highest standards of 
            regulatory compliance. We work closely with Nepal Rastra Bank and other 
            regulatory bodies to ensure safe, secure, and legal financial services.
          </p>
        </motion.div>

        {/* Compliance Areas */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {complianceAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="ncash-card p-6"
            >
              <div className="ncash-gradient-bg w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <area.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">{area.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{area.description}</p>
              <ul className="space-y-2">
                {area.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-ncash-bright" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="ncash-card p-8 text-center"
        >
          <h3 className="font-display text-xl font-bold mb-4">Certifications & Licenses</h3>
          <p className="text-muted-foreground mb-6">
            Our licenses and certifications will be displayed here upon official launch.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="px-4 py-2 bg-muted rounded-lg text-sm text-muted-foreground">
              NRB PSP License - Pending
            </div>
            <div className="px-4 py-2 bg-muted rounded-lg text-sm text-muted-foreground">
              PCI-DSS Compliance - In Progress
            </div>
            <div className="px-4 py-2 bg-muted rounded-lg text-sm text-muted-foreground">
              ISO 27001 - Planned
            </div>
          </div>
        </motion.div>
      </div>
    </PageLayout>
  );
}
