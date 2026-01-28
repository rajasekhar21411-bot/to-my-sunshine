import { motion } from "framer-motion";
import { Lock } from "lucide-react";
import { CountdownTimer } from "./CountdownTimer";
import { formatUnlockTime } from "@/utils/timeUtils";
import type { TimelineItem } from "@/data/timelineData";

interface LockedSectionProps {
  item: TimelineItem;
  index: number;
  onUnlock: () => void;
}

export function LockedSection({ item, index, onUnlock }: LockedSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="relative"
    >
      {/* Timeline connector */}
      <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-border/50 to-border/20" />

      {/* Timeline dot */}
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute left-4 md:left-6 top-8 w-4 h-4 rounded-full bg-muted border-2 border-border/50 z-10"
      />

      <div className="ml-12 md:ml-16">
        <div className="locked-card overflow-hidden">
          {/* Blurred content preview */}
          <div className="relative p-6 md:p-8">
            {/* Blur overlay */}
            <div className="absolute inset-0 backdrop-blur-md bg-muted/40 z-10" />
            
            {/* Locked content indicator */}
            <div className="relative z-20">
              {/* Lock icon and unlock time */}
              <div className="flex flex-col items-center text-center space-y-4">
                <motion.div
                  animate={{ 
                    y: [0, -5, 0],
                    rotate: [-5, 5, -5]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="w-16 h-16 rounded-full bg-card/80 border border-border/50 shadow-soft flex items-center justify-center"
                >
                  <Lock className="w-7 h-7 text-primary/70" />
                </motion.div>

                <div className="space-y-1">
                  <p className="text-sm font-medium text-muted-foreground">
                    This moment unlocks at
                  </p>
                  <p className="text-lg md:text-xl font-serif font-semibold text-foreground">
                    {formatUnlockTime(item.unlockTime)}
                  </p>
                </div>

                {/* Countdown Timer */}
                <div className="pt-2">
                  <CountdownTimer 
                    unlockTime={item.unlockTime} 
                    onUnlock={onUnlock}
                  />
                </div>

                {/* Teaser */}
                <p className="text-xs text-muted-foreground/70 italic pt-2">
                  Something special is waiting for you... ✨
                </p>
              </div>
            </div>

            {/* Decorative blurred shapes */}
            <div className="absolute top-4 right-4 w-20 h-20 rounded-full bg-primary/10 blur-2xl" />
            <div className="absolute bottom-4 left-4 w-16 h-16 rounded-full bg-accent/20 blur-2xl" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
