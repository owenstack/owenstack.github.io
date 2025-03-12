---
title: 'From NextJs to Remix and Cloudflare Workers'
description: 'We moved a project from NextJs to Remix basically for cost savings'
pubDate: 'Mar 12 2025'
heroImage: '/images/image.webp'
---

#### Introduction
In a bid to optimize performance, reduce costs, and simplify development workflows, we have successfully transitioned from Next.js to Remix, deploying on Cloudflare Workers. Initially, our project leveraged Next.js on Vercel, complemented by AWS backend services. While this setup provided a solid foundation, our evolving needs necessitated a more efficient and cost-effective solution.

Remix's server-side rendering (SSR) model, seamless integration with Cloudflare's edge network, and robust resource bindings have proven to be significant advantages over our previous architecture. This document outlines the key motivations behind our transition and details the improvements in performance, operational efficiencies, and cost savings that Remix and Cloudflare Workers have delivered.

#### 1. Remix’s Server-Side Rendering (SSR): A Performance and Simplicity Boost
Next.js offered multiple rendering strategies—Static Site Generation (SSG), Incremental Static Regeneration (ISR), Server-Side Rendering (SSR), and Client-Side Rendering (CSR). While this flexibility was useful, it introduced complexity in choosing the right approach for each page. Remix, on the other hand, is designed around SSR by default, simplifying data fetching and ensuring a more consistent performance profile.

- **Why Remix SSR Excels**: Remix utilizes the Web Fetch API to execute server-side logic efficiently, delivering pre-rendered pages to the client with minimal JavaScript overhead. This approach results in faster initial page loads and better SEO. In contrast, Next.js required explicit SSR configuration (e.g., `getServerSideProps`) and often involved client-side fetching trade-offs.
- **Performance Gains**: Deploying Remix on Cloudflare Workers has allowed for true edge rendering, eliminating the latency associated with Node.js-based SSR solutions like Vercel. By rendering content at the edge, closer to users, we have achieved lower Time to First Byte (TTFB) and improved global performance.
- **Developer Experience**: Remix’s approach to data fetching and mutations via loaders and actions has streamlined our development process. Unlike Next.js, where multiple rendering strategies and client-side data-fetching tools (e.g., SWR, React Query) were often required, Remix centralizes data handling on the server, making development more intuitive and maintainable.

**Impact**: Remix’s SSR model has simplified our architecture, improved performance by reducing client-side overhead, and ensured consistently fast content delivery when paired with Cloudflare Workers.

#### 2. Ease of Use of Cloudflare Bindings for Resource Access
Cloudflare Workers provides a powerful ecosystem of bindings—such as KV storage, Durable Objects, and Queues—that integrate seamlessly with Remix, reducing the need for traditional backend infrastructure.

- **Simplified Resource Management**: In our previous Next.js setup, accessing external resources (databases, caches, etc.) required API routes and additional middleware, increasing complexity. With Remix on Cloudflare Workers, we now have direct and efficient access to these resources via Cloudflare bindings.
- **Type Safety and Configuration**: Remix’s integration with Cloudflare Workers allows for automatic TypeScript type generation for bindings, reducing errors and improving development speed.
- **Scalability**: Cloudflare’s edge infrastructure automatically scales without the operational overhead of managing server instances, making it an ideal fit for applications expecting unpredictable traffic spikes.

**Impact**: Cloudflare bindings have simplified our backend logic, improved scalability, and enhanced developer productivity with type-safe, serverless resource management.

#### 3. General Cost Reduction
One of the most compelling outcomes of our transition to Remix and Cloudflare Workers is the significant cost savings compared to our previous Next.js + Vercel + AWS setup.

- **Previous Costs with Next.js on Vercel**: Hosting with Vercel incurred costs based on bandwidth, build times, and serverless function invocations. As our application scaled, these costs became substantial, with static asset hosting alone often exceeding $40/month, plus additional charges for serverless functions and database queries.
- **Cloudflare Workers Pricing**: Cloudflare Workers offers a generous free tier (100,000 requests/day) and a low pay-as-you-go pricing model ($0.30 per million requests). Features such as DDoS protection, CDN, and caching are included at no extra cost, making it a highly cost-effective solution compared to AWS and Vercel.
- **Build and Deployment Savings**: Remix’s streamlined build process has reduced CI/CD overhead compared to Next.js, which required managing SSG/ISR builds and could become resource-intensive.

**Impact**: Moving to Remix and Cloudflare Workers has significantly reduced our hosting and infrastructure costs while providing enterprise-grade capabilities at a fraction of the price.

#### 4. Additional Benefits
Beyond performance, scalability, and cost savings, this transition has provided additional strategic advantages:

- **Edge-Native Deployment**: Cloudflare Workers deploy code across over 250 global edge locations, ensuring low-latency content delivery.
- **Progressive Enhancement**: Remix’s emphasis on web standards (e.g., native form handling, robust error handling) makes applications more resilient and accessible, even when JavaScript is disabled.
- **Improved UX**: Built-in error boundaries and scroll restoration have improved user experience without requiring additional configuration, unlike Next.js.
- **Reduced Complexity**: While Remix’s ecosystem is smaller than Next.js’s, its adherence to web standards and simpler architecture have minimized our reliance on third-party libraries, reducing long-term maintenance costs.

**Impact**: The shift to Remix and Cloudflare Workers has aligned with best practices for performance, accessibility, and maintainability, making it a future-proof choice.

#### Conclusion
The transition from Next.js to Remix, coupled with deployment on Cloudflare Workers, has provided clear advantages in performance, cost efficiency, and developer experience. Remix’s server-side rendering model has simplified our architecture while delivering faster page loads, Cloudflare bindings have provided a seamless and scalable backend solution, and Cloudflare Workers have dramatically reduced infrastructure costs.

Having completed this transition, we are now able to take full advantage of edge computing, improved developer experience, and reduced complexity, ensuring that our application remains highly performant and cost-efficient for the long term.

