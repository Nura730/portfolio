import "./globals.css";

export const metadata = {
  title: "Nura — Developer, Automation Builder & Security Learner",
  description: "I’m Nura, a Computer Science student building useful digital products, web experiences, and practical automations.",
  metadataBase: new URL("https://nuraportfolio.vercel.app"),
  openGraph: {
    title: "Nura — Developer & Builder",
    description: "Selected work, experiments, and things I’m learning.",
    url: "https://nuraportfolio.vercel.app",
    siteName: "Nura Portfolio",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>;
}
