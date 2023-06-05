import { DateTime } from 'luxon';

const getCurrentDate = () => {
  const dateTime = DateTime.now().toLocaleString(DateTime.DATETIME_FULL);
  return dateTime;
};

export default getCurrentDate;