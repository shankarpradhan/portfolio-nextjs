import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";

export const metadata: Metadata = {
  title: {
    default: "Shankar Pradhan | MERN Stack Developer & Network Enthusiast",
    template: "%s | Shankar Pradhan"
  },
  description: "Fresher software developer skilled in React, Next.js, Node.js, and MongoDB. Explore my projects and connect for collaborations!",
  metadataBase: new URL("https://shan.in.net"),
  applicationName: "Shankar Pradhan Portfolio",
  keywords: [
    "Shankar Pradhan",
    "MERN Stack Developer",
    "Next.js Portfolio",
    "Fresher Developer Portfolio",
    "React Developer",
    "Node.js Developer India",
    "MongoDB Developer"
  ],
  authors: [{ name: "Shankar Pradhan", url: "https://shan.in.net" }],
  creator: "Shankar Pradhan",
  publisher: "Shankar Pradhan",
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "0P_HWR5KLwQYWg609ZG_0SFwxvMi60rEJ3Ax2eBTCuU"
  },
  openGraph: {
    title: "Shankar Pradhan | MERN Stack Developer",
    description: "Portfolio of Shankar Pradhan - Fresher MERN Stack Developer",
    url: "https://shan.in.net",
    siteName: "Shankar Pradhan Portfolio",
    images: [
      {
        url: "/og-image.jpg", // Update this path
        width: 1200,
        height: 630,
        alt: "Shankar Pradhan Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shankar Pradhan | MERN Stack Developer",
    description: "Portfolio of Shankar Pradhan - Fresher MERN Stack Developer",
    creator: "@Shankar12426131",
    images: ["/og-image.jpg"], // Update this path
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <Header />
        <main className="min-h-[calc(100vh-10rem)]">
          {children}
        </main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Shankar Pradhan",
              url: "https://shan.in.net",
              sameAs: [
                "https://linkedin.com/in/shankar-pradhan-200354206",
                "https://github.com/shankar-pradhan"
              ],
              jobTitle: "MERN Stack Developer",
              knowsAbout: ["React.js", "Next.js", "Node.js", "MongoDB", "JavaScript"]
            })
          }}
        />
      </body>
    </html>
  );
}