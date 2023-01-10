"use client";

import { AnimatePresence } from "framer-motion";
import React from "react";
import { Navigation } from "../components/navigation";
import "./global.css";

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
          <AnimatePresence mode="wait">{children}</AnimatePresence>
        </main>
      </body>
    </html>
  );
}
