import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Melaku Alehegn — Software Engineer (AI / ML)",
  description:
    "Software engineer working on agentic AI systems and production ML. Currently at Arifpay; previously OpenStack and MMCY Tech.",
  metadataBase: new URL("https://melakualehegn.com"),
  openGraph: {
    title: "Melaku Alehegn — Software Engineer (AI / ML)",
    description: "Building AI systems that ship to production.",
    url: "https://melakualehegn.com",
    siteName: "Melaku Alehegn",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Melaku Alehegn — Software Engineer (AI / ML)",
    description: "Building AI systems that ship to production.",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-bg text-text">
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="dark"
          enableSystem={false}
          storageKey="theme"
        >
          {/* Skip to content link */}
          <a href="#main" className="skip-link">
            Skip to content
          </a>
          <main id="main" className="flex-1">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
