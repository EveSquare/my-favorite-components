import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Buttons",
};

export default function ButtonsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div>{children}</div>;
}
