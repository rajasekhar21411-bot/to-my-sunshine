import { motion } from "framer-motion";
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
  const variant = animationVariants[item.animation] || animationVariants.fadeUp;

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
        <div className={`glass-card overflow-hidden ${item.theme.gradient}`}>
          <div className="p-6 md:p-8 space-y-4">
            {/* Header with icon and title */}
            <div className="flex items-start gap-3">
              <motion.span
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: index * 0.15 + 0.4, duration: 0.5, type: "spring" }}
                className="text-3xl md:text-4xl"
              >
                {item.theme.icon}
              </motion.span>
              <div>
                <h3 className={`text-xl md:text-2xl font-serif font-bold ${item.theme.accent} leading-tight`}>
                  {item.title}
                </h3>
                <p className={`text-xs ${item.theme.accent} opacity-70 mt-1`}>
                  {item.unlockTime}
                </p>
              </div>
            </div>

            {/* Messages */}
            <div className="space-y-3">
              {item.message.map((text, msgIndex) => (
                <motion.p
                  key={msgIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    delay: index * 0.15 + 0.5 + msgIndex * 0.1, 
                    duration: 0.4 
                  }}
                  className={`text-base md:text-lg ${item.theme.accent} leading-relaxed`}
                >
                  {text}
                </motion.p>
              ))}
            </div>

            {/* Images if any */}
            {item.images.length > 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.15 + 0.7, duration: 0.5 }}
                className="grid grid-cols-2 gap-3 mt-4"
              >
                {item.images.map((image, imgIndex) => (
                  <img
                    key={imgIndex}
                    src={image}
                    alt={`Memory ${imgIndex + 1}`}
                    className="w-full h-32 md:h-40 object-cover rounded-xl shadow-soft"
                  />
                ))}
              </motion.div>
            )}
          </div>

          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white/10 blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full bg-white/10 blur-2xl translate-y-1/2 -translate-x-1/2" />
        </div>
      </div>
    </motion.div>
  );
}
