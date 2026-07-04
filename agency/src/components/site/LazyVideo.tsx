import { useState, useEffect } from "react";

interface LazyVideoProps {
  src: string;
  className?: string;
}

export const LazyVideo = ({ src, className = "absolute inset-0 w-full h-full object-cover" }: LazyVideoProps) => {
  const [loadVideo, setLoadVideo] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      // Load video only for desktop screens (width >= 1024px)
      if (window.innerWidth >= 1024) {
        setLoadVideo(true);
      } else {
        setLoadVideo(false);
      }
    };
    
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
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
