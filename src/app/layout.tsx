import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Berkana Capital | Investing in the World We Want to Live In",
  description:
    "An invitation-only community of 100 impact-aligned women investors deploying capital into ventures that drive returns and shape the future.",
  keywords: [
    "impact investing",
    "women investors",
    "venture capital",
    "ESG",
    "sustainable investing",
    "Abu Dhabi",
  ],
  openGraph: {
    title: "Berkana Capital | Investing in the World We Want to Live In",
    description:
      "An invitation-only community of 100 impact-aligned women investors.",
    type: "website",
    url: "https://berkanacapital.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
