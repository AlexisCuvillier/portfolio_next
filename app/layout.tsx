import type { Metadata } from "next";
import { Courier_Prime, Gluten } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const GlutenFont = Gluten({ subsets: ["latin"], variable: '--font-gluten-sans' });
const Courier = Courier_Prime({ subsets: ["latin"], variable: '--font-caption', weight:"400" });

export const metadata: Metadata = {
  title: "Alexis Cuvillier • Expert en systèmes d'information ",
  description: "Portfolio ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(GlutenFont.variable, Courier.variable, 'font-sans h-full bg-background text-foreground')}>{children}</body>
    </html>
  );
}
