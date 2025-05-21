export const getMinuteDiff = (date1: Date | string, date2: Date | string): number => {
  const d1 = new Date(date1);
  const d2 = new Date(date2);

  const diffMs = Math.abs(d2.getTime() - d1.getTime()); // 밀리초 차이
  const diffMinutes = Math.floor(diffMs / 1000 / 60); // 분 단위

  return diffMinutes;
};
