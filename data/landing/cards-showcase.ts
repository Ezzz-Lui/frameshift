export interface CardShowcaseItem {
  title: string;
  description: string;
  content: string;
  linkHref: string;
  linkText: string;
}

export const cardShowcaseItems: CardShowcaseItem[] = [
  {
    title: "Challenges",
    description: "Explore our coding challenges",
    content: `Dive into a variety of coding challenges designed to test and enhance your skills. From beginner to advanced levels, there's something for everyone.`,
    linkHref: "/challenges",
    linkText: "Browse Challenges",
  },
  {
    title: "Frameworks",
    description: "Discover supported frameworks",
    content: `Find out which frameworks are supported for our coding challenges. First, we focus is on Vue and Django with plans to expand to others.`,
    linkHref: "/frameworks",
    linkText: "Browse Frameworks",
  },
  {
    title: "Built for engineering teams",
    description:
      "Assess candidates on their ability to work with existing codebases and frameworks",
    content: `Understand how developers approach refactoring and architectural decisions.`,
    linkHref: "/features",
    linkText: "Features",
  },
];
