import { motion } from "framer-motion";
import { PageLayout } from "../components/PageLayout";
import { Wallet, ArrowRightLeft, Smartphone, Receipt, Building } from "lucide-react";

const chargeCategories = [
  {
    icon: Wallet,
    title: "Wallet Services",
    charges: [
      { service: "Account Creation", fee: "Free" },
      { service: "Load Money (Bank Transfer)", fee: "Free" },
      { service: "Load Money (Agent)", fee: "Free" },
      { service: "Wallet to Wallet Transfer", fee: "Free" },
      { service: "QR Payment to Merchant", fee: "Free" },
    ],
  },
  {
    icon: ArrowRightLeft,
    title: "Fund Transfers",
    charges: [
      { service: "Bank Transfer (Up to NPR 5,000)", fee: "NPR 10" },
      { service: "Bank Transfer (NPR 5,001 - 25,000)", fee: "NPR 25" },
      { service: "Bank Transfer (Above NPR 25,000)", fee: "NPR 50" },
      { service: "Instant Bank Transfer", fee: "NPR 75" },
    ],
  },
  {
    icon: Building,
    title: "Cash Services",
    charges: [
      { service: "Cash Out at Agent (Up to NPR 5,000)", fee: "0.5%" },
      { service: "Cash Out at Agent (Above NPR 5,000)", fee: "1%" },
      { service: "ATM Withdrawal", fee: "NPR 50 + Bank Charges" },
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile Top-up",
    charges: [
      { service: "Ncell Recharge", fee: "1%" },
      { service: "NTC Recharge", fee: "1%" },
      { service: "Smart Cell Recharge", fee: "1%" },
      { service: "Data Pack Purchase", fee: "1%" },
    ],
  },
  {
    icon: Receipt,
    title: "Bill Payments",
    charges: [
      { service: "Electricity (NEA)", fee: "Free" },
      { service: "Water (KUKL)", fee: "Free" },
      { service: "Internet Bills", fee: "Free" },
      { service: "TV Subscription", fee: "Free" },
      { service: "Government Payments", fee: "As per govt. rates" },
    ],
  },
];

export default function ServiceCharges() {
  return (
    <PageLayout
      title="Service Charges"
      subtitle="Transparent pricing for all N-Cash services"
    >
      <div className="max-w-4xl mx-auto">
        {/* Transparency Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="ncash-card p-6 mb-8 text-center border-ncash-bright/20"
        >
          <p className="text-ncash-bright font-medium mb-1">💰 No Hidden Fees</p>
          <p className="text-muted-foreground text-sm">
            All charges are displayed before you confirm any transaction. What you see is what you pay.
          </p>
        </motion.div>

        {/* Charge Categories */}
        <div className="space-y-6">
          {chargeCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="ncash-card overflow-hidden"
            >
              <div className="p-6 border-b border-border">
                <div className="flex items-center gap-3">
                  <div className="ncash-gradient-bg p-3 rounded-xl">
                    <category.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-display text-lg font-semibold">{category.title}</h3>
                </div>
              </div>
              <div className="divide-y divide-border">
                {category.charges.map((charge) => (
                  <div
                    key={charge.service}
                    className="flex justify-between items-center px-6 py-4 hover:bg-muted/30 transition-colors"
                  >
                    <span className="text-muted-foreground">{charge.service}</span>
                    <span className={`font-medium ${charge.fee === 'Free' ? 'text-green-500' : ''}`}>
                      {charge.fee}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 text-center text-muted-foreground text-sm"
        >
          <p>
            * Fees are subject to change. Always check the app for current rates before confirming transactions.
          </p>
          <p className="mt-2">
            * Third-party charges (bank fees, government taxes) may apply separately.
          </p>
        </motion.div>
      </div>
    </PageLayout>
  );
}
