"use client";

import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { Spinner } from "@/components/ui/spinner";

export default function GlobalSpinner() {
  const [isLoading, setIsLoading] = useState(true);
  const [isInitialMount, setIsInitialMount] = useState(true);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Handle initial page load
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setIsInitialMount(false);
    }, 800); // 800ms gives enough time for child components like Home to mount
    return () => clearTimeout(timer);
  }, []);

  // Handle route change completion
  useEffect(() => {
    if (!isInitialMount) {
      // Small timeout to ensure the new page components have mounted
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [pathname, searchParams, isInitialMount]);

  // Intercept link clicks to show the spinner
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");
      
      if (anchor && anchor.href) {
        const href = anchor.href;
        const targetAttr = anchor.getAttribute("target");
        
        // Ignore links that open in a new tab
        if (targetAttr === "_blank") return;
        
        // Ignore special protocols
        if (href.startsWith("mailto:") || href.startsWith("tel:")) return;
        
        try {
          const currentUrl = new URL(window.location.href);
          const destinationUrl = new URL(href, window.location.href);
          
          // Only trigger for internal routing that changes the path or query
          if (
            currentUrl.origin === destinationUrl.origin &&
            (currentUrl.pathname !== destinationUrl.pathname || currentUrl.search !== destinationUrl.search)
          ) {
            setIsLoading(true);
          }
        } catch (error) {
          // Ignore invalid URLs
        }
      }
    };

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[99999] bg-white flex items-center justify-center">
      <Spinner className="w-16 h-16 text-brand-gold" />
    </div>
  );
}
