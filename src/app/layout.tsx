import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KMUA — Makeup as a Living Art Form",
  description: "Artistic makeup portfolio and beauty studio based in Jakarta, Indonesia.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
