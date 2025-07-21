export const getTimerKey = (userId: string) => {
  const safeId = userId.replace(/@/g, '_at_').replace(/[^a-zA-Z0-9._-]/g, '_');
  return `vandrounik.timer.${safeId}`;
};
