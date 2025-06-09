import { useEffect, useRef } from "react";

export default function AutoplayVideo({ src, ...props }) {
  const ref = useRef();

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const tryPlay = () => {
            video.play().catch((err) => console.warn("Autoplay failed:", err));
          };
          if (video.readyState >= 2) {
            tryPlay();
          } else {
            video.addEventListener("loadeddata", tryPlay, { once: true });
          }
        } else {
          video.pause();
          // ⛔️ Removed: video.currentTime = 0;
        }
      },
      { threshold: 0.6 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      className="rounded-md"
      muted
      playsInline
      preload="metadata"
      controls
      loop
      {...props}
    >
      <source src={src} type="video/mp4" />
      Your browser does not support videos.
    </video>
  );
}
