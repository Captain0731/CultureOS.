import "./globals.scss";
import Preloader from "@/components/Preloader/Preloader";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Culture OS.",
  description: "Premium website ",
  icons: {
    icon: "/assets/images/finallogo1.png",
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
        <Preloader />
        {children}
      </body>
    </html>
  );
}