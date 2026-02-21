import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Coloring Fun - Lucian & Gideon",
  description: "Fun coloring pages for kids - Monster Trucks and Dinosaurs!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
