import dayjs from "dayjs";

export const isSameDay = (d1, d2) => {
  const format = "YYYYMMDD";
  return d1.format(format) === d2.format(format);
};

export const isSameMonth = (m1, m2) => {
  const format = "YYYYMM";
  return m1.format(format) === m2.format(format);
};

export const isFirstDay = day => day.date() === 1;


export const createCalendar = month => {
  console.log(month)
  const firstDay = getMonth(month);
  　 // 今月の最初の日を追加
    const firstDayIndex = firstDay.day();
    // 最初の日の曜日のindexを取得

    return Array(35)
    .fill(0)
    .map((_, i) =>{
        const diffFromFirstDay = i - firstDayIndex;
        const day = firstDay.add(diffFromFirstDay, "day");

        return day;
    });
};

export const getMonth = ({ year, month }) => {
  return dayjs(`${year}-${month}`);
};