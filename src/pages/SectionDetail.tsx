import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Clock } from "lucide-react";
import { timelineData } from "@/data/timelineData";
import { formatUnlockTime, isSectionUnlocked, getEventStatus } from "@/utils/timeUtils";
import { Button } from "@/components/ui/button";

export default function SectionDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const section = timelineData.find((item) => item.id === Number(id));
  const status = getEventStatus();
  
  // If section not found or locked, redirect back
  if (!section) {
    return (
      <div className="min-h-screen gradient-hero flex items-center justify-center p-4">
        <div className="text-center">
          <p className="text-muted-foreground mb-4">Section not found</p>
          <Button onClick={() => navigate("/")} variant="outline">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Go Back
          </Button>
        </div>
      </div>
    );
  }

  const isUnlocked = status === "after" || isSectionUnlocked(section.unlockTime);
  
  if (!isUnlocked) {
    return (
      <div className="min-h-screen gradient-hero flex items-center justify-center p-4">
        <div className="text-center glass-card p-8">
          <p className="text-muted-foreground mb-4">This section is still locked</p>
          <Button onClick={() => navigate("/")} variant="outline">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Go Back
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen gradient-hero relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute top-1/3 right-0 w-80 h-80 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 rounded-full bg-lavender/20 blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="sticky top-0 z-50 backdrop-blur-xl bg-card/30 border-b border-border/30"
        >
          <div className="container mx-auto max-w-3xl px-4 py-4">
            <div className="flex items-center gap-4">
              <Button
                onClick={() => navigate("/")}
                variant="ghost"
                size="icon"
                className="shrink-0"
              >
                <ArrowLeft className="w-5 h-5" />
              </Button>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4" />
                <span>{formatUnlockTime(section.unlockTime)}</span>
              </div>
            </div>
          </div>
        </motion.header>

        {/* Content */}
        <main className="container mx-auto max-w-3xl px-4 py-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {/* Hero Card */}
            <div className={`glass-card overflow-hidden ${section.theme.gradient}`}>
              <div className="p-8 md:p-12 text-center">
                {/* Icon */}
                <motion.span
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
                  className="text-5xl md:text-7xl block mb-6"
                >
                  {section.theme.icon}
                </motion.span>

                {/* Title */}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className={`text-3xl md:text-4xl font-serif font-bold ${section.theme.accent} leading-tight`}
                >
                  {section.title}
                </motion.h1>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-white/10 blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-white/10 blur-2xl translate-y-1/2 -translate-x-1/2" />
            </div>

            {/* Messages */}
            <div className="space-y-4">
              {section.message.map((text, msgIndex) => (
                <motion.div
                  key={msgIndex}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + msgIndex * 0.1 }}
                  className="glass-card p-6"
                >
                  <p className="text-lg md:text-xl text-foreground leading-relaxed">
                    {text}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Images */}
            {section.images.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="space-y-4"
              >
                <h2 className="text-xl font-serif font-semibold text-foreground text-center">
                  Memories ✨
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {section.images.map((image, imgIndex) => (
                    <motion.div
                      key={imgIndex}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.7 + imgIndex * 0.1 }}
                      className="glass-card overflow-hidden"
                    >
                      <img
                        src={image}
                        alt={`Memory ${imgIndex + 1}`}
                        className="w-full h-48 md:h-64 object-cover"
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </motion.div>
        </main>

        {/* Footer */}
        <footer className="py-8 text-center">
          <Button
            onClick={() => navigate("/")}
            variant="outline"
            className="gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Timeline
          </Button>
        </footer>
      </div>
    </div>
  );
}
