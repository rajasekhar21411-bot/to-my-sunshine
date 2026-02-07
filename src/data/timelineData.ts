import birthdayMidnight from "@/assets/birthday-midnight.jpg";
import morningCoffee from "@/assets/morning-coffee.jpg";
import birthdayCake from "@/assets/birthday-cake.jpg";
import eveningSunset from "@/assets/evening-sunset.jpg";

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
    title: "The Day Begins!",
    message: [
      "Happy Birthday, bestie! 🎂",
      "The clock just struck midnight and guess what? It's YOUR day!",
      "Let's make this year even more awesome than the last.",
    ],
    images: [birthdayMidnight],
    theme: {
      gradient: "gradient-rose",
      accent: "text-primary-foreground",
      icon: "🎉",
    },
    animation: "fadeUp",
  },
  {
    id: 2,
    unlockTime: "06:00",
    title: "Morning Vibes",
    message: [
      "Good morning, birthday legend! ☀️",
      "Hope you slept well because today is going to be epic.",
      "Go grab that coffee and own this day!",
    ],
    images: [morningCoffee],
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
    title: "Fun Fact Time",
    message: [
      "You know what's cool about you? 🔥",
      "You've got this amazing energy that hypes everyone up.",
      "Seriously, being your friend is a W.",
    ],
    images: [],
    theme: {
      gradient: "gradient-peach",
      accent: "text-primary-foreground",
      icon: "⚡",
    },
    animation: "scaleIn",
  },
  {
    id: 4,
    unlockTime: "12:00",
    title: "Midday Check-in",
    message: [
      "Halfway through your special day! 🎈",
      "Hope you're having a blast and eating something good.",
      "You deserve all the cake and snacks today!",
    ],
    images: [birthdayCake],
    theme: {
      gradient: "gradient-lavender",
      accent: "text-primary-foreground",
      icon: "🍰",
    },
    animation: "fadeIn",
  },
  {
    id: 5,
    unlockTime: "15:00",
    title: "Afternoon Appreciation",
    message: [
      "Real talk for a second... 🙌",
      "Thanks for always being there, for all the laughs and support.",
      "You're genuinely one of the best people I know.",
    ],
    images: [],
    theme: {
      gradient: "gradient-sunset",
      accent: "text-primary-foreground",
      icon: "🤝",
    },
    animation: "slideRight",
  },
  {
    id: 6,
    unlockTime: "18:00",
    title: "Evening Mode",
    message: [
      "The sun's setting on your birthday! 🌅",
      "Hope you're chilling with the people you love.",
      "You've earned a great evening, bestie.",
    ],
    images: [eveningSunset],
    theme: {
      gradient: "gradient-champagne",
      accent: "text-foreground",
      icon: "🌆",
    },
    animation: "fadeUp",
  },
  {
    id: 7,
    unlockTime: "21:00",
    title: "Night Crew",
    message: [
      "It's getting late but we're still celebrating! ✨",
      "Thanks for all the crazy memories we've made.",
      "Here's to making even more this year!",
    ],
    images: [],
    theme: {
      gradient: "gradient-dream",
      accent: "text-primary-foreground",
      icon: "🌃",
    },
    animation: "scaleIn",
  },
  {
    id: 8,
    unlockTime: "23:00",
    title: "Final Message",
    message: [
      "Your birthday's almost over... 🌙",
      "But our friendship? That's forever.",
      "Happy Birthday once more, bestie! 🎂",
      "Catch you next year for round two!",
    ],
    images: [],
    theme: {
      gradient: "gradient-rose",
      accent: "text-primary-foreground",
      icon: "🎁",
    },
    animation: "fadeUp",
  },
];
