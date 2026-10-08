export const generateVideoThumbnail = (
  videoSrc: string
): Promise<string> => {
  return new Promise((resolve, reject) => {
    const video = document.createElement("video");

    video.src = videoSrc;
    video.crossOrigin = "anonymous";
    video.muted = true;
    video.playsInline = true;
    video.preload = "metadata";

    video.onloadeddata = () => {
      // Take frame from 1 second
      video.currentTime = 1;
    };

    video.onseeked = () => {
      const canvas = document.createElement("canvas");

      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;

      const ctx = canvas.getContext("2d");

      if (!ctx) {
        reject(new Error("Canvas not supported"));
        return;
      }

      ctx.drawImage(
        video,
        0,
        0,
        canvas.width,
        canvas.height
      );

      const thumbnail = canvas.toDataURL("image/jpeg", 0.8);

      resolve(thumbnail);
    };

    video.onerror = () => {
      reject(new Error("Unable to load video"));
    };
  });
};

export const truncateText = (text: string, maxLength = 400) => {
  if (text.length <= maxLength) return text;

  return text.slice(0, maxLength).trimEnd() + "...";
};