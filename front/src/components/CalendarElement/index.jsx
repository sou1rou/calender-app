import React from "react";
import * as styles from "./style.css";
import { Typography } from "@material-ui/core";
import dayjs from "dayjs";
import { isSameMonth, isFirstDay, isSameDay } from "../../services/calendar";

const CalendarElement = ({ day }) => {
 
    const today = dayjs();
    
    const isCurrentMonth = isSameMonth(day, today);
    const textColor = isCurrentMonth ? "textPrimary" : "textSecondary";
    
    const isFirstDay = day.date() === 1;
    const format = isFirstDay ? "M月D日" : "D";
    
    //今日だった場合(true)styleに青の丸を付ける。
    const compareFormat = "YYYYMMDD";
    const isToday = isSameDay(day, today);
  
    return (
    <div className={styles.element}>
      <Typography
        className={styles.date}
        color={textColor}
        align="center"
        variant="caption"
        component="div"
      >
       <span className={isToday ? styles.today : ""}>   
        {day.format(format)}
        </span>
      </Typography>
    </div>
  );
};

export default CalendarElement;