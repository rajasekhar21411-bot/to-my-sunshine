import { motion } from "framer-motion";
import { Sparkles, Star, Gift } from "lucide-react";

// Floating decorative elements for the background
export function FloatingDecorations() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Floating gifts */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 10, -10, 0],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[20%] left-[10%] text-primary/20"
      >
        <Gift className="w-6 h-6" />
      </motion.div>

      <motion.div
        animate={{
          y: [0, -15, 0],
          rotate: [0, -15, 15, 0],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-[40%] right-[15%] text-primary/15"
      >
        <Gift className="w-8 h-8" />
      </motion.div>

      {/* Floating sparkles */}
      <motion.div
        animate={{
          y: [0, -10, 0],
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[30%] right-[8%] text-primary/40"
      >
        <Sparkles className="w-5 h-5" />
      </motion.div>

      <motion.div
        animate={{
          y: [0, -12, 0],
          opacity: [0.2, 0.5, 0.2],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        className="absolute top-[70%] right-[20%] text-primary/30"
      >
        <Sparkles className="w-6 h-6" />
      </motion.div>

      {/* Floating stars */}
      <motion.div
        animate={{
          y: [0, -8, 0],
          rotate: [0, 180, 360],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="absolute top-[15%] right-[25%] text-primary/50"
      >
        <Star className="w-4 h-4 fill-current" />
      </motion.div>

      <motion.div
        animate={{
          y: [0, -10, 0],
          rotate: [0, -180, -360],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear", delay: 2 }}
        className="absolute top-[50%] left-[15%] text-primary/40"
      >
        <Star className="w-5 h-5 fill-current" />
      </motion.div>

      <motion.div
        animate={{
          y: [0, -6, 0],
          rotate: [0, 180, 360],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "linear", delay: 4 }}
        className="absolute top-[80%] left-[25%] text-primary/30"
      >
        <Star className="w-3 h-3 fill-current" />
      </motion.div>

      {/* Gradient orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gradient-to-br from-primary/10 to-transparent blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-gradient-to-tr from-accent/15 to-transparent blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-radial from-secondary/10 to-transparent blur-3xl" />
    </div>
  );
}
