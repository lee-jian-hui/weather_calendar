// Function to get start of today in UTC
function getStartOfTodayUTC() {
  const today = new Date();
  const utcYear = today.getUTCFullYear();
  const utcMonth = today.getUTCMonth();
  const utcDate = today.getUTCDate();
  
  return new Date(Date.UTC(utcYear, utcMonth, utcDate));
}

// Function to convert a UTC date to a local date considering timezone offset
function convertUTCToLocalDate(utcDate, offsetHours) {
  const localDate = new Date(utcDate);
  localDate.setHours(localDate.getHours() + offsetHours);
  return localDate;
}

// Function to get start of today in a specific timezone
function getStartOfTodayInTimeZone(offsetHours) {
  const utcStart = getStartOfTodayUTC();
  return convertUTCToLocalDate(utcStart, offsetHours);
}
