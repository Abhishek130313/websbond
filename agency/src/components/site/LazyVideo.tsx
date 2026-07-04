import { useState, useEffect } from "react";

interface LazyVideoProps {
  src: string;
  className?: string;
}

export const LazyVideo = ({ src, className = "absolute inset-0 w-full h-full object-cover" }: LazyVideoProps) => {
  const [loadVideo, setLoadVideo] = useState(false);

  useEffect(() => {
    // Mount the video after 4 seconds, or immediately on first user interaction (scroll/click/touch)
    const timer = setTimeout(() => {
      setLoadVideo(true);
    }, 4000);

    const triggerEvents = ["scroll", "click", "touchstart", "mousemove"];
    const handleInteraction = () => {
      setLoadVideo(true);
      clearTimeout(timer);
      triggerEvents.forEach((event) => {
        window.removeEventListener(event, handleInteraction);
      });
    };

    triggerEvents.forEach((event) => {
      window.addEventListener(event, handleInteraction, { passive: true });
    });

    return () => {
      clearTimeout(timer);
      triggerEvents.forEach((event) => {
        window.removeEventListener(event, handleInteraction);
      });
    };
  }, []);

  if (loadVideo) {
    return (
      <video
        autoPlay
        muted
        loop
        playsInline
        className={className}
        preload="metadata"
      >
        <source src={src} type="video/mp4" />
      </video>
    );
  }

  return null;
};
