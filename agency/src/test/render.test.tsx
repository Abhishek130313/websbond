import { describe, it, beforeAll } from "vitest";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { HelmetProvider } from "react-helmet-async";

// Mock Worker class globally for jsdom environments
beforeAll(() => {
  class MockWorker {
    url: string;
    onmessage: (e: any) => void = () => {};
    constructor(stringUrl: string) {
      this.url = stringUrl;
    }
    postMessage(msg: any) {
      setTimeout(() => {
        if (msg.action === "FILTER_BLOGS") {
          const { posts, query, category } = msg.payload;
          const filtered = posts.filter((post: any) => {
            const matchesCategory = category === "All Posts" || post.category === category;
            const matchesSearch =
              post.title.toLowerCase().includes(query.toLowerCase()) ||
              post.excerpt.toLowerCase().includes(query.toLowerCase()) ||
              (post.tags && post.tags.some((tag: string) => tag.toLowerCase().includes(query.toLowerCase())));
            return matchesCategory && matchesSearch;
          });
          this.onmessage({
            data: {
              action: "FILTER_BLOGS_SUCCESS",
              payload: { results: filtered, timeTakenMs: 0.1, threadId: 1 }
            }
          });
        } else if (msg.action === "FILTER_TESTIMONIALS") {
          const { reviews, category } = msg.payload;
          const filtered = category === "All"
            ? reviews
            : reviews.filter((r: any) => r.category && r.category.toLowerCase() === category.toLowerCase());
          this.onmessage({
            data: {
              action: "FILTER_TESTIMONIALS_SUCCESS",
              payload: { results: filtered, timeTakenMs: 0.1, threadId: 1 }
            }
          });
        }
      }, 0);
    }
    terminate() {}
  }
  global.Worker = MockWorker as any;

  global.IntersectionObserver = class IntersectionObserver {
    constructor() {}
    observe() {}
    unobserve() {}
    disconnect() {}
  } as any;
});

// Components
import { Hero } from "../components/site/Hero";
import { StatsBar } from "../components/site/StatsBar";
import { Process } from "../components/site/Process";
import { Services } from "../components/site/Services";
import { GrowthConsole } from "../components/site/GrowthConsole";
import { RecentWorks } from "../components/site/RecentWorks";
import { Testimonials } from "../components/site/Testimonials";
import { Blog } from "../components/site/Blog";

// Pages
import Index from "../pages/Index";
import OurWorkPage from "../pages/OurWork";
import BlogPage from "../pages/Blog";
import ContactPage from "../pages/Contact";
import AboutPage from "../pages/About";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const renderWithProviders = (ui: React.ReactElement) => {
  return render(
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <BrowserRouter>{ui}</BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
};

describe("Homepage Components Render Tests", () => {
  it("renders Hero component without crashing", () => {
    renderWithProviders(<Hero />);
  });

  it("renders StatsBar component without crashing", () => {
    renderWithProviders(<StatsBar />);
  });

  it("renders Process component without crashing", () => {
    renderWithProviders(<Process />);
  });

  it("renders Services component without crashing", () => {
    renderWithProviders(<Services />);
  });

  it("renders GrowthConsole component without crashing", () => {
    renderWithProviders(<GrowthConsole />);
  });

  it("renders RecentWorks component without crashing", () => {
    renderWithProviders(<RecentWorks />);
  });

  it("renders Testimonials component without crashing", () => {
    renderWithProviders(<Testimonials />);
  });

  it("renders Blog component without crashing", () => {
    renderWithProviders(<Blog />);
  });
});

describe("Page Components Render Tests", () => {
  it("renders Index Page without crashing", () => {
    renderWithProviders(<Index />);
  });

  it("renders OurWork Page without crashing", () => {
    renderWithProviders(<OurWorkPage />);
  });

  it("renders Blog Page without crashing", () => {
    renderWithProviders(<BlogPage />);
  });

  it("renders Contact Page without crashing", () => {
    renderWithProviders(<ContactPage />);
  });

  it("renders About Page without crashing", () => {
    renderWithProviders(<AboutPage />);
  });
});
