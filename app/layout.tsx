import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { AmbientSpotlight } from "@/components/ambient-spotlight";
import "./globals.css";

export const metadata: Metadata = {
  title: "Melaku Alehegn — AI · ML · Data Engineer",
  description:
    "AI / ML / Data engineer building production systems at the intersection of data, machine learning, and agentic AI.",
  metadataBase: new URL("https://melakualehegn.com"),
  openGraph: {
    title: "Melaku Alehegn — AI · ML · Data Engineer",
    description: "Building data and AI systems that ship to production.",
    url: "https://melakualehegn.com",
    siteName: "Melaku Alehegn",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Melaku Alehegn — AI · ML · Data Engineer",
    description: "Building data and AI systems that ship to production.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
      suppressHydrationWarning
    >
      <body className="relative min-h-full flex flex-col bg-bg text-text overflow-x-hidden">
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="system"
          enableSystem
          storageKey="theme"
        >
          <AmbientSpotlight />
          {/* Skip to content link */}
          <a href="#main" className="skip-link">
            Skip to content
          </a>
          <main id="main" className="relative z-10 flex-1">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
