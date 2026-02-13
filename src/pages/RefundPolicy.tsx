import { motion } from "framer-motion";
import { PageLayout } from "../components/PageLayout";
import { AlertCircle, CheckCircle, XCircle, Clock } from "lucide-react";

const refundCategories = [
  {
    icon: CheckCircle,
    title: "Eligible for Refund",
    items: [
      "Failed transactions where amount was debited",
      "Duplicate transactions",
      "System errors causing incorrect charges",
      "Cancelled orders where merchant hasn't processed",
    ],
    color: "text-green-500",
  },
  {
    icon: XCircle,
    title: "Not Eligible for Refund",
    items: [
      "Successfully completed transactions",
      "Mobile recharges (processed instantly)",
      "User errors in entering recipient details",
      "Transactions made to blocked/fraud accounts",
    ],
    color: "text-red-500",
  },
];

const timeline = [
  { step: "Complaint Filed", days: "Day 0" },
  { step: "Investigation", days: "1-3 Days" },
  { step: "Resolution", days: "3-5 Days" },
  { step: "Refund Credited", days: "5-7 Days" },
];

export default function RefundPolicy() {
  return (
    <PageLayout
      title="Refund Policy"
      subtitle="Understanding our refund process"
    >
      <div className="max-w-4xl mx-auto">
        {/* Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="ncash-card p-8 mb-8"
        >
          <div className="flex items-start gap-4">
            <AlertCircle className="w-6 h-6 text-ncash-bright shrink-0 mt-1" />
            <div>
              <h2 className="font-display text-xl font-bold mb-2">Refund Policy Overview</h2>
              <p className="text-muted-foreground">
                N-Cash is committed to fair and transparent refund practices. We process eligible 
                refunds within 7 business days. Please review the categories below to understand 
                what qualifies for a refund.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Refund Categories */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {refundCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="ncash-card p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <category.icon className={`w-6 h-6 ${category.color}`} />
                <h3 className="font-display text-lg font-semibold">{category.title}</h3>
              </div>
              <ul className="space-y-2">
                {category.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-muted-foreground text-sm">
                    <span className={`w-1.5 h-1.5 rounded-full mt-2 ${category.color} bg-current`} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="ncash-card p-8 mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <Clock className="w-6 h-6 text-ncash-bright" />
            <h3 className="font-display text-xl font-bold">Refund Timeline</h3>
          </div>
          <div className="flex flex-wrap justify-between items-center gap-4">
            {timeline.map((step, index) => (
              <div key={step.step} className="flex items-center gap-4">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full ncash-gradient-bg flex items-center justify-center text-white font-bold mb-2">
                    {index + 1}
                  </div>
                  <p className="font-medium text-sm">{step.step}</p>
                  <p className="text-muted-foreground text-xs">{step.days}</p>
                </div>
                {index < timeline.length - 1 && (
                  <div className="hidden md:block w-12 h-0.5 bg-border" />
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* How to Request */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="ncash-card p-8"
        >
          <h3 className="font-display text-xl font-bold mb-4">How to Request a Refund</h3>
          <ol className="space-y-4 text-muted-foreground">
            <li className="flex gap-3">
              <span className="ncash-gradient-bg text-white w-6 h-6 rounded-full flex items-center justify-center text-sm shrink-0">1</span>
              Open the N-Cash app and go to Transaction History
            </li>
            <li className="flex gap-3">
              <span className="ncash-gradient-bg text-white w-6 h-6 rounded-full flex items-center justify-center text-sm shrink-0">2</span>
              Select the transaction you want to dispute
            </li>
            <li className="flex gap-3">
              <span className="ncash-gradient-bg text-white w-6 h-6 rounded-full flex items-center justify-center text-sm shrink-0">3</span>
              Tap "Report Issue" and describe your problem
            </li>
            <li className="flex gap-3">
              <span className="ncash-gradient-bg text-white w-6 h-6 rounded-full flex items-center justify-center text-sm shrink-0">4</span>
              Our team will investigate and update you within 3 business days
            </li>
          </ol>
        </motion.div>
      </div>
    </PageLayout>
  );
}
