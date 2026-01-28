import { motion } from "framer-motion";
import { EVENT_CONFIG } from "@/config/eventConfig";
import { getCurrentFormattedDate, getEventStatus } from "@/utils/timeUtils";
import { Heart, Sparkles } from "lucide-react";

export function Header() {
  const status = getEventStatus();
  const currentDate = getCurrentFormattedDate();

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-50 w-full"
    >
      <div className="glass-card-solid border-b border-border/30 px-4 py-4 md:px-6 md:py-5">
        <div className="container mx-auto max-w-4xl">
          {/* Decorative elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-2 -right-2 text-primary/20"
            >
              <Sparkles className="w-16 h-16" />
            </motion.div>
          </div>

          <div className="relative text-center">
            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-sm md:text-base text-muted-foreground font-medium tracking-wide mb-1"
            >
              {EVENT_CONFIG.eventSubtitle}
            </motion.p>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-gradient leading-tight"
            >
              {EVENT_CONFIG.eventTitle}
            </motion.h1>

            {/* For */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mt-2 flex items-center justify-center gap-2"
            >
              <Heart className="w-4 h-4 text-primary fill-primary animate-heartbeat" />
              <span className="text-base md:text-lg font-medium text-foreground">
                {EVENT_CONFIG.birthdayName}
              </span>
              <Heart className="w-4 h-4 text-primary fill-primary animate-heartbeat" />
            </motion.div>

            {/* Current Date */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mt-3 text-xs md:text-sm text-muted-foreground"
            >
              {currentDate}
            </motion.p>

            {/* Status Badge */}
            {status === "before" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="mt-3"
              >
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-medium">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  {EVENT_CONFIG.preEventMessage}
                </span>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </motion.header>
  );
}
