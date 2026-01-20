import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  ),
  title: "Schooldb | Smart School Management System",
  description:
    "Schooldb helps school principals and management run operations with clarity, control, and confidence.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        <Navbar />
        {children}
        <a
          href="https://wa.me/917801049830"
          target="_blank"
          className="fixed bottom-6 right-6 bg-green-500 text-white px-5 py-3 rounded-full shadow-lg hover:bg-green-600 transition z-50"
        >
          WhatsApp Demo
        </a>

        <Footer />
      </body>
    </html>
  );
}
