import React from 'react';
import { motion } from 'motion/react';

interface PixelCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function PixelCard({ children, className = '' }: PixelCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.2 }}
      className={`bg-white border-4 border-blue-900 p-6 md:p-10 w-full max-w-lg mx-auto text-center flex flex-col items-center gap-6 shadow-[8px_8px_0_rgba(30,58,138,0.8)] ${className}`}
    >
      {children}
    </motion.div>
  );
}
