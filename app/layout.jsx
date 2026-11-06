import "./globals.css";

export const metadata = {
  title: "Arun — Developer, Automation Builder & Cybersecurity Enthusiast",
  description:
    "Arun builds digital products, intelligent automations and secure systems. Explore selected software projects, technical skills and current learning.",
  metadataBase: new URL("https://nuraportfolio.vercel.app"),
  openGraph: {
    title: "Arun — Developer & Builder",
    description:
      "Selected software projects across healthcare, manufacturing, automation and environmental monitoring.",
    url: "https://nuraportfolio.vercel.app",
    siteName: "Arun Portfolio",
    locale: "en_IN",
    type: "website"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
