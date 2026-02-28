"use client";

import { useEffect, useState } from "react";

const LAUNCH_DATE = new Date("2026-10-01T00:00:00+13:00"); // NZDT

function getTimeRemaining() {
  const now = new Date();
  const diff = LAUNCH_DATE.getTime() - now.getTime();

  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function Digit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <span className="font-mono text-3xl sm:text-4xl lg:text-5xl font-bold text-primary tabular-nums">
        {String(value).padStart(2, "0")}
      </span>
      <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-foreground/50 mt-2">
        {label}
      </span>
    </div>
  );
}

export function Countdown() {
  const [time, setTime] = useState(getTimeRemaining);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => setTime(getTimeRemaining()), 1000);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) {
    return (
      <div className="flex items-center justify-center gap-6 sm:gap-10">
        {["Days", "Hours", "Minutes", "Seconds"].map((label) => (
          <div key={label} className="flex flex-col items-center">
            <span className="font-mono text-3xl sm:text-4xl lg:text-5xl font-bold text-primary tabular-nums">
              --
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-foreground/50 mt-2">
              {label}
            </span>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center gap-6 sm:gap-10">
      <Digit value={time.days} label="Days" />
      <span className="text-2xl sm:text-3xl text-foreground/20 font-light -mt-4">:</span>
      <Digit value={time.hours} label="Hours" />
      <span className="text-2xl sm:text-3xl text-foreground/20 font-light -mt-4">:</span>
      <Digit value={time.minutes} label="Minutes" />
      <span className="text-2xl sm:text-3xl text-foreground/20 font-light -mt-4">:</span>
      <Digit value={time.seconds} label="Seconds" />
    </div>
  );
}
