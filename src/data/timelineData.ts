export interface TimelineItem {
  id: number;
  unlockTime: string; // HH:mm format
  title: string;
  message: string[];
  images: string[];
  theme: {
    gradient: string;
    accent: string;
    icon: string;
  };
  animation: "fadeUp" | "fadeIn" | "scaleIn" | "slideLeft" | "slideRight";
}

export const timelineData: TimelineItem[] = [
  {
    id: 1,
    unlockTime: "00:00",
    title: "The Day Begins With You",
    message: [
      "Happy Birthday, beautiful soul! 🎂",
      "As the clock strikes midnight, a new chapter of your life begins.",
      "May this year bring you everything your heart desires and more.",
    ],
    images: [],
    theme: {
      gradient: "gradient-rose",
      accent: "text-primary-foreground",
      icon: "🌟",
    },
    animation: "fadeUp",
  },
  {
    id: 2,
    unlockTime: "06:00",
    title: "Morning Sunshine",
    message: [
      "Good morning, birthday star! ☀️",
      "The sun rose just to see you smile today.",
      "I hope your first coffee tastes like dreams coming true.",
    ],
    images: [],
    theme: {
      gradient: "gradient-champagne",
      accent: "text-foreground",
      icon: "☕",
    },
    animation: "slideLeft",
  },
  {
    id: 3,
    unlockTime: "09:00",
    title: "A Little Secret",
    message: [
      "You know what makes you special? 💝",
      "It's not just your amazing smile or your kind heart...",
      "It's the way you make everyone around you feel valued and loved.",
    ],
    images: [],
    theme: {
      gradient: "gradient-peach",
      accent: "text-primary-foreground",
      icon: "💝",
    },
    animation: "scaleIn",
  },
  {
    id: 4,
    unlockTime: "12:00",
    title: "Midday Magic",
    message: [
      "Halfway through your special day! 🎈",
      "I hope it's been filled with laughter, love, and all your favorite things.",
      "Remember: You deserve every bit of happiness coming your way.",
    ],
    images: [],
    theme: {
      gradient: "gradient-lavender",
      accent: "text-primary-foreground",
      icon: "🎈",
    },
    animation: "fadeIn",
  },
  {
    id: 5,
    unlockTime: "15:00",
    title: "Afternoon Thoughts",
    message: [
      "Here's something I've always wanted to tell you... 🌸",
      "Thank you for being my friend. Thank you for being YOU.",
      "The world is a better place because you're in it.",
    ],
    images: [],
    theme: {
      gradient: "gradient-sunset",
      accent: "text-primary-foreground",
      icon: "🌸",
    },
    animation: "slideRight",
  },
  {
    id: 6,
    unlockTime: "18:00",
    title: "Golden Hour Wishes",
    message: [
      "As the sun sets on your birthday... 🌅",
      "I hope you're surrounded by people who love you.",
      "May your evening be as golden as your heart.",
    ],
    images: [],
    theme: {
      gradient: "gradient-champagne",
      accent: "text-foreground",
      icon: "🌅",
    },
    animation: "fadeUp",
  },
  {
    id: 7,
    unlockTime: "21:00",
    title: "Starlight Memories",
    message: [
      "The stars are out to celebrate you! ✨",
      "Every constellation tells a story, and yours is beautiful.",
      "Thank you for all the memories we've made together.",
    ],
    images: [],
    theme: {
      gradient: "gradient-dream",
      accent: "text-primary-foreground",
      icon: "✨",
    },
    animation: "scaleIn",
  },
  {
    id: 8,
    unlockTime: "23:00",
    title: "Before Midnight",
    message: [
      "As your special day comes to a close... 🌙",
      "Know that you are loved, cherished, and celebrated.",
      "Here's to you, my amazing friend. Happy Birthday! 🎂💕",
      "Until next year, keep shining bright!",
    ],
    images: [],
    theme: {
      gradient: "gradient-rose",
      accent: "text-primary-foreground",
      icon: "🌙",
    },
    animation: "fadeUp",
  },
];
