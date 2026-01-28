import { toZonedTime, format } from "date-fns-tz";
import { EVENT_CONFIG } from "@/config/eventConfig";

export type EventStatus = "before" | "during" | "after";

/**
 * Get current time in the configured timezone
 */
export function getCurrentTimeInTimezone(): Date {
  return toZonedTime(new Date(), EVENT_CONFIG.timezone);
}

/**
 * Get the event date as a Date object in the configured timezone
 */
export function getEventDate(): Date {
  const [year, month, day] = EVENT_CONFIG.eventDate.split("-").map(Number);
  return new Date(year, month - 1, day, 0, 0, 0, 0);
}

/**
 * Get the day after the event date
 */
export function getDayAfterEvent(): Date {
  const eventDate = getEventDate();
  return new Date(eventDate.getTime() + 24 * 60 * 60 * 1000);
}

/**
 * Determine the current status relative to the event date
 */
export function getEventStatus(): EventStatus {
  const now = getCurrentTimeInTimezone();
  const eventDate = getEventDate();
  const dayAfter = getDayAfterEvent();

  // Get date strings for comparison (ignoring time)
  const nowDateStr = format(now, "yyyy-MM-dd", { timeZone: EVENT_CONFIG.timezone });
  const eventDateStr = EVENT_CONFIG.eventDate;
  const dayAfterStr = format(dayAfter, "yyyy-MM-dd", { timeZone: EVENT_CONFIG.timezone });

  if (nowDateStr < eventDateStr) {
    return "before";
  } else if (nowDateStr === eventDateStr) {
    return "during";
  } else {
    return "after";
  }
}

/**
 * Parse unlock time (HH:mm) and get the unlock datetime for the event date
 */
export function getUnlockDateTime(unlockTime: string): Date {
  const [hours, minutes] = unlockTime.split(":").map(Number);
  const eventDate = getEventDate();
  return new Date(
    eventDate.getFullYear(),
    eventDate.getMonth(),
    eventDate.getDate(),
    hours,
    minutes,
    0,
    0
  );
}

/**
 * Check if a section is unlocked based on its unlock time
 */
export function isSectionUnlocked(unlockTime: string): boolean {
  const status = getEventStatus();

  if (status === "before") {
    return false;
  }

  if (status === "after") {
    return true;
  }

  // During the event day, check the time
  const now = getCurrentTimeInTimezone();
  const unlockDateTime = getUnlockDateTime(unlockTime);
  
  return now >= unlockDateTime;
}

/**
 * Get remaining time until a section unlocks
 */
export function getTimeUntilUnlock(unlockTime: string): {
  hours: number;
  minutes: number;
  seconds: number;
  totalSeconds: number;
} {
  const now = getCurrentTimeInTimezone();
  const status = getEventStatus();

  let targetTime: Date;

  if (status === "before") {
    // Calculate time until midnight of event date
    targetTime = getEventDate();
    const [hours, minutes] = unlockTime.split(":").map(Number);
    targetTime.setHours(hours, minutes, 0, 0);
  } else if (status === "during") {
    targetTime = getUnlockDateTime(unlockTime);
  } else {
    // Already past event, no countdown needed
    return { hours: 0, minutes: 0, seconds: 0, totalSeconds: 0 };
  }

  const diffMs = targetTime.getTime() - now.getTime();
  
  if (diffMs <= 0) {
    return { hours: 0, minutes: 0, seconds: 0, totalSeconds: 0 };
  }

  const totalSeconds = Math.floor(diffMs / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return { hours, minutes, seconds, totalSeconds };
}

/**
 * Format time for display (HH:mm)
 */
export function formatUnlockTime(unlockTime: string): string {
  const [hours, minutes] = unlockTime.split(":").map(Number);
  const period = hours >= 12 ? "PM" : "AM";
  const displayHours = hours === 0 ? 12 : hours > 12 ? hours - 12 : hours;
  return `${displayHours}:${minutes.toString().padStart(2, "0")} ${period}`;
}

/**
 * Get formatted current date
 */
export function getCurrentFormattedDate(): string {
  const now = getCurrentTimeInTimezone();
  return format(now, "EEEE, MMMM d, yyyy", { timeZone: EVENT_CONFIG.timezone });
}
