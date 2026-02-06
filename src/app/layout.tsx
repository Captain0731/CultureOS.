import "./globals.scss";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Culture OS.",
  description: "Premium website ",
  icons: {
    icon: "/assets/images/ikj.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}