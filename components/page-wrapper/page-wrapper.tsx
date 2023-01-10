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
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      }}
      animate={{
        opacity: 1,
        y: 0,
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      }}
      exit={{
        opacity: 0,
        y: 20,
        clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
      }}
      transition={{ duration: 0.8 }}
      className={classNames("min-h-screenHeightWithoutHeader", className)}
    >
      {children}
    </motion.div>
  );
};
