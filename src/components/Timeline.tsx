import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { timelineData } from "@/data/timelineData";
import { TimelineSection } from "./TimelineSection";
import { LockedSection } from "./LockedSection";
import { isSectionUnlocked, getEventStatus } from "@/utils/timeUtils";
import { EVENT_CONFIG } from "@/config/eventConfig";
import { Sparkles, Gift } from "lucide-react";

export function Timeline() {
  const [unlockedSections, setUnlockedSections] = useState<Set<number>>(new Set());
  const [, forceUpdate] = useState(0);

  const checkUnlocks = useCallback(() => {
    const status = getEventStatus();
    const newUnlocked = new Set<number>();

    timelineData.forEach((item) => {
      if (status === "after" || isSectionUnlocked(item.unlockTime)) {
        newUnlocked.add(item.id);
      }
    });

    setUnlockedSections(newUnlocked);
  }, []);

  useEffect(() => {
    checkUnlocks();
    
    // Check every second for updates
    const interval = setInterval(() => {
      checkUnlocks();
      forceUpdate((n) => n + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [checkUnlocks]);

  const handleSectionUnlock = useCallback((id: number) => {
    setUnlockedSections((prev) => new Set([...prev, id]));
  }, []);

  const status = getEventStatus();
  const allUnlocked = unlockedSections.size === timelineData.length;

  return (
    <div className="relative py-8 md:py-12">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute top-1/3 right-0 w-80 h-80 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 rounded-full bg-lavender/20 blur-3xl" />
      </div>

      <div className="container mx-auto max-w-3xl px-4">
        {/* Before event message */}
        {status === "before" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12 p-6 glass-card"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles className="w-12 h-12 text-primary mx-auto mb-4" />
            </motion.div>
            <h2 className="text-xl md:text-2xl font-serif font-bold text-foreground mb-2">
              The Magic Begins Soon
            </h2>
            <p className="text-muted-foreground">
              All sections will unlock on <span className="font-semibold text-primary">{EVENT_CONFIG.eventDate}</span>
            </p>
          </motion.div>
        )}

        {/* Timeline sections */}
        <div className="space-y-6 md:space-y-8">
          <AnimatePresence mode="wait">
            {timelineData.map((item, index) => {
              const isUnlocked = unlockedSections.has(item.id);

              return (
                <div key={item.id}>
                  {isUnlocked ? (
                    <TimelineSection item={item} index={index} />
                  ) : (
                    <LockedSection
                      item={item}
                      index={index}
                      onUnlock={() => handleSectionUnlock(item.id)}
                    />
                  )}
                </div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* End of timeline message */}
        {allUnlocked && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-12 text-center p-8 glass-card gradient-rose"
          >
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex justify-center mb-4"
            >
              <Gift className="w-12 h-12 text-primary-foreground" />
            </motion.div>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary-foreground mb-3">
              That's All For Today! 🎂
            </h2>
            <p className="text-primary-foreground/90 text-lg leading-relaxed">
              {EVENT_CONFIG.postEventMessage}
            </p>
          </motion.div>
        )}

        {/* Timeline end decoration */}
        <div className="flex justify-center mt-8">
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-4xl"
          >
            🎁
          </motion.div>
        </div>
      </div>
    </div>
  );
}
