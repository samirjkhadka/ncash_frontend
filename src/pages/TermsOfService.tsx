import { motion } from "framer-motion";
import { PageLayout } from "../components/PageLayout";

const sections = [
  {
    title: "1. Acceptance of Terms",
    content: `By downloading, installing, or using N-Cash, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.

These terms constitute a legally binding agreement between you and Himal Pay Pvt. Ltd., a company registered in Nepal.`,
  },
  {
    title: "2. Eligibility",
    content: `To use N-Cash, you must:
    • Be at least 16 years of age
    • Be a resident of Nepal with valid identification
    • Have a valid mobile phone number registered in Nepal
    • Complete our KYC (Know Your Customer) verification process`,
  },
  {
    title: "3. Account Registration",
    content: `You are responsible for:
    • Providing accurate and complete information
    • Maintaining the confidentiality of your PIN and credentials
    • All activities that occur under your account
    • Immediately notifying us of any unauthorized access`,
  },
  {
    title: "4. Services",
    content: `N-Cash provides the following services:
    • Digital wallet for storing funds
    • Fund transfers to other N-Cash users
    • Bank account transfers
    • Mobile top-ups and bill payments
    • Merchant payments via QR code
    
Services are subject to availability and may be modified at any time.`,
  },
  {
    title: "5. Transaction Limits",
    content: `Transaction limits apply based on your verification level:
    • Basic: NPR 50,000 per month
    • Verified: NPR 200,000 per month
    • Premium: NPR 500,000 per month
    
See our Transaction Limits page for detailed information.`,
  },
  {
    title: "6. Fees and Charges",
    content: `Fees apply to certain transactions as disclosed in our Service Charges page. We reserve the right to modify fees with 30 days' notice. Current fee schedule is available in the app and on our website.`,
  },
  {
    title: "7. Prohibited Activities",
    content: `You may not use N-Cash for:
    • Illegal activities or money laundering
    • Fraudulent transactions
    • Unauthorized commercial purposes
    • Any activity that violates Nepali law
    • Circumventing transaction limits`,
  },
  {
    title: "8. Limitation of Liability",
    content: `Himal Pay Pvt. Ltd. is not liable for:
    • Delays or failures due to circumstances beyond our control
    • Unauthorized transactions due to your negligence
    • Third-party service failures
    • Indirect, incidental, or consequential damages`,
  },
  {
    title: "9. Governing Law",
    content: `These terms are governed by the laws of Nepal. Any disputes shall be resolved through arbitration in Kathmandu, Nepal, in accordance with applicable Nepali law.`,
  },
];

export default function TermsOfService() {
  return (
    <PageLayout
      title="Terms of Service"
      subtitle="Please read these terms carefully"
    >
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="ncash-card p-6 mb-8 border-ncash-bright/20"
        >
          <p className="text-muted-foreground text-sm">
            <strong>Version:</strong> 1.0 (Pre-Launch)
            <br />
            <strong>Effective Date:</strong> Coming Soon
          </p>
        </motion.div>

        <div className="space-y-6">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="ncash-card p-6"
            >
              <h2 className="font-display text-lg font-bold mb-3 ncash-gradient-text">
                {section.title}
              </h2>
              <div className="text-muted-foreground whitespace-pre-line text-sm">
                {section.content}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
