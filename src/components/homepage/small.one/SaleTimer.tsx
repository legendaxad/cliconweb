import { useEffect, useState } from "react";
import styled from "styled-components";

interface SaleTimerProps {
  endTime: string; // ISO format string (e.g., "2025-04-01T12:00:00Z")
}

const SaleTimer: React.FC<SaleTimerProps> = ({ endTime }) => {
  const calculateTimeLeft = () => {
    const difference = new Date(endTime).getTime() - Date.now();
    if (difference <= 0) return { hours: 0, minutes: 0, seconds: 0 };

    return {
      hours: Math.floor(difference / (1000 * 60 * 60)),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer); // Cleanup on unmount
  }, [endTime]);

  return (
    <div className="p-4 bg-gray-100 rounded-lg text-center">
      {timeLeft.hours === 0 &&
      timeLeft.minutes === 0 &&
      timeLeft.seconds === 0 ? (
        <Style>Sale Ended</Style>
      ) : (
        <Style>
          Deals ends in:{" "}
          <Timer>
            {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
          </Timer>
        </Style>
      )}
    </div>
  );
};

export default SaleTimer;

const Style = styled.div`
  color: #000;
  display: flex;
  align-items: center;
  justify-content: center;

  /* Body/Small/400 */
  font-family: "Public Sans";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
`;

const Timer = styled.b`
  color: var(--Gray-900, #191c1f);
  margin-left: 10px;
  /* Body/Medium/400 */
  font-family: "Public Sans";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
  display: flex;
  padding: 6px 12px;
  align-items: center;
  gap: 6px;
  border-radius: 2px;
  background: var(--Warning-300, #f3de6d);
`;
