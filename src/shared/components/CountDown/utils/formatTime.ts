export const formatTime = (seconds: number): string => {
  return seconds.toString().padStart(2, '0');
};
