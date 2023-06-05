import { DateTime } from './luxon.js';

const getCurrentDate = () => {
  const dateTime = DateTime.now().setLocale('en-US').toLocaleString({
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });

  // Remove the GMT offset
  const formattedDateTime = dateTime.replace(/GMT[-+]\d{1,2}:?\d{2}\s*/, '');

  return formattedDateTime;
};

export default getCurrentDate;