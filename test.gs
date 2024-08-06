function compareDates() {
  var date1 = new Date('2024-08-05T16:00:00');
  var date2 = new Date('2024-08-05T15:00:00');
  
  if (date1 < date2) {
    Logger.log('date1 is earlier than date2');
  } else if (date1 > date2) {
    Logger.log('date1 is later than date2');
  } else {
    Logger.log('date1 and date2 are the same');
  }
}
