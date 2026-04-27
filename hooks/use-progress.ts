"use client";

import { useEffect, useState } from "react";

// Hook to manage localStorage sync safely
export function useProgress() {
  const [completed, setCompleted] = useState<Record<string, boolean>>({});
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Load from localStorage on mount
    const stored = localStorage.getItem("42_tracker_progress");
    if (stored) {
      try {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setCompleted(JSON.parse(stored));
      } catch (e) {
        console.error("Failed to parse stored progress", e);
      }
    }
    setIsLoaded(true);
  }, []);

  const toggleExercise = (exerciseId: string) => {
    setCompleted((prev) => {
      const next = { ...prev, [exerciseId]: !prev[exerciseId] };
      localStorage.setItem("42_tracker_progress", JSON.stringify(next));
      return next;
    });
  };
  
  const resetProgress = () => {
    if (window.confirm("Are you sure you want to reset all progress?")) {
      setCompleted({});
      localStorage.removeItem("42_tracker_progress");
    }
  }

  return { completed, toggleExercise, resetProgress, isLoaded };
}
