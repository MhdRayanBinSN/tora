Build Prompt: Tora — Software & MVP Agency Website

You are building the marketing website for Tora, a UAE-based (Dubai) full-stack software and MVP development agency. Read this entire prompt before writing any code. Follow it as a spec, not a suggestion — where it gives specific values (colors, type, copy), use them exactly; where it asks you to write content, write it in the voice described.


0. Tooling setup — use skills.md

Before designing or coding, connect the skills.md remote skill registry so you can pull in specialized help instead of defaulting to generic placeholders:

bashbun install -g @hasna/skills && skills auth signup

Register the MCP server for this agent per https://skills.md/docs/agents, then search the registry and use relevant skills at these points:


Branding/logo skill (search the registry for something like logo-design) — use it to produce the Tora wordmark/icon instead of a placeholder text logo.
Icon-pack skill (search for something like icon-pack) — use it to generate one consistent custom icon set for the six service cards (MVP Development, Custom Software, AI Integration, Product Design, Cloud & DevOps, SaaS Development), so icons share a single visual language instead of being pulled from mismatched libraries.
Research skill (search for something like deep-research) — use it to pull current, real context on UAE/Dubai tech-agency positioning and Gulf-region SaaS conventions, so the copy and credibility signals are grounded in something real rather than invented.
Any accessibility/UI-audit skill available — run it against the built pages near the end and fix what it flags.


If a relevant skill genuinely doesn't exist in the registry for one of these, fall back to your own best judgment and say so — don't block on it.


1. Brand & Positioning


Name: Tora
Type: Full-stack software and MVP development agency
Base: Dubai, UAE — serving startups and enterprises globally
Positioning: A precision-engineering software partner. Tora takes an idea from zero to a market-ready MVP, then scales it into enterprise-grade software, choosing whichever stack actually fits the problem rather than forcing one framework on every client.
Differentiator to lean on: range across frameworks (frontend and backend) without being a "jack of all trades, master of none" — frame it as deliberate stack-matching, not indecision.


Tone of voice: plain, confident, specific. No filler buzzwords ("synergy," "leverage," "cutting-edge," "game-changing"). Active voice throughout. Short, declarative sentences with room to breathe in whitespace. Never apologetic, never oversold.

Constraint from the client: keep it lean — no fake clients, no placeholder logos, no invented case studies or testimonials. Replace "social proof" sections with clarity of process, stack, and engagement model instead.


2. Visual Direction (non-negotiable — follow exactly)

The brief is explicit: light, ultra-clean, Apple-like futurism. This is NOT generic "dark mode + neon" AI-startup futurism. Do not default to a near-black background with a single neon accent, a warm-cream-and-serif editorial look, or a dense broadsheet/newspaper layout — these are the three default looks AI-generated sites cluster around, and none of them fit this brief.

Design tokens

Color


Background: #FAFAF9 (warm white — never pure #FFFFFF, never cold gray)
Ink (primary text): #0E0E10
Secondary text: #9A9A92 (warm gray, used for supporting copy/labels)
Hairline/border: #E8E6E1 (used for dividers instead of heavy borders or drop shadows)
Signature accent gradient: #3D5AFE → #7C4DFF (electric indigo–violet). Use this gradient sparingly and deliberately — on the signature trajectory line, on one button state, on one hover glow. Never as a full section background or repeated decoration.


Typography


Display face: a tight geometric grotesk used at large sizes with restrained weight usage (max 2 weights) and slightly negative letter-spacing (e.g. Geist, General Sans, or a tightened Inter — pick one and commit, don't mix multiple geometric sans).
Body face: a humanist sans built for reading comfort (e.g. Inter at standard spacing), line-height 1.6+.
Utility/mono face: a monospace (e.g. Geist Mono / JetBrains Mono) reserved for small data labels, coordinates, and stats — see signature element below.
Set a clear, intentional type scale (don't just use browser defaults at a few arbitrary sizes). The type treatment itself should feel considered, not like a neutral container for words.


Layout


Generous whitespace as the default state, not an afterthought.
Service and content cards are NOT laid out as a numbered list (01 / 02 / 03) — Tora's services aren't a sequence, they're a portfolio of capabilities, so numbering would misrepresent the content. Use a clean grid instead.
Hairline dividers (1px, #E8E6E1) instead of heavy borders or shadows.
Glass/blur effects reserved for the navigation bar only (e.g. on scroll) — not scattered across every card and section.


Signature element (the one deliberate risk — implement this, it's the thing the site should be remembered by):
A thin animated trajectory line — visually like a flight path or a single blueprint line — that draws itself across the hero on page load, tracing a path labeled at three points: Idea → MVP → Scale. This line motif reappears subtly as a connecting thread between sections on other pages (e.g. running quietly behind the Services grid, or linking steps on the Stack page). It replaces the generic "01/02/03 step card" pattern with something that actually visualizes the build journey instead of just labeling it.

Pair this with a recurring small mono-type micro-label motif: 25.2°N 55.3°E — DUBAI (Dubai's real coordinates), used like an engineering-drawing annotation in a footer or hero corner — a quiet, specific anchor to the UAE base instead of a generic flag icon or "based in UAE" badge.

Motion


One orchestrated page-load sequence: the trajectory line drawing itself in on the homepage.
Scroll-triggered reveals used sparingly (fade/slide-up on section entry, not on every individual element).
Real hover micro-interactions on cards and buttons (subtle scale/lift, not color-only).
Respect prefers-reduced-motion — disable non-essential motion when set.
Do not add ambient floating-blob animations, particle backgrounds, or scattered decorative motion — that reads as generic AI-generated filler, not intentional design.


Quality floor (build to this without announcing it):


Fully responsive down to mobile (375px) and up to large desktop.
Visible keyboard focus states on every interactive element.
Semantic HTML throughout, proper heading hierarchy, alt text on all images.
No layout shift on load.



3. Tech Stack (Tora's actual capabilities — this is real content, not filler)

Feature this on a dedicated Stack page, and reference it briefly elsewhere (e.g. a strip on the homepage).

LayerTechnologyWhen Tora reaches for itFrontendReactFast, iterative product UI — dashboards, MVPs, client-facing apps that need to move quickly through revisions.FrontendAngularLarge, structured enterprise/internal dashboards where a strict framework and long-term maintainability matter more than iteration speed.FrontendNext.jsSEO-critical marketing sites and product front-ends that need server rendering, fast load times, and search visibility.Backend.NET (C#)Enterprise systems integration — when a client's existing stack, compliance needs, or internal tooling is already in the Microsoft ecosystem.BackendFastAPI (Python)ML/data-heavy services, APIs that wrap data pipelines or AI models, anywhere Python's data ecosystem is the right tool.BackendExpress (Node.js)Lightweight APIs and microservices that need to ship fast and stay simple.

Write one short paragraph framing this range as a deliberate differentiator: Tora picks the stack that fits the client's product, team, and timeline — not the stack Tora happens to be most comfortable with. Avoid making this page read like a logo wall; each technology needs its one sentence of "why," as in the table above.


4. Site Architecture (Next.js App Router)

Multi-page site, not a single scroll page.

/app
  layout.tsx                          → root layout, fonts via next/font, theme
  page.tsx                            → Home
  /services
    page.tsx                          → Services overview (grid of 6)
    /mvp-development/page.tsx
    /custom-software/page.tsx
    /ai-integration/page.tsx
    /product-design/page.tsx
    /cloud-devops/page.tsx
    /saas-development/page.tsx
  /stack
    page.tsx                          → Tech stack deep-dive (table above, expanded)
  /about
    page.tsx                          → Story, UAE base, mission, engagement models
  /contact
    page.tsx                          → Form + WhatsApp + email
  /api
    /contact/route.ts                 → form submission handler

/components
  /layout
    Header.tsx, Footer.tsx, Nav.tsx
  /sections
    Hero.tsx                          → contains the signature trajectory-line animation
    ServiceGrid.tsx
    StackShowcase.tsx
    EngagementModels.tsx              → Fixed Budget vs Adaptive Partnership
    CTA.tsx
  /ui
    Button.tsx, Card.tsx, TrajectoryLine.tsx, CoordinateLabel.tsx

/lib
  content.ts                          → centralized copy objects, one per page — easy to edit later without touching components

/public
  /fonts
  /images                             → logo + icon set generated via skills.md

Pages required: Home, Services (overview + 6 individual service pages), Stack, About, Contact. No separate "Work/Case Studies" page — per the lean-content constraint, fold a short "How we work" / process explanation into the About page instead of fabricating case studies.


5. Page-by-page content requirements

Home


Hero: headline + one-line subhead + the trajectory-line animation (Idea → MVP → Scale) + a primary CTA ("Start a project" or similar, linking to Contact) and a secondary CTA (e.g. "See our stack," linking to /stack).
Brief services preview (grid teaser linking to /services).
Brief stack preview strip (logos/names of the 6 technologies, linking to /stack).
Engagement models teaser (Fixed Budget / Adaptive Partnership), linking to more detail on /about or its own anchor.
Closing CTA section.


Services (overview)


Short intro paragraph on how Tora scopes and delivers work.
Grid of 6 service cards (MVP Development, Custom Software Development, AI Development & Integration, Product Design, Cloud & DevOps, SaaS Development), each linking to its own page.


Each individual service page (6 total)


What it is, in plain terms (not marketing fluff).
Who it's for / when a client needs this.
What Tora actually does in this service (a short real description of the work, not a generic list of jargon).
Which part of the tech stack typically applies (cross-reference the Stack page).
CTA to Contact.


Stack


The differentiator paragraph (see Section 3).
The 6-technology table/grid, each with its "why we reach for it" sentence.
Optional: a short note on how Tora decides which stack to use for a new client (a real decision process, even if simplified).


About


Tora's story in 2–3 short paragraphs: UAE-based, why it exists, what it believes about building software (precision, picking the right tool, shipping real things rather than over-engineering).
Engagement models section: Fixed Budget (clearly defined scope/timeline/deliverables) vs. Adaptive Partnership (ongoing, evolving collaboration) — written in Tora's own words, not copied from any competitor.
Folded-in "How we work" process explanation in place of case studies.


Contact


Contact form: name, email, project type (dropdown: MVP / Custom Software / AI / Design / Cloud / SaaS / Other), budget range, message.
Form posts to /api/contact (stub the handler — log/email the submission, return a success state).
Direct contact details: email, WhatsApp link, Dubai address (use a placeholder address clearly marked as such if no real one is provided).
Success and error states for the form should follow the interface's own voice: state what happened and what to do next, no apologizing, no vague errors (per writing guidance below).



6. Writing rules (apply to all copy you generate)


Write from the reader's side of the screen: name things by what they want to do ("Start a project," not "Submit lead form"), not by how the system works internally.
Be specific, not clever. Plain description beats a clever metaphor every time it's a choice between the two.
Active voice as default. A button's label and its resulting confirmation message use the same verb (e.g. a button that says "Send message" should lead to a state that says "Message sent," not "Your inquiry has been submitted").
No invented statistics, client counts, or "X+ projects delivered" claims — Tora is a new startup; don't fabricate a track record.
Sentence case throughout (not Title Case headlines).
Form errors/empty states: state what happened and how to fix it, in the interface's voice — never "Oops!" or apologetic filler.



7. Technical requirements


Framework: Next.js 14+, App Router, TypeScript.
Styling: Tailwind CSS, with the token system in Section 2 set up as custom theme values (colors, font families, spacing) rather than hardcoded utility classes scattered everywhere.
Fonts: loaded via next/font (no FOUT/layout shift).
Images: next/image throughout.
Animation: Framer Motion (or CSS-only if you can keep it clean) for the trajectory line and scroll reveals — must respect prefers-reduced-motion.
Accessibility: semantic landmarks, visible focus rings (don't strip default focus styles without replacing them), proper form labels, alt text.
SEO: per-page metadata exports (title, description, OpenGraph), sitemap.xml, robots.txt.
Deployment target: Vercel-compatible out of the box (no config that breaks on Vercel).



8. Process — work in this order


Set up the Next.js project and the design token system (Tailwind config, fonts, base components) before writing any page content.
Use skills.md to generate the logo/wordmark and icon set (Section 0) before building the Header and ServiceGrid components, so they're built around the real assets, not placeholders.
Build the Hero and signature TrajectoryLine component first and get it right in isolation — this is the one element the whole site's "futuristic" feel hinges on. Don't move on until it feels intentional, not generic.
Build out the rest of Home, then Services (overview + 6 subpages), then Stack, then About, then Contact.
Wire up the contact form and API route.
Run an accessibility/UI audit (via skills.md if available, otherwise manually) and fix what it flags.
Do a final self-review pass against Section 2: if anything reads as a generic AI-generated default (the neon-dark look, the cream-serif look, scattered floating blobs, numbered step cards where order doesn't matter), cut or revise it before calling this done.



Build the full project now, file by file, following this spec exactly.