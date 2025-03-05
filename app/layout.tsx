import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Miley Cyrus",
  description: "Learn all you need to know about Miley Cyrus",
  icons: {
    icon: "/icons/logo.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
