import { useEffect, useState } from "react";
import { Clock } from "lucide-react";

interface TimerProps {
  initialTime: number;
  onTimeUp: () => void;
  isPaused?: boolean;
}

const Timer = ({ initialTime, onTimeUp, isPaused = false }: TimerProps) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    setTimeLeft(initialTime);
  }, [initialTime]);

  useEffect(() => {
    if (isPaused) return;

    if (timeLeft <= 0) {
      onTimeUp();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, onTimeUp, isPaused]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const isWarning = timeLeft <= 60;

  return (
    <div
      className={`flex items-center gap-2 px-4 py-2 rounded-lg bg-card shadow-soft transition-all ${
        isWarning ? "animate-pulse-glow text-destructive" : "text-foreground"
      }`}
    >
      <Clock className="w-5 h-5" />
      <span className="font-semibold text-lg tabular-nums">
        {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
      </span>
    </div>
  );
};

export default Timer;
