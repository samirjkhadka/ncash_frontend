import { motion } from "framer-motion";
import { PageLayout } from "../components/PageLayout";

const sections = [
  {
    title: "Information We Collect",
    content: `We collect information you provide directly, including:
    • Personal identification (name, date of birth, citizenship number)
    • Contact information (phone number, email, address)
    • Financial information (bank account details, transaction history)
    • Device information (device ID, IP address, app version)
    • Usage data (features used, transaction patterns)`,
  },
  {
    title: "How We Use Your Information",
    content: `Your information is used to:
    • Provide and improve our services
    • Process transactions and send notifications
    • Verify your identity and prevent fraud
    • Comply with legal and regulatory requirements
    • Communicate about products, services, and promotions
    • Analyze and improve user experience`,
  },
  {
    title: "Information Sharing",
    content: `We may share your information with:
    • Banking and financial partners (for transactions)
    • Regulatory authorities (as required by law)
    • Service providers (for app functionality)
    • We never sell your personal information to third parties`,
  },
  {
    title: "Data Security",
    content: `We protect your data through:
    • 256-bit SSL encryption for all transmissions
    • Secure data centers with 24/7 monitoring
    • Regular security audits and penetration testing
    • Employee access controls and training
    • Compliance with Nepal Rastra Bank guidelines`,
  },
  {
    title: "Your Rights",
    content: `You have the right to:
    • Access your personal data
    • Correct inaccurate information
    • Request deletion of your account
    • Opt out of marketing communications
    • Lodge a complaint with regulatory authorities`,
  },
  {
    title: "Data Retention",
    content: `We retain your data for:
    • Active accounts: As long as your account is active
    • Closed accounts: Data deleted after legal retention period
    • Marketing preferences: Until you opt out`,
  },
];

export default function PrivacyPolicy() {
  return (
    <PageLayout
      title="Privacy Policy"
      subtitle="How we protect and use your information"
    >
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="ncash-card p-6 mb-8 border-ncash-bright/20"
        >
          <p className="text-muted-foreground text-sm">
            <strong>Last Updated:</strong> This policy will be effective from N-Cash launch date.
            <br />
            <strong>Effective Date:</strong> Coming Soon
          </p>
        </motion.div>

        <div className="space-y-8">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="ncash-card p-6"
            >
              <h2 className="font-display text-xl font-bold mb-4 ncash-gradient-text">
                {section.title}
              </h2>
              <div className="text-muted-foreground whitespace-pre-line">
                {section.content}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 text-center text-muted-foreground text-sm"
        >
          For questions about this policy, contact us at info@himalpay.com.np
        </motion.div>
      </div>
    </PageLayout>
  );
}
