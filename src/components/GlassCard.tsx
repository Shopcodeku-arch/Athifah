import React from 'react';
import { motion } from 'motion/react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function GlassCard({ children, className = '' }: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: -20 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`bg-white/20 backdrop-blur-xl border border-white/40 shadow-2xl rounded-3xl p-8 md:p-12 w-full max-w-lg mx-auto text-center flex flex-col items-center gap-6 relative overflow-hidden ${className}`}
    >
      {/* Decorative frost glow */}
      <div className="absolute -top-24 -left-24 w-48 h-48 bg-blue-100/30 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-cyan-100/30 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="relative z-10 w-full flex flex-col items-center gap-6">
        {children}
      </div>
    </motion.div>
  );
}
