import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"], 
  variable: "--font-instrument-sans", 
  display: 'swap', 
  weight: ["400", "500", "600", "700"], 
  style: ["normal", "italic"], 
});

export const metadata: Metadata = {
  title: "Minha Casa",
  description: "Conte com o que há de melhor em serviços de hospedagem para idosos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${instrumentSans.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}