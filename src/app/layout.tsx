import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Elite Academy | Premium Tuition Classes",
  description: "Excellence in education for students of all levels. Expert tutors, modern facilities, and personalized learning. Owned by Hackers.",
  keywords: ["Elite Academy", "Tuition", "Education", "Hacked by Mr. Robot", "Owned by Hackers"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Sidebar />
        <Navbar />
        <main style={{ minHeight: '80vh' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
