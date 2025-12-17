import { FaqBlock } from "@/registry/onu/blocks/faq";

const faqExamples = [
  {
    title: "Frequently Asked Questions",
    items: [
      {
        question: "How is the data collected and validated?",
        answer:
          "Data is collected through multiple sources including field surveys (n=3,420), satellite imagery analysis, government databases, and partner organization reports. All data points are cross-verified using at least two independent sources and undergo peer review by subject matter experts before publication.",
      },
      {
        question: "What geographic areas does this report cover?",
        answer:
          "The report covers 45 countries across Sub-Saharan Africa, with primary focus on infrastructure projects in 12 priority countries. Detailed regional breakdowns are available in the methodology section.",
      },
      {
        question: "How can I access the underlying data?",
        answer:
          "Raw datasets, methodology documentation, and analysis code are available through our data portal. Most datasets are published under Creative Commons licenses. For restricted datasets, contact our data team for access procedures.",
      },
      {
        question: "Who should I contact for questions about this report?",
        answer:
          "For general inquiries, contact info@unops.org. For technical questions about methodology or data, reach out to our research team at research@unops.org. Media inquiries should be directed to press@unops.org.",
      },
    ],
  },
];

export const faq = {
  name: "faq",
  components: {
    FaqDemo: <FaqBlock {...faqExamples[0]} />,
  },
};
