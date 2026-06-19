export type ServiceSlug =
  | "mvp-development"
  | "custom-software"
  | "ai-integration"
  | "product-design"
  | "cloud-devops"
  | "saas-development";

export const site = {
  name: "Tora",
  email: "hello@tora.agency",
  whatsapp: "https://wa.me/971504313150",
  whatsappLabel: "+971 50 431 3150",
  address: "Dubai, UAE",
  coordinate: "25.2°N 55.3°E - DUBAI"
};

export const navItems = [
  { href: "/services", label: "Services" },
  { href: "/stack", label: "Stack" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

export const stack = [
  {
    layer: "Frontend",
    technology: "React",
    icon: "/images/stack/React.svg",
    use: "Fast, iterative product UI - dashboards, MVPs, and client-facing apps that need to move quickly through revisions."
  },
  {
    layer: "Frontend",
    technology: "Angular",
    icon: "/images/stack/Angular.svg",
    use: "Large, structured enterprise and internal dashboards where a strict framework and long-term maintainability matter more than iteration speed."
  },
  {
    layer: "Frontend",
    technology: "Next.js",
    icon: "/images/stack/Next.js.svg",
    use: "SEO-critical marketing sites and product front-ends that need server rendering, fast load times, and search visibility."
  },
  {
    layer: "Backend",
    technology: ".NET (C#)",
    icon: "/images/stack/NET core.svg",
    use: "Enterprise systems integration when a client's existing stack, compliance needs, or internal tooling already lives in the Microsoft ecosystem."
  },
  {
    layer: "Backend",
    technology: "FastAPI (Python)",
    icon: "/images/stack/FastAPI.svg",
    use: "ML and data-heavy services, APIs that wrap data pipelines or AI models, and products that benefit from Python's data ecosystem."
  },
  {
    layer: "Backend",
    technology: "Express (Node.js)",
    icon: "/images/stack/Express.svg",
    use: "Lightweight APIs and microservices that need to ship fast, stay simple, and integrate cleanly with product teams."
  }
];

export const services = [
  {
    slug: "mvp-development",
    title: "MVP development",
    short:
      "Turn a focused product idea into a testable first release with the right scope, architecture, and delivery rhythm.",
    icon: "/images/icons/mvp-development.png",
    what:
      "MVP development is the work of finding the smallest serious version of a product and building it well enough for real users, real feedback, and real decisions.",
    when:
      "This fits founders, product teams, and internal innovation teams that need to validate a market, win early customers, or prove an operational workflow before investing in a larger platform.",
    work:
      "Tora shapes the product scope, defines the first user journeys, builds the core interface and API, connects the essential integrations, and leaves the product ready for iteration instead of rewrite.",
    stack:
      "React, Next.js, FastAPI, and Express usually fit MVP work because they support fast iteration without trapping the product in a throwaway architecture."
  },
  {
    slug: "custom-software",
    title: "Custom software development",
    short:
      "Build internal tools, client portals, and operational systems around the way the business actually works.",
    icon: "/images/icons/custom-software.png",
    what:
      "Custom software solves a specific business problem that off-the-shelf tools cannot handle cleanly without awkward workarounds.",
    when:
      "This fits teams that rely on spreadsheets, disconnected systems, manual approvals, or legacy tools that slow down day-to-day operations.",
    work:
      "Tora maps the workflow, designs the data model, builds the application, integrates the systems around it, and creates an admin layer that the team can manage.",
    stack:
      "Angular and .NET fit structured enterprise environments, while React, Next.js, Express, and FastAPI fit faster product-led builds."
  },
  {
    slug: "ai-integration",
    title: "AI development and integration",
    short:
      "Add AI where it improves a workflow, supports a decision, or turns internal data into a usable product feature.",
    icon: "/images/icons/ai-integration.png",
    what:
      "AI integration connects models, data, prompts, and product interfaces so the feature works inside the software people already use.",
    when:
      "This fits teams that want to automate review steps, summarize complex information, classify data, build assistants, or expose model-backed features to customers.",
    work:
      "Tora defines the AI use case, prepares the API layer, connects model providers or Python services, designs review controls, and adds the product interface around the feature.",
    stack:
      "FastAPI is often the right backend for AI services. React, Next.js, and Express are used around it when the product needs a polished interface or lightweight orchestration."
  },
  {
    slug: "product-design",
    title: "Product design",
    short:
      "Clarify the product shape before code: flows, screens, interaction states, and decisions that reduce build waste.",
    icon: "/images/icons/product-design.png",
    what:
      "Product design turns a product goal into the screens, flows, and interface rules needed to build with fewer guesses.",
    when:
      "This fits teams that have a direction but need clearer user journeys, sharper scope, or a more usable interface before development begins.",
    work:
      "Tora sketches the product structure, defines critical flows, designs responsive screens, writes interface copy, and prepares a build-ready design system for the first release.",
    stack:
      "Design work usually pairs with React, Angular, or Next.js decisions because the component model should match the product's long-term UI needs."
  },
  {
    slug: "cloud-devops",
    title: "Cloud and DevOps",
    short:
      "Set up deployment, environments, monitoring, and release workflows that support the product after launch.",
    icon: "/images/icons/cloud-devops.png",
    what:
      "Cloud and DevOps work gives the product a stable path from development to production with clear environments and controlled releases.",
    when:
      "This fits teams preparing to launch, scale, improve reliability, or replace fragile manual deployment steps with a repeatable system.",
    work:
      "Tora configures hosting, CI/CD, environment management, logging, monitoring, and deployment practices that match the product's size and compliance needs.",
    stack:
      ".NET, FastAPI, Express, Next.js, and the chosen cloud platform all influence the deployment model, so Tora designs this around the actual runtime."
  },
  {
    slug: "saas-development",
    title: "SaaS development",
    short:
      "Build multi-user software with the product, account, billing, admin, and release foundations a SaaS business needs.",
    icon: "/images/icons/saas-development.png",
    what:
      "SaaS development turns a repeatable service or workflow into a product customers can access, use, and grow with over time.",
    when:
      "This fits founders and companies turning internal expertise, manual service delivery, or a validated MVP into a scalable software product.",
    work:
      "Tora builds account structures, role-based access, dashboards, product flows, admin tools, billing-ready foundations, and the backend services behind them.",
    stack:
      "Next.js, React, FastAPI, Express, and .NET can all fit SaaS work depending on SEO needs, data complexity, enterprise integrations, and the client's team."
  }
] satisfies Array<{
  slug: ServiceSlug;
  title: string;
  short: string;
  icon: string;
  what: string;
  when: string;
  work: string;
  stack: string;
}>;

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export const engagementModels = [
  {
    title: "Fixed budget",
    body:
      "For defined builds with clear scope, timeline, and deliverables. Tora sets the plan up front, keeps the work visible, and ships against the agreed outcome."
  },
  {
    title: "Adaptive partnership",
    body:
      "For products that will change as the team learns. Tora works in focused cycles, adjusts scope with evidence, and stays close to the product as it moves from MVP to scale."
  }
];

export const process = [
  {
    title: "Define the sharp edge",
    body:
      "Tora starts by finding the user problem, the business constraint, and the first version worth shipping."
  },
  {
    title: "Pick the stack",
    body:
      "The stack is matched to the product, team, timeline, integrations, and expected maintenance model."
  },
  {
    title: "Build in visible cycles",
    body:
      "Work moves through practical milestones, with working software reviewed early enough to change direction."
  },
  {
    title: "Launch and harden",
    body:
      "The release includes deployment, monitoring, fixes, and the next technical decisions the product needs."
  }
];
