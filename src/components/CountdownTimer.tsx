import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { getTimeUntilUnlock } from "@/utils/timeUtils";

interface CountdownTimerProps {
  unlockTime: string;
  onUnlock?: () => void;
}

export function CountdownTimer({ unlockTime, onUnlock }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState(getTimeUntilUnlock(unlockTime));

  useEffect(() => {
    const interval = setInterval(() => {
      const newTime = getTimeUntilUnlock(unlockTime);
      setTimeLeft(newTime);

      if (newTime.totalSeconds <= 0 && onUnlock) {
        onUnlock();
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [unlockTime, onUnlock]);

  const timeUnits = [
    { value: timeLeft.hours, label: "Hours" },
    { value: timeLeft.minutes, label: "Min" },
    { value: timeLeft.seconds, label: "Sec" },
  ];

  return (
    <div className="flex items-center justify-center gap-2 md:gap-3">
      {timeUnits.map((unit, index) => (
        <motion.div
          key={unit.label}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.3 }}
          className="flex flex-col items-center"
        >
          <div className="relative">
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-card/80 backdrop-blur-sm border border-border/50 shadow-soft flex items-center justify-center">
              <motion.span
                key={unit.value}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="text-xl md:text-2xl font-bold text-foreground font-sans"
              >
                {String(unit.value).padStart(2, "0")}
              </motion.span>
            </div>
            {/* Shimmer effect */}
            <div className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none">
              <div className="w-full h-full animate-shimmer" />
            </div>
          </div>
          <span className="mt-1 text-[10px] md:text-xs text-muted-foreground font-medium uppercase tracking-wider">
            {unit.label}
          </span>
        </motion.div>
      ))}
    </div>
  );
}
