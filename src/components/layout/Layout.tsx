import { ReactNode, useState, useEffect } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { ScrollProgress } from "@/components/motion/ScrollProgress";
import { X } from "lucide-react";

const API = import.meta.env.VITE_API_URL || "http://localhost:3001";

interface BannerSettings {
  enabled: boolean;
  text: string;
  link: string;
  style: string;
}

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [bannerDismissed, setBannerDismissed] = useState(false);
  const [banner, setBanner] = useState<BannerSettings | null>(null);

  useEffect(() => {
    const cached = sessionStorage.getItem("site_settings_cache");
    if (cached) {
      try {
        const parsed = JSON.parse(cached);
        setBanner(parsed.banner);
        return;
      } catch {}
    }
    fetch(`${API}/api/settings`)
      .then(r => r.json())
      .then(data => {
        sessionStorage.setItem("site_settings_cache", JSON.stringify(data));
        setBanner(data.banner);
      })
      .catch(() => setBanner({ enabled: false, text: "", link: "", style: "gradient" }));
  }, []);

  const showBanner = banner?.enabled && !bannerDismissed;

  return (
    <div className="relative flex min-h-screen flex-col overflow-x-clip">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
      >
        <div className="absolute -top-24 left-[-10%] h-[360px] w-[360px] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute top-[28%] right-[-8%] h-[320px] w-[320px] rounded-full bg-accent/10 blur-3xl" />
      </div>
      {showBanner && (
        <div className="relative z-50 border-b border-primary/30 bg-primary/12 px-4 py-2.5 text-sm">
          <div className="container mx-auto flex items-center justify-center gap-3">
            <a
              href={banner.link || "/webinars"}
              className="text-center font-semibold tracking-[0.01em] text-primary hover:underline"
            >
              {banner.text}
            </a>
          </div>
          <button
            onClick={() => setBannerDismissed(true)}
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-primary/80 transition-colors hover:bg-primary/20 hover:text-primary"
            aria-label="Dismiss banner"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      )}
      <ScrollProgress />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-xl focus:bg-primary focus:px-4 focus:py-2 focus:font-semibold focus:text-primary-foreground focus:ring-2 focus:ring-ring focus:ring-offset-2"
      >
        Skip to main content
      </a>
      <Header />
      <main id="main-content" className="relative z-0 flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}
