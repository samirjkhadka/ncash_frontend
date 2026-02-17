import { motion } from "framer-motion";

import { AlertTriangle, Shield, Star } from "lucide-react";
import { PageLayout } from "../components/PageLayout";

const tiers = [
  {
    icon: Shield,
    name: "KYC Unverified",
    description: "Mobile number verified only",
    limits: [
      { type: "Wallet Balance", limit: "NPR 0" },
      { type: "Daily Transaction", limit: "NPR 0" },
      { type: "Monthly Transaction", limit: "NPR 0" },
      { type: "Single Transfer", limit: "NPR 0" },
    ],
    color: "bg-muted",
    textColor: "text-foreground",
  },
  {
    icon: Star,
    name: "KYC Verified",
    description: "Full KYC completed",
    limits: [
      { type: "Wallet Balance", limit: "NPR 50,000" },
      { type: "Daily Transaction", limit: "NPR 200,000" },
      { type: "Monthly Transaction", limit: "NPR 200,000" },
      { type: "Single Transfer", limit: "NPR 100,000" },
    ],
    color: "ncash-gradient-bg",
    textColor: "text-white",
    popular: true,
  }
];

const upgradeBenefits = [
  "Higher transaction limits",
  "Priority customer support",
  "Lower transaction fees",
  "Access to premium features",
];

export default function TransactionLimits() {
  return (
    <PageLayout
      title="Transaction Limits"
      subtitle="Understand your N-Cash account limits"
    >
      <div className="max-w-5xl mx-auto">
        {/* Info Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="ncash-card p-6 mb-8 border-ncash-bright/20 flex items-start gap-4"
        >
          <AlertTriangle className="w-6 h-6 text-ncash-bright shrink-0" />
          <div>
            <p className="font-medium mb-1">Why Transaction Limits?</p>
            <p className="text-muted-foreground text-sm">
              Transaction limits protect you from fraud and help us comply with Nepal Rastra Bank 
              regulations. Complete your KYC verification to enjoy higher limits.
            </p>
          </div>
        </motion.div>

        {/* Tiers */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`ncash-card overflow-hidden ${tier.popular ? 'ring-2 ring-ncash-bright' : ''}`}
            >
              {tier.popular && (
                <div className="ncash-gradient-bg text-white text-center py-1 text-sm font-medium">
                  Recommended
                </div>
              )}
              <div className={`p-6 ${tier.color} ${tier.textColor}`}>
                <tier.icon className="w-8 h-8 mb-3" />
                <h3 className="font-display text-xl font-bold">{tier.name}</h3>
                <p className={`text-sm ${tier.popular ? 'text-white/80' : 'text-muted-foreground'}`}>
                  {tier.description}
                </p>
              </div>
              <div className="p-6">
                <ul className="space-y-4">
                  {tier.limits.map((limit) => (
                    <li key={limit.type} className="flex justify-between items-center">
                      <span className="text-muted-foreground text-sm">{limit.type}</span>
                      <span className="font-semibold">{limit.limit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* How to Upgrade */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="ncash-card p-8"
        >
          <h3 className="font-display text-2xl font-bold mb-6">How to Upgrade Your Account</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold mb-4">Verification Requirements</h4>
              <ol className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="ncash-gradient-bg text-white w-6 h-6 rounded-full flex items-center justify-center text-sm shrink-0">1</span>
                  Upload a clear photo of your citizenship or passport
                </li>
                <li className="flex gap-3">
                  <span className="ncash-gradient-bg text-white w-6 h-6 rounded-full flex items-center justify-center text-sm shrink-0">2</span>
                  Take a selfie for facial verification
                </li>
                <li className="flex gap-3">
                  <span className="ncash-gradient-bg text-white w-6 h-6 rounded-full flex items-center justify-center text-sm shrink-0">3</span>
                  Provide your permanent address details
                </li>
                <li className="flex gap-3">
                  <span className="ncash-gradient-bg text-white w-6 h-6 rounded-full flex items-center justify-center text-sm shrink-0">4</span>
                  Verification completed within 24 hours
                </li>
              </ol>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Benefits of Upgrading</h4>
              <ul className="space-y-2">
                {upgradeBenefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-2 text-muted-foreground">
                    <div className="w-2 h-2 rounded-full bg-ncash-bright" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </PageLayout>
  );
}
