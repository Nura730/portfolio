import "./globals.css";

export const metadata = {
  title: "Nura | CSE Student – Aspiring Cybersecurity Engineer",
  description:
    "CSE student learning cybersecurity through real systems, automation, and hands-on web development.",

  openGraph: {
    title: "Nura Portfolio",
    description:
      "Cybersecurity learner & automation builder. Real projects, real skills.",
    url: "https://nuraportfolio12.vercel.app/", // change later
    siteName: "Nura Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}
