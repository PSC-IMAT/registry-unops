import { SectionTabsBlock, sectionTabsExamples } from "@/registry/onu/blocks/section-tabs";

export const sectionTabs = {
  name: "section-tabs",
  components: {
    SectionTabsDemo: (
      <SectionTabsBlock
        {...(sectionTabsExamples && sectionTabsExamples[0]
          ? sectionTabsExamples[0]
          : {
              title: "Project Impact",
              tabs: [
                {
                  id: "economic",
                  title: "Economic",
                  content:
                    "Infrastructure investments generated $2.4B in economic activity, created 87,000 jobs, and increased regional GDP by 2.3%. Local procurement policies ensured 65% of spending benefited domestic suppliers.",
                },
                {
                  id: "social",
                  title: "Social",
                  content:
                    "Improved access to essential services for 12.4M people. Healthcare response times reduced by 40% in rural areas. Educational facilities upgraded in 230 communities.",
                },
                {
                  id: "environmental",
                  title: "Environmental",
                  content:
                    "Carbon emissions reduced by 1.2M tons annually through renewable energy projects. Protected 45,000 hectares of critical habitat through sustainable development practices.",
                },
              ],
            })}
      />
    ),
  },
};
