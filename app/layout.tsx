import React from "react";
import { Navigation } from "../components/navigation";
import './global.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head></head>
      <body>
        <main>
          <Navigation />
          {children}
        </main>
      </body>
    </html>
  );
}
