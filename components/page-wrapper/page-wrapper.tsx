"use client";

import classNames from "classnames";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export const PageWrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const pathname = usePathname();

  return (
    <motion.div
      key={pathname}
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: 20,
      }}
      transition={{ duration: 0.8 }}
      className={classNames("min-h-screenHeightWithoutHeader", className)}
    >
      {children}
    </motion.div>
  );
};
