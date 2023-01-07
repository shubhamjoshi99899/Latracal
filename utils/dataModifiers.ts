import Moment from "moment";

export const handleGetOnlyTime = (date: any) => {
  Moment.locale("en");
  return Moment(date).format("h:mm a");
};

export const getTimeInMin = (value: any) => {
  return Math.floor(value / 60) + ":" + (value % 60 ? value % 60 : "00");
};
