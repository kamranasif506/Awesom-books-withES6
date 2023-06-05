import { DateTime } from './luxon.js';

const getCurrentDate = () => {
    const dateTime = DateTime.now().setLocale('en-US').toLocaleString(DateTime.DATETIME_FULL);
    return dateTime;
};

export default getCurrentDate;