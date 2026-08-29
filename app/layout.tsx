import "./globals.css";
import { Header } from "../components/Header";
export const metadata = {
  title: "Pangasinan Heritage Digital Showcase",
  description: "A mobile-first showcase of iconic Pangasinan heritage destinations."
};
export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="en"><body><Header/>{children}</body></html>;
}
