import { Container } from "@chakra-ui/react";
import { Providers } from "./providers";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My favorite components",
  description: "A collection of my favorite components.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text x=%2250%%22 y=%2250%%22 style=%22dominant-baseline:central;text-anchor:middle;font-size:90px;%22>🐣</text></svg>"
        />
      </head>
      <body className={inter.className}>
        <Providers>
          <Container mt="2xl" minH="100vh">
            {children}
          </Container>
        </Providers>
      </body>
    </html>
  );
}
