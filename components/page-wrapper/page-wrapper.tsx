"use client";

import classNames from "classnames";
import { motion } from "framer-motion";

export const PageWrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <motion.div
    initial={{ opacity: 1, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 1, y: 20 }}
    transition={{ duration: 0.3 }}
    className={classNames("min-h-screenHeightWithoutHeader", className)}
  >
    {children}
  </motion.div>
);
