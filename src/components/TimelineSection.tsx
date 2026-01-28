import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import type { TimelineItem } from "@/data/timelineData";

interface TimelineSectionProps {
  item: TimelineItem;
  index: number;
}

const animationVariants = {
  fadeUp: {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
  },
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  },
  scaleIn: {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
  },
  slideLeft: {
    initial: { opacity: 0, x: -40 },
    animate: { opacity: 1, x: 0 },
  },
  slideRight: {
    initial: { opacity: 0, x: 40 },
    animate: { opacity: 1, x: 0 },
  },
};

export function TimelineSection({ item, index }: TimelineSectionProps) {
  const navigate = useNavigate();
  const variant = animationVariants[item.animation] || animationVariants.fadeUp;

  const handleClick = () => {
    navigate(`/section/${item.id}`);
  };

  return (
    <motion.div
      initial={variant.initial}
      animate={variant.animate}
      transition={{ 
        delay: index * 0.15, 
        duration: 0.6,
        ease: "easeOut"
      }}
      className="relative"
    >
      {/* Timeline connector */}
      <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/40 to-primary/10" />

      {/* Timeline dot with pulse */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: index * 0.15 + 0.3, duration: 0.3, type: "spring" }}
        className="absolute left-4 md:left-6 top-8 z-10"
      >
        <div className="relative">
          <div className="w-4 h-4 rounded-full bg-primary shadow-glow" />
          <motion.div
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 rounded-full bg-primary"
          />
        </div>
      </motion.div>

      <div className="ml-12 md:ml-16">
        <motion.button
          onClick={handleClick}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`w-full text-left glass-card overflow-hidden ${item.theme.gradient} cursor-pointer group transition-all duration-300 hover:shadow-glow`}
        >
          <div className="p-5 md:p-6">
            {/* Header with icon, title, and arrow */}
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 min-w-0">
                <motion.span
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: index * 0.15 + 0.4, duration: 0.5, type: "spring" }}
                  className="text-3xl md:text-4xl shrink-0"
                >
                  {item.theme.icon}
                </motion.span>
                <div className="min-w-0">
                  <h3 className={`text-lg md:text-xl font-serif font-bold ${item.theme.accent} leading-tight truncate`}>
                    {item.title}
                  </h3>
                  <p className={`text-xs ${item.theme.accent} opacity-70 mt-0.5`}>
                    Tap to read more
                  </p>
                </div>
              </div>
              
              {/* Arrow indicator */}
              <motion.div
                className={`shrink-0 ${item.theme.accent} opacity-70 group-hover:opacity-100 transition-all`}
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
              </motion.div>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-white/10 blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-16 h-16 rounded-full bg-white/10 blur-2xl translate-y-1/2 -translate-x-1/2" />
        </motion.button>
      </div>
    </motion.div>
  );
}